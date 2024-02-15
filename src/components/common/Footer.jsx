import { FaWhatsapp } from 'react-icons/fa';
import map from '/assets/map.png';

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <img src={map} alt="" />
          </div>
          <h5 className="text-center !leading-loose">
            আমার সোনার বাংলা, আমি তোমায় ভালোবাসি।
            <br />
            চিরদিন তোমার আকাশ, তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥
            <br />
            ও মা, ফাগুনে তোর আমের বনে ঘ্রাণে পাগল করে,
            <br />
            মরি হায়, হায় রে—
            <br />
            ও মা, অঘ্রানে তোর ভরা ক্ষেতে আমি কী দেখেছি মধুর হাসি॥
            <br />
            কী শোভা, কী ছায়া গো, কী স্নেহ, কী মায়া গো—
            <br />
            কী আঁচল বিছায়েছ বটের মূলে, নদীর কূলে কূলে।
            <br />
            মা, তোর মুখের বাণী আমার কানে লাগে সুধার মতো,
            <br />
            মরি হায়, হায় রে—
            <br />
            মা, তোর বদনখানি মলিন হলে, ও মা, আমি নয়নজলে ভাসি॥
            <br />
          </h5>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-6">Contact Us</h4>
            <ul>
              <li className="flex gap-2 items-center text-xl font-medium">
                <FaWhatsapp size={20} />
                <p>+8801638719578</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
