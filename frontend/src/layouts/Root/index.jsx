import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/Header';

const RootLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

export default RootLayout;
