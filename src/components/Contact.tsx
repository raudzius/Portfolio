import { motion } from 'framer-motion';
import React from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../hoc/SectionWrapper';
import styles from '../styles';
import { slideIn } from '../utils/motion';
import EarthCanvas from './canvas/EarthCanvas';

const Contact: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = React.useState(false);

  const handleChange: React.ChangeEventHandler = (event) => {
    const { name, value } = event.target as HTMLInputElement;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_wpnkebm',
        'template_s4tf40q',
        {
          from_name: form.name,
          to_name: 'Mykolas Raudžius',
          from_email: form.email,
          to_email: 'raudziusmykolas@gmail.com',
          message: form.message,
        },
        'zOFleXINDrcA-RhwC',
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong.');
        },
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col" htmlFor="name">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col" htmlFor="email">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col" htmlFor="message">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
