import image from '../assets/students.png';

const StudentInfo = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Student's Information`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />

          <div className="max-w-[1200px] mx-auto">
            <img src={image} alt="student" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentInfo;
