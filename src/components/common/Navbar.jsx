import { useState } from 'react';
import logo from '/assets/logo.png';
import { Link } from 'react-router-dom';

const navItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About Us',
    subMenu: [
      {
        text: 'History Bangla',
        link: '/history-bangla',
      },
      {
        text: 'History English',
        link: '/history-english',
      },
      {
        text: 'Citizen Charter',
        link: '/citizen-charter',
      },
      {
        text: 'Vision & Mission',
        link: '/vision-and-mission',
      },
    ],
  },
  {
    text: 'Academic',
    subMenu: [
      {
        text: `Principal's Information`,
        link: '/principal',
      },
      {
        text: `Vice Principal's Information`,
        link: '/vice-principal',
      },
      {
        text: `Teachers Information`,
        link: '/teachers',
      },
      {
        text: `Holiday Calendar`,
        link: '/holiday-calendar',
      },
      {
        text: `Academic Calendar`,
        link: '/academic-calendar',
      },
      {
        text: `Class Routine`,
        link: '/class-routine',
      },
      {
        text: `3rd & 4th Class Employee Information`,
        link: '/employees',
      },
    ],
  },
  {
    text: 'Department',
    subMenu: [
      {
        text: `Department's History`,
        link: '/departments-history',
      },
      {
        text: `Teachers Info`,
        link: '/teachers',
      },
      {
        text: `Students Info`,
        link: '/students-info',
      },
      {
        text: `Notice`,
        link: '/notice',
      },
      {
        text: `Events`,
        link: '/events',
      },
      {
        text: `Results`,
        link: '/results',
      },
    ],
  },
  {
    text: 'Notices',
    subMenu: [
      {
        text: `Recent Notices`,
        link: '/notice',
      },
      {
        text: `Office Order`,
        link: '/office-order',
      },
      {
        text: `Admission Notice`,
        link: '/admission-notice',
      },
      {
        text: `Exam Notice`,
        link: '/exam-notice',
      },
      {
        text: `NOC`,
        link: '/noc',
      },
    ],
  },
  {
    text: 'Exams',
    subMenu: [
      {
        text: `Exam Notices`,
        link: '/exam-notice',
      },
      {
        text: `Exam Routine`,
        link: '/exam-routine',
      },
      {
        text: `Syllabus`,
        link: '/syllabus',
      },
    ],
  },
  {
    text: 'Admission',
    subMenu: [
      {
        text: `Admission Notice`,
        link: '/admission-notice',
      },
      {
        text: `Admission Info`,
        link: '/admission-info',
      },
    ],
  },
  {
    text: 'Gallery',
    subMenu: [
      {
        text: `Image Gallery`,
        link: '/image-gallery',
      },
      {
        text: `Video Gallery`,
        link: '/video-gallery',
      },
    ],
  },
];

const Navbar = () => {
  // const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(false);
  const [subMenu, setSubMenu] = useState(0);

  return (
    <>
      <div className="relative bg-primary bg-opacity-10 shadow-md py-2">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <img src={logo} alt="logo" className="h-[55px] w-[55px]" />
            <h4 className="flex-grow text-center font-bold text-xl">
              Beanibazar Govt. College (বিয়ানিবাজার সরকারি কলেজ)
            </h4>
          </div>
        </div>
      </div>

      <div className="relative bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col gap-y-2 justify-between items-center">
            <div
              className="relative w-full flex flex-col gap-y-1.5 justify-center items-center lg:hidden border border-black rounded py-2 cursor-pointer"
              onClick={() => setActiveNav((prev) => !prev)}
            >
              <span className="block w-11 h-0.5 bg-black" />
              <span className="block w-11 h-0.5 bg-black" />
              <span className="block w-11 h-0.5 bg-black" />
            </div>

            {/* nav */}
            {/* <ul
              className={`relative flex-col lg:flex-row items-center justify-between w-full gap-6 py-4 lg:py-0 z-1000 ${
                activeNav ? 'flex' : 'hidden lg:flex'
              }`}
            >
              {navItems.map((item, i) => (
                <li
                  className={`relative flex flex-col items-center gap-2 text-base font-medium z-[1000] hover:cursor-pointer`}
                  key={i}
                  onClick={() =>
                    item.subMenu && subMenu !== i
                      ? setSubMenu(i)
                      : setSubMenu(0)
                  }
                  style={{ position: 'relative' }}
                >
                  <div className="group flex items-center gap-2">
                    {item?.link ? (
                      <Link href={item.link}>{item.text}</Link>
                    ) : (
                      <h6>{item.text}</h6>
                    )}
                    {item.subMenu && subMenu !== i && <FaChevronDown />}
                    {item.subMenu && subMenu === i && <FaChevronUp />}
                  </div>
                  {item.subMenu && subMenu === i && (
                    <ul className="relative lg:absolute top-[111%] flex flex-col gap-y-2 left-1/2 lg:-left-full -translate-x-1/2 lg:translate-x-0 shadow-light bg-white p-4 lg:p-6 min-w-[250px] rounded z-[99999]">
                      {item.subMenu.map((sub, j) => {
                        return (
                          <li
                            className={`relative text-base font-medium hover:text-primary`}
                            key={j}
                          >
                            <Link to={sub.link ? sub.link : ''}>
                              {sub.text}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul> */}

            {/* hover effect */}
            <ul
              className={`relative flex-col lg:flex-row items-center justify-between w-full gap-6 py-4 lg:py-0 z-1000 ${
                activeNav ? 'flex' : 'hidden lg:flex'
              }`}
            >
              {navItems.map((item, i) => (
                <li
                  className={`group relative flex flex-col items-center gap-2 text-base font-medium z-[1000] hover:cursor-pointer`}
                  key={i}
                  onClick={() =>
                    item.subMenu && subMenu !== i
                      ? setSubMenu(i)
                      : setSubMenu(0)
                  }
                >
                  <div className="flex items-center gap-2">
                    {item?.link ? (
                      <Link href={item.link}>{item.text}</Link>
                    ) : (
                      <h6>{item.text}</h6>
                    )}
                  </div>

                  {item.subMenu && (
                    <ul className="group-hover:flex relative lg:absolute top-[111%] hidden flex-col gap-y-2 left-1/2 lg:-left-full -translate-x-1/2 lg:translate-x-0 shadow-light bg-white p-4 lg:p-6 min-w-[250px] rounded z-[99999]">
                      {item.subMenu.map((sub, j) => {
                        return (
                          <li
                            className={`relative text-base font-medium hover:text-primary`}
                            key={j}
                          >
                            <Link to={sub.link ? sub.link : ''}>
                              {sub.text}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
