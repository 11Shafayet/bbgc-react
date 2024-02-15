import principal from '/assets/teachers/principal.jpeg';

const Principal = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div>
          <h4 className="text-3xl">{`Principal's Information`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
            <div className="col-span-1 bg-white shadow-light p-4 rounded-md">
              <img
                src={principal}
                alt="principal"
                className="w-full h-auto max-h-[350px] object-cover rounded-md"
              />

              <div className="text-center mt-4">
                <h5 className="text-xl font-bold text-primary">
                  প্রফেসর মোঃ হাবিবুর রহমান
                </h5>
                <h5 className="text-sm font-bold opacity-75 my-2">অধ্যক্ষ</h5>
                <h5 className="text-sm font-bold opacity-75">
                  Joining Date: 13 Sep 2021
                </h5>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2  bg-white shadow-light p-4 rounded-md">
              Principal Message
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
