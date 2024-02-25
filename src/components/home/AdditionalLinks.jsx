import { Link } from 'react-router-dom';

const links = [
  {
    label: 'NU Admission Link',
    link: 'http://admission.nu.edu.bd/',
  },
  {
    label: 'NU Recent Notices',
    link: 'https://www.nu.ac.bd/recent-news-notice.php',
  },
  {
    label: 'XI Admission Link',
    link: '/admission-notice',
  },
];

const AdditionalLinks = () => {
  return (
    <div className="bg-white shadow-light rounded-md p-4 md:p-6">
      <h4 className="text-3xl font-bold text-primary mb-6">
        Admission & Form Fill Up Links
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link, i) => (
          <Link
            to={link.link}
            target="_blank"
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

export default AdditionalLinks;
