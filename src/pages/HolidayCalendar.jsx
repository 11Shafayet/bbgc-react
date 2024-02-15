import holiday from '/assets/holiday-calendar.png';

const HolidayCalendar = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Holiday Calendar`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />
          <div className="max-w-[800px] w-full h-auto">
            <img src={holiday} alt="holiday" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidayCalendar;
