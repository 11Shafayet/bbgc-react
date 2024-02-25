import image1 from '../assets/11.jpg';
// import image2 from '../assets/12.jpg';
import image3 from '../assets/13.jpg';
import image4 from '../assets/14.jpg';
import image5 from '../assets/15.jpg';
import image6 from '../assets/16.jpg';
import image7 from '../assets/17.jpg';

const images = [image1, image3, image4, image5, image6, image7];

const ImageGallery = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Image Gallery`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {images.map((image, i) => (
              <div key={i} className="max-h-[300px]">
                <img
                  src={image}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
