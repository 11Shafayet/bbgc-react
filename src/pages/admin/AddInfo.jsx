/* eslint-disable no-unused-vars */
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../components/common/Loader';

const categoryOptions = [
  {
    label: 'Students Info',
    value: 'studentsInfo',
  },
  {
    label: 'Admission Info',
    value: 'admissionInfo',
  },
  {
    label: 'Events',
    value: 'events',
  },
  {
    label: 'Results',
    value: 'results',
  },
  {
    label: 'NOC',
    value: 'noc',
  },
  {
    label: 'Exam',
    value: 'exam',
  },
  {
    label: 'Syllabus',
    value: 'syllabus',
  },
];

const AddInfo = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [pic, setPic] = useState('');
  const [picDatabase, setPicDatabase] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const picSubmit = (pic) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      if (pic === undefined) {
        toast.error('Please upload a jpeg or png image!');
        setLoading(false);
        reject('No image provided');
        return;
      }

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
            setPicDatabase(data.url.toString());
            toast.success('Image added successfully!');
            resolve();
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            reject(err);
          });
      } else {
        toast.error('Please upload a jpeg or jpg or png image!');
        setLoading(false);
        reject('Invalid image format');
      }
    });
  };

  const addData = async () => {
    try {
      setLoading(true);
      const result = await axios.post(
        `https://bbgc-backend.vercel.app/${category}`,
        {
          title,
          link,
          pic: picDatabase,
        }
      );
      setLoading(false);
      toast.success('Info added successfully!');
      return result;
    } catch (error) {
      toast.error('Error Adding Info!');
      console.log(error);
      setLoading(false);
      throw error;
    }
  };

  const { data, mutateAsync } = useMutation({
    mutationFn: addData,
  });

  useEffect(() => {
    if (picDatabase) {
      mutateAsync();
    }
  }, [picDatabase]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!title || !link || !pic || !category) {
      toast.warning('Please fill all the fields!');
      setLoading(false);
      return;
    } else {
      try {
        await picSubmit(pic);
        setLoading(false);
      } catch (error) {
        console.error('Error adding new info:', error);
        toast.warning('Failed To add new info!');
        setLoading(false);
      }
    }
  };

  return (
    <section className="py-12 relative flex justify-center items-center ">
      <div className="container px-4 mx-auto">
        <div>
          <h3 className="text-center text-3xl font-bold">Add Info</h3>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-light rounded-md p-4 md:p-12 max-w-[600px] mx-auto mt-6 flex flex-col gap-y-3"
          >
            {/* cateogry */}
            <div className="flex flex-col">
              <label htmlFor="category" className="font-medium">
                Select Category <span className="text-red-600">*</span>
              </label>
              <select
                name="category"
                id="category"
                className="bg-white shadow-light p-2.5 px-4 font-semibold mt-2 rounded"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryOptions.map((item, i) => (
                  <option value={item.value} key={i}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            {/* title */}
            <div>
              <label htmlFor="title" className="font-medium">
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                className="shadow-light rounded py-3 px-4 w-full mt-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* link */}
            <div>
              <label htmlFor="link" className="font-medium">
                Link
              </label>
              <input
                id="link"
                type="text"
                placeholder="Paste your link here"
                className="shadow-light rounded py-3 px-4 w-full mt-2"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            {/*  image */}
            <div className="flex flex-col gap-4 justify-between mt-3">
              <label htmlFor="image" className="font-medium">
                Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setPic(e.target.files[0])}
              />
            </div>

            {/* submit button */}
            <div>
              <button
                type="submit"
                className="bg-primary py-3 px-6 rounded-md text-white font-medium hover:opacity-90 mt-6 w-full"
              >
                {loading ? <Loader loader /> : 'Submit Now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddInfo;
