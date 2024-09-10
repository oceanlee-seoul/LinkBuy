import {
  background,
  container,
  authInputBox,
  authInput,
  authHeader,
  authLabel,
} from './signup-signin.css';
import { ChangeEvent, useState } from 'react';
import Button from '../../components/common/Button';

export default function Signin() {
  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSigninData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className={background}>
      <div className={container}>
        <h1 className={authHeader}>Sign In</h1>
        <div className={authInputBox}>
          <label className={authLabel} htmlFor="email">
            이메일
          </label>
          <input
            id="email"
            className={authInput}
            value={signinData.email}
            onChange={inputChangeHandler}
            type="text"
            placeholder="이메일을 입력해 주세요."
          />
        </div>
        <div className={authInputBox}>
          <label className={authLabel} htmlFor="password">
            비밀번호
          </label>
          <input
            id="password"
            className={authInput}
            value={signinData.password}
            onChange={inputChangeHandler}
            type="password"
            placeholder="비밀번호를 입력해 주세요."
          />
        </div>
        <Button height={50}>로그인</Button>
      </div>
    </div>
  );
}
