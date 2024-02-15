import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const notices = [
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nulla, eveniet natus totam ipsam rem incidunt necessitatibus perferendis. Explicabo, incidunt!',
    link: '/',
  },
  {
    text: 'Qui nulla, eveniet natus totam ipsam rem incidunt necessitatibus perferendis',
    link: '/',
  },
  {
    text: 'Lorem ipsum dolor sit.',
    link: '/',
  },
];

const HomeNotices = () => {
  return (
    <div className="py-12 bg-white shadow-light">
      <Marquee>
        {notices.map((notice, i) => {
          return (
            <div className="flex items-center gap-3 mx-4" key={i}>
              <div className="bg-primary text-white py-1 px-3 text-sm rounded-md">
                <p className="blink">New</p>
              </div>
              <Link to={notice.link} className="hover:underline">
                {notice.text}
              </Link>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default HomeNotices;
