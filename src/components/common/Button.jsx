/* eslint-disable react/prop-types */
import Link from 'next/link';

const Button = ({ type, text, link }) => {
  if (type === 'submit') {
    return (
      <button
        type="submit"
        className="py-3 px-6 bg-primary text-white rounded-md"
      >
        {text}
      </button>
    );
  } else if (type === 'link') {
    return (
      <Link href={link} className="py-3 px-6 bg-primary text-white rounded-md">
        {text}
      </Link>
    );
  } else {
    return (
      <button className="py-3 px-6 bg-primary text-white rounded-md">
        {text}
      </button>
    );
  }
};

export default Button;
