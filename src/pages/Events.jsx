import image from '../assets/citizen-charter.jpeg';

const Events = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Events`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />

          <div className="max-w-[1200px]">
            {/* <img src={image} alt="student" className="max-w-full h-auto" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
