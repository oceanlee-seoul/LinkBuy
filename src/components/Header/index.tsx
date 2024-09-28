import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  LogoWrapper,
  LogoTitle,
  NavWrapper,
  NavItem,
} from './Header.css';
import Profile from '../common/Profile';

export default function Header() {
  return (
    <div className={HeaderWrapper}>
      <div className={HeaderContainer}>
        <div className={LogoWrapper}>
          <img className={HeaderLogo} src="/assets/images/logo.png" />
          <p className={LogoTitle}>LinkBy</p>
        </div>
        <nav className={NavWrapper}>
          <Link className={NavItem} to="/articles">
            자유게시판
          </Link>
          <Link className={NavItem} to="/products">
            중고마켓
          </Link>
        </nav>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
}
