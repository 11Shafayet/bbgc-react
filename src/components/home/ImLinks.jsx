import { Link } from 'react-router-dom';

const links = [
  {
    label: 'Sylhet Education Board',
    link: '/',
  },
  {
    label: 'Ministry Of Education',
    link: '/',
  },
  {
    label: 'Sylhet Education Board',
    link: '/',
  },
  {
    label: 'National University',
    link: '/',
  },
];

const ImLinks = () => {
  return (
    <div className="bg-white shadow-light rounded-md p-4 md:p-6">
      <h4 className="text-3xl font-bold text-primary mb-6">Important Links</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link, i) => (
          <Link
            to={link.link}
            className="underline font-medium hover:text-primary duration-300"
            key={i}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ImLinks;
