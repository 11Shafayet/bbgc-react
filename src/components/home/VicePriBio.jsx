import vicePri from '/assets/teachers/vice-principal.jpeg';

const VicePriBio = () => {
  return (
    <div className="bg-white shadow-light rounded-md p-4 md:p-6 flex items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        <img
          src={vicePri}
          alt="vice-principal"
          className="w-28 h-28 xl:w-36 xl:h-36 object-cover rounded-md"
        />
        <div>
          <h5 className="text-2xl font-semibold">
            Professor Md. Tarikul Islam
          </h5>
          <h5 className="text-lg font-medium">Vice Principal</h5>
          <h5 className="font-medium">ID: 00004243</h5>
          <p className="opacity-75 italic">tarikul-et@yahoo.com</p>
        </div>
      </div>
    </div>
  );
};

export default VicePriBio;
