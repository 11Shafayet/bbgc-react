import academic from '/assets/academic-calendar.png';

const AcademicCalendar = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Academic Calendar`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />
          <div className="max-w-[800px] w-full h-auto">
            <img src={academic} alt="academic" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicCalendar;
