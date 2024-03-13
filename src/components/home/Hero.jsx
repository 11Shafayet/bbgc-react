import { useEffect, useState } from 'react';
import one from '/assets/one.jpg';
import eleven from '/assets/11.jpg';
import seventeen from '/assets/17.jpg';
import seven from '/assets/seven.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const sliderData = [
  { image: one },
  { image: eleven },
  { image: seven },
  { image: seventeen },
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    let imageSlider = setInterval(() => {
      setActiveImage((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(imageSlider);
  }, []);

  return (
    <header className="relative min-h-[50vh] md:min-h-[80vh] py-12 md:py-20 flex justify-center items-center z-10">
      <img
        src={sliderData[activeImage].image}
        alt="one"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />
      <div className="bg-gradient-to-r from-[#ec489957] via-[#ef44445e] to-[#eab308ab] absolute inset-0 -z-10" />
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center p-12 bg-white bg-opacity-40 backdrop-blur-md rounded-md max-w-[700px] mx-auto">
          <h4 className="text-3xl font-bold text-center text-white !leading-[1.3]">
            Welcome to <br />
            <span className="text-4xl !leading-[1.36]">
              <span className="text-primary text-5xl md:text-7xl">
                Beanibazar
              </span>
              <br /> Govt. College
            </span>
          </h4>
        </div>
      </div>

      {/* arrows */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-5 bg-white rounded-full flex justify-center items-center w-11 h-11 z-20 cursor-pointer hover:bg-primary hover:text-white duration-300"
        onClick={() =>
          setActiveImage((prev) =>
            prev === 0 ? sliderData.length - 1 : prev - 1
          )
        }
      >
        <FaArrowLeft />
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 right-5 bg-white rounded-full flex justify-center items-center w-11 h-11 z-20 cursor-pointer hover:bg-primary hover:text-white duration-300"
        onClick={() =>
          setActiveImage((prev) =>
            prev === sliderData.length - 1 ? 0 : prev + 1
          )
        }
      >
        <FaArrowRight />
      </div>
    </header>
  );
};

export default Hero;
