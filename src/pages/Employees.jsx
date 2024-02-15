import employees from '/assets/employees.jpeg';

const Employees = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Employees`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />
          <div className="max-w-[800px] w-full h-auto">
            <img src={employees} alt="employees" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employees;
