import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Loader from '../../components/common/Loader';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllRoutine = () => {
  // fetch all notice
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const res = await axios.get(`https://bbgc-backend.vercel.app/routine/`);
      return res.data;
    },
  });

  // delete
  const handleDelete = async (routineId) => {
    try {
      const response = await axios.delete(
        `https://bbgc-backend.vercel.app/routine/${routineId}`
      );

      toast.success('Routine Deleted Successfully!');
      console.log(response);
    } catch (error) {
      console.error('Axios error', error);
      toast.success('Failed to delete Routine!');
    } finally {
      refetch();
    }
  };

  return (
    <div className="my-12 overflow-x-auto h-[700px] md:h-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
            All Routine
          </h2>

          <Link
            to={`/dashboard/add-routine`}
            className={`bg-primary text-white font-base uppercase font-bold py-3 px-12 hover:-translate-y-1 duration-500 rounded cursor-pointer`}
          >
            Add New Routine
          </Link>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center text-center w-full my-20">
            <Loader size={50} />
          </div>
        ) : (
          <Table striped className="relative">
            <Table.Head>
              <Table.HeadCell className="text-start">Image</Table.HeadCell>
              <Table.HeadCell className="text-start">Category</Table.HeadCell>
              <Table.HeadCell className="text-start">Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data?.map((item, i) => (
                <Table.Row
                  className={`${i % 2 === 0 ? 'bg-blue-50' : 'bg-teal-50'}`}
                  key={i}
                >
                  <Table.Cell>
                    <img
                      src={item?.pic}
                      alt=""
                      className="w-[80px] h-[80px] object-cover"
                    />
                  </Table.Cell>
                  <Table.Cell className="max-w-[200px] truncate font-bold">
                    {item?.category}
                  </Table.Cell>
                  <Table.Cell>
                    <FaTrash
                      className="text-red-500 cursor-pointer hover:scale-110 duration-500 hover:text-primary"
                      onClick={() => handleDelete(item?._id)}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </div>
    </div>
  );
};

export default AllRoutine;
