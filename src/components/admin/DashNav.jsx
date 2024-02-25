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
    label: 'All Users',
    link: '/dashboard/all-users',
  },
];

const DashNav = () => {
  const { pathname } = useLocation();

  const [active, setActive] = useState('');
  const [open, setIsOpen] = useState(false);

  const [user, setUser] = useState(null);
  const [activeProfile, setActiveProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('userInfo'));

    setUser(loggedInUser);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    console.log(pathname);

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
          {/* nav */}
          {/* desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <ul className="flex gap-6 text-base uppercase">
              {navData.map((item, i) => {
                return (
                  <Link
                    className={`font-medium hover:text-primary ${
                      active === item?.link && 'text-primary'
                    }`}
                    to={item?.link}
                    key={i}
                  >
                    <li>{item?.label}</li>
                  </Link>
                );
              })}
            </ul>

            <div className="flex items-center">
              <div
                className="relative bg-gray-100 rounded-full cursor-pointer"
                onClick={() => setActiveProfile((prev) => !prev)}
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
          </div>
          <div className="flex items-center lg:hidden">
            <div
              className="relative bg-gray-100 rounded-full cursor-pointer"
              onClick={() => setActiveProfile((prev) => !prev)}
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
          {/* mobile navigation hamburger menu */}
          <div className="block lg:hidden">
            <div
              className="cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {!open ? <GiHamburgerMenu /> : <FaTimes />}
            </div>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      {open && (
        <div className="block lg:hidden">
          <ul className="flex flex-col justify-center items-center gap-6 text-base uppercase">
            {navData.map((item, i) => {
              return (
                <Link
                  className={`font-medium hover:text-primary ${
                    active === item?.link && 'text-primary'
                  }`}
                  to={item?.link}
                  key={i}
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
