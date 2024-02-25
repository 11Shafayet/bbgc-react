import { useState } from 'react';
import Loader from '../../components/common/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

const departments = [
  {
    dep: 'Bangla',
    value: 'bangla',
  },
  {
    dep: 'English',
    value: 'english',
  },
  {
    dep: 'Economics',
    value: 'economics',
  },
  {
    dep: 'Political Science',
    value: 'political-science',
  },
  {
    dep: 'Philosophy',
    value: 'philosophy',
  },
  {
    dep: 'Islamic History And Culture',
    value: 'islamic-history-and-culture',
  },
  {
    dep: 'Management',
    value: 'management',
  },
  {
    dep: 'Accounting',
    value: 'accounting',
  },
  {
    dep: 'Physics',
    value: 'physics',
  },
  {
    dep: 'Chemistry',
    value: 'chemistry',
  },
  {
    dep: 'Mathematics',
    value: 'mathematics',
  },
  {
    dep: 'Zoology',
    value: 'zoology',
  },
  {
    dep: 'Botany',
    value: 'botany',
  },
  {
    dep: 'Computer',
    value: 'computer',
  },
  {
    dep: 'ICT',
    value: 'ict',
  },
];

const AddTeacher = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [dep, setDep] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobile, setMobile] = useState('');
  const [pic, setPic] = useState('');

  const picSubmit = (pic) => {
    setLoading(true);
    if (pic === undefined) {
      toast.error('Please upload a jpeg or png image!');
      setLoading(false);
      return;
    }

    console.log(pic);

    if (
      pic.type === 'image/jpeg' ||
      pic.type === 'image/png' ||
      pic.type === 'image/jpg'
    ) {
      const data = new FormData();
      data.append('file', pic);
      data.append('upload_preset', 'bbgc-react');
      data.append('cloud_name', 'djlghivmg');

      fetch('https://api.cloudinary.com/v1_1/djlghivmg/image/upload', {
        method: 'post',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          toast.success('Image added successfully!');
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast.error('Please upload a jpeg or jpg or png image!');
      setLoading(false);
      return;
    }
  };

  const addData = async () => {
    try {
      const result = await axios.post(`https://bbgc-backend.vercel.app/teachers/`, {
        name,
        dep,
        designation,
        mobile,
        pic,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // eslint-disable-next-line no-unused-vars
  const { data, mutateAsync } = useMutation({
    mutationFn: addData,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(pic);

    if (!name || !mobile || !designation || !dep || !pic) {
      toast.warning('Please fill all the fields!');
      setLoading(false);
      return;
    } else {
      try {
        await mutateAsync();
        toast.success('Teacher added successfully!');
        setLoading(false);
      } catch (error) {
        console.error('Error adding new Teacher:', error);
        toast.warning('Failed To add new Teacher!');
        setLoading(false);
      }
    }
  };
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-xl md:text-5xl mb-12">
          Add New Teacher
        </h2>
        <form
          className="max-w-[900px] black-shadow mx-auto py-12 px-8 md:px-12 rounded-xl"
          onSubmit={handleSubmit}
        >
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* name */}
            <div className="flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="name" className="form-label font-medium">
                {`Teacher's Name`}
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="bg-white shadow-light py-3 px-4 border rounded"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* depertmant */}
            <div className="flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="dep" className="form-label font-medium">
                {`Department`}
              </label>
              <select
                id="dep"
                className="bg-white shadow-light p-2 border h-12 rounded"
                value={dep}
                onChange={(e) => setDep(e.target.value)}
              >
                <option selected hidden>
                  Choose a department
                </option>
                {departments.map((dep, i) => (
                  <option value={dep?.value} key={i}>
                    {dep?.dep}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
            {/* mobile */}
            <div className="flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="mobile" className="form-label font-medium">
                {`Teacher's Mobile Number`}
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                name="mobile"
                className="bg-white shadow-light py-3 px-4 border rounded"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            {/* designation */}
            <div className="flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="designation" className="form-label font-medium">
                {`Designation`}
              </label>
              <input
                type="text"
                placeholder="Designation"
                name="designation"
                className="bg-white shadow-light py-3 px-4 border rounded"
                required
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
          </div>

          {/*  image */}
          <div className="flex flex-col gap-4 justify-between mt-6">
            <label htmlFor="image" className="form-label font-medium">
              Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => picSubmit(e.target.files[0])}
            />
          </div>

          <div className="mt-12">
            <button
              className={`bg-primary text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded cursor-pointer ${
                loading && 'cursor-not-allowed'
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader size={11} loader="sync" />
                </>
              ) : (
                <>Add New Teacher</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
