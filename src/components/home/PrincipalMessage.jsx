import eleven from '/assets/11.jpg';

const PrincipalMessage = () => {
  return (
    <div className="bg-white shadow-light rounded-md p-4 md:p-6">
      <img
        src={eleven}
        alt=""
        width={200}
        height={200}
        className="max-w-full h-auto w-full object-cover max-h-[100px] mx-auto"
      />
      <p className="mt-4 font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        ex, et a fuga autem neque inventore sunt at repellendus pariatur
        laudantium nihil quia quidem animi, porro officiis veritatis soluta
        nisi.
      </p>
    </div>
  );
};

export default PrincipalMessage;
