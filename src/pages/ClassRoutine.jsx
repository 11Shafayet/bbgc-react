import sunday from '../assets/sunday.png';
import monday from '../assets/monday.png';
import tuesday from '../assets/tuesday.png';
import wednesday from '../assets/wednesday.png';
import thursday from '../assets/thursday.png';
import { Link } from 'react-router-dom';

const routine = [sunday, monday, tuesday, wednesday, thursday];

const ClassRoutine = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Class Routine`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />
          <div className="max-w-[800px] w-full h-auto mx-auto">
            {routine.map((item, i) => (
              <img
                src={item}
                alt="routine"
                className="max-w-full h-full"
                key={i}
              />
            ))}

            <div className="mt-12">
              <Link
                className="text-primary underline text-2xl font-medium"
                to={`https://drive.google.com/drive/folders/1QwZ22nUZrspVL7V33X-j6FwJDcOok0UI`}
              >
                Get PDF of the routine
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassRoutine;
