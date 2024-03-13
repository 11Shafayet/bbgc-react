/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../../assets/logo.png';
import userImage from '../../assets/teachers/user.png';

const navData = [
  {
    label: 'Dashboard',
    link: '/dashboard',
  },
  {
    label: 'All Notice',
    link: '/dashboard/all-notice',
  },
  {
    label: 'All Teachers',
    link: '/dashboard/all-teachers',
  },
  {
    label: 'All Routine',
    link: '/dashboard/all-routine',
  },
  {
    label: 'Students Info',
    link: '/dashboard/students-info',
  },
  {
    label: 'All Users',
    link: '/dashboard/all-users',
  },
];

const DashNav = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const [open, setIsOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="bg-white shadow w-full text-4xl relative py-3 font-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <img src={logo} alt="" className="max-w-[100px]" />
          </Link>
          {/*  user porfile and nav */}
          <div className="flex  items-center gap-4">
            <div className="flex items-center">
              <div
                className="relative bg-gray-100 rounded-full cursor-pointer"
                onClick={() => {
                  setActiveProfile((prev) => !prev);
                  setIsOpen(false);
                }}
              >
                <img
                  src={userImage}
                  alt="user"
                  className="w-11 h-11 rounded-full"
                />
                {activeProfile && (
                  <div className="absolute bg-white text-black top-full right-0 rounded-md z-[100] shadow">
                    <h6
                      className="uppercase hover:bg-gray-200 hover:bg-opacity-15 py-4 px-5 duration-500 font-bold cursor-pointer text-base"
                      onClick={logoutHandler}
                    >
                      Logout
                    </h6>
                  </div>
                )}
              </div>
            </div>
            {/*hamburger menu */}
            <div className="block">
              <div
                className="cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {!open ? <GiHamburgerMenu /> : <FaTimes />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  navigation */}
      {open && (
        <div className="block">
          <ul className="flex flex-col justify-center items-center gap-6 text-base uppercase">
            {navData.map((item, i) => {
              return (
                <Link
                  className={`font-medium hover:text-primary ${
                    active === item?.link && 'text-primary'
                  }`}
                  to={item?.link}
                  key={i}
                  onClick={() => setIsOpen(false)}
                >
                  <li>{item?.label}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DashNav;
