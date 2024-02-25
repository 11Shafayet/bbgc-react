import principalImage from '/assets/teachers/principal.jpeg';
import vicePrincipalImage from '/assets/teachers/vice-principal.jpeg';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Loader from '../components/common/Loader';
import { useEffect, useState } from 'react';

import { teachersList } from '../data';

const Teachers = () => {
  const axiosPublic = useAxiosPublic();
  const [sortedList, setSortedList] = useState(teachersList);

  const { isLoading, data } = useQuery({
    queryKey: ['teachers'],
    queryFn: () =>
      axiosPublic
        .get(`/teachers`)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });

  useEffect(() => {
    if (data) {
      const updatedList = [...sortedList];
      data.forEach((item) => {
        const index = updatedList.findIndex((el) => el.dep === item.dep);

        // Check if any teacher with the same mobile number already exists
        if (
          !updatedList[index].teachers.some(
            (teacher) => teacher.mobile === item.mobile
          )
        ) {
          updatedList[index].teachers.push(item);
        }
      });
      setSortedList(updatedList);
    }
  }, [data]);

  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Teachers's Information`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />

          {/* principal & vice principal */}
          <div className="bg-white shadow-light rounded my-6 overflow-hidden">
            <div className="bg-primary text-white p-3">
              <h6 className="text-xl md:text-2xl font-semibold">
                Principal & Vice Principal
              </h6>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {/* principal */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-12 border rounded">
                <img
                  src={principalImage}
                  alt="principal"
                  className="w-full h-auto object-cover rounded max-w-[200px] border"
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
              {/* vice principal */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-12 border rounded">
                <img
                  src={vicePrincipalImage}
                  alt="vice principal"
                  className="w-full h-auto object-cover rounded max-w-[200px] border"
                />

                <div className="text-center mt-4">
                  <h5 className="text-xl font-bold text-primary">
                    মোঃ তারিকুল ইসলাম
                  </h5>
                  <h5 className="text-sm font-bold opacity-75 my-2">
                    উপাধ্যক্ষ
                  </h5>
                  <h5 className="text-sm font-bold opacity-75">
                    Joining Date: 13 Sep 2021
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            sortedList?.map((item, i) => {
              return (
                <div
                  className="bg-white shadow-light rounded my-6 overflow-hidden"
                  key={i}
                >
                  <div className="bg-primary text-white p-3">
                    <h6 className="text-xl md:text-2xl font-semibold capitalize">
                      Department Of {item?.label}
                    </h6>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {item?.teachers?.map((teacher, i) => (
                      <div
                        className="bg-white shadow-light p-4 rounded-md overflow-hidden"
                        key={i}
                      >
                        <img
                          src={teacher?.pic && teacher.pic}
                          alt={teacher?.name}
                          className="w-full h-auto max-h-[300px] object-cover rounded-md"
                        />

                        <div className="text-center mt-4">
                          <h5 className="text-xl font-bold text-primary">
                            {teacher?.name}
                          </h5>
                          <h5 className="text-sm font-bold opacity-75 my-2">
                            {teacher?.designation}
                          </h5>
                          <h6 className="font-medium opacity-75 italic my-2">
                            {teacher?.mobile}
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
