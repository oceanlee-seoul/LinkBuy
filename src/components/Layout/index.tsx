import { Outlet } from 'react-router-dom';
import Header from '../Header';
import ResponsiveLayout from './ResponsiveLayout';
export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <ResponsiveLayout>
          <Outlet />
        </ResponsiveLayout>
      </main>
    </div>
  );
}
