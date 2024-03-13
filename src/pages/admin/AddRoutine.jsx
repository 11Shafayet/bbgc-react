import { useState } from 'react';
import Loader from '../../components/common/Loader';

import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

const AddRoutine = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
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
      const result = await axios.post(
        `https://bbgc-backend.vercel.app/routine`,
        {
          category,
          pic,
        }
      );
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

    if (!category || !pic) {
      toast.warning('Please fill all the fields!');
      setLoading(false);
      return;
    } else {
      try {
        await mutateAsync();
        toast.success('routine added successfully!');
        setLoading(false);
      } catch (error) {
        console.error('Error adding new routine:', error);
        toast.warning('Failed To add new routine!');
        setLoading(false);
      }
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-xl md:text-5xl mb-12">
          Add New Routine
        </h2>
        <form
          className="max-w-[900px] black-shadow mx-auto py-12 px-8 md:px-12 rounded-xl"
          onSubmit={handleSubmit}
        >
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
            {/* category */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="category" className="form-label font-medium">
                Category
              </label>
              <div className="flex gap-6 flex-wrap">
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="category[]"
                    className="input-checkbox mr-1"
                    value={category}
                    onChange={() => setCategory('exam')}
                  />
                  <label htmlFor="category">Exam</label>
                </div>

                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="category[]"
                    className="input-checkbox mr-1"
                    value={category}
                    onChange={() => setCategory('class')}
                  />
                  <label htmlFor="category">Class</label>
                </div>
              </div>
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
                <>Add New Routine</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoutine;
