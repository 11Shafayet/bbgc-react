/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import imageOne from '/assets/eight.jpg';

const Header = ({ text }) => {
  return (
    <header className="py-12 md:py-20 min-h-56 relative flex justify-center items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="container px-4 mx-auto">
        <h4 className="text-3xl md:text-5xl font-bold text-white text-center">
          {text}
        </h4>
      </div>
    </header>
  );
};

export default Header;
