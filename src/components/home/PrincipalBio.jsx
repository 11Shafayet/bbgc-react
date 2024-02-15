import principal from '/assets/teachers/principal.jpeg';

const PrincipalBio = () => {
  return (
    <div className="bg-white shadow-light rounded-md p-4 md:p-6 flex items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        <img
          src={principal}
          alt="principal"
          className="w-28 h-28 xl:w-36 xl:h-36 object-cover rounded-md"
        />
        <div>
          <h5 className="text-2xl font-semibold">MD. Habibur Rahman</h5>
          <h5 className="text-lg font-medium">Principal</h5>
          <h5 className="font-medium">Mobile: 01711-291258</h5>
          <p className="opacity-75 italic">habibtahlil@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalBio;
