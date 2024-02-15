import { FaEnvelope, FaFax, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Header from '/src/components/common/Header';
import { Link } from 'react-router-dom';

const dummyData = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Find Us',
    desc: 'R5C4+HRJ, TNT RD, BEANIBAZAR',
    type: '',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Call Us',
    desc: '01734-080676',
    type: 'tel',
  },
  {
    icon: <FaEnvelope />,
    title: 'Mail Us',
    desc: 'info@GMAIL.com',
    type: 'mailto',
  },
  {
    icon: <FaFax />,
    title: 'Fax',
    desc: '(007) 123 456 7890',
    type: '',
  },
];

const ContactUs = () => {
  return (
    <div>
      <Header text={`Contact Us`} />

      <div className="bg-secondary bg-opacity-30 pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-primary uppercase text-base">{`LET'S GET IN TOUCH!`}</p>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold">{`We’d Love to Hear From You`}</h4>
          </div>

          <div className="flex flex-wrap items-center py-8">
            {dummyData.map((item, i) => (
              <div
                className="w-full sm:w-1/2 lg:w-1/4 p-4 flex items-center gap-3"
                key={i}
              >
                <div className="text-primary text-2xl">{item.icon}</div>
                <div>
                  <h5 className="text-primary text-xl font-bold">
                    {item.title}
                  </h5>
                  <Link to={`${item.type}:${item.desc}`}>
                    <p className="opacity-60 text-sm">{item.desc}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
