import { Outlet } from 'react-router-dom';
import DashNav from '../components/admin/DashNav';

const DashboardLayout = () => {
  return (
    <>
      <DashNav />
      <Outlet></Outlet>
    </>
  );
};

export default DashboardLayout;
