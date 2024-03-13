import { useState } from 'react';
import Loader from '../../components/common/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

const AddNotice = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');
  const [pic, setPic] = useState('');
  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

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
        `https://bbgc-backend.vercel.app/notice`,
        {
          title,
          date: formattedDate,
          category,
          pic,
          link,
        }
      );
      toast.success('Notice added successfully!');
      return result;
    } catch (error) {
      toast.error('Failed To add new notice!');
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

    if (!title || !category || !pic || !link) {
      toast.warning('Please fill all the fields!');
      setLoading(false);
      return;
    } else {
      try {
        await mutateAsync();
        setLoading(false);
      } catch (error) {
        console.error('Error adding new notice:', error);
        setLoading(false);
      }
    }
  };
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-xl md:text-5xl mb-12">
          Add New Notice
        </h2>
        <form
          className="max-w-[900px] black-shadow mx-auto py-12 px-8 md:px-12 rounded-xl"
          onSubmit={handleSubmit}
        >
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* title */}
            <div className=" flex flex-col gap-y-3 w-full">
              <label htmlFor="title" className="form-label font-medium">
                Notice Title
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="bg-white shadow-light py-3 px-4 border rounded"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

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
                    name="category"
                    className="input-checkbox mr-1"
                    value={category}
                    onChange={() => setCategory('general')}
                  />
                  <label htmlFor="category">General</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="category"
                    className="input-checkbox mr-1"
                    value={category}
                    onChange={() => setCategory('exam')}
                  />
                  <label htmlFor="category">Exam</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="category"
                    className="input-checkbox mr-1"
                    value={category}
                    onChange={() => setCategory('admission')}
                  />
                  <label htmlFor="category">Admission</label>
                </div>
              </div>
            </div>
          </div>

          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
            {/* link */}
            <div className=" flex flex-col gap-y-3 w-full">
              <label htmlFor="link" className="form-label font-medium">
                Notice Link
              </label>
              <input
                type="text"
                placeholder="Link"
                name="link"
                className="bg-white shadow-light py-3 px-4 border rounded"
                required
                value={link}
                onChange={(e) => setLink(e.target.value)}
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
                <>Add New Notice</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotice;
