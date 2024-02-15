/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';

const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="font-secondary" ref={form} onSubmit={handleSubmit}>
      {/* input group */}
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        {/* name */}
        <div className="flex flex-col gap-y-3 w-full md:w-1/2">
          <label htmlFor="name" className="form-label !text-base">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input-with-shadow"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        {/* email */}
        <div className="flex flex-col gap-y-3 w-full md:w-1/2">
          <label htmlFor="email" className="form-label !text-base">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input-with-shadow"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
      </div>
      {/* input group */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">
        {/* subject */}
        <div className=" flex flex-col gap-y-3 w-full">
          <label htmlFor="subject" className="form-label !text-base">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject"
            className="input-with-shadow"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
      </div>
      {/* input group */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">
        {/* message */}
        <div className=" flex flex-col gap-y-3 w-full">
          <label htmlFor="message" className="form-label !text-base">
            Message
          </label>
          <textarea
            type="message"
            placeholder="Your message"
            name="message"
            className="input-with-shadow"
            rows="3"
            required
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-primary text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded mt-6"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
