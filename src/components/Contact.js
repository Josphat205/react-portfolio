import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion"
import './General.css';
function Contact() {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
    emailjs.sendForm('service_ak4q31t', 'template_eo6dz6j', form.current,'1ge0sQSeagmX_XIgV')
      .then((result) => {
          window.alert(`message send successfully!!`)
          console.log(result.text);
      }, (error) => {
        window.alert(`Error occured!!`,error)
          console.log(error.text);
      });
  };
  return (
    <motion.div name="contact" id="contact" className="w-full h-screen mt-5 bg-[#0a192f] text-gray-300 mb-10"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center mt-8 w-full h-full">
        <section className="bg-[#0a192f] dark:bg-gray-900 w-full">
          <div className="py-4 lg:py-10 px-4 mx-auto max-w-screen-md mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
              Contact me
            </p>
            <p className="mt-5 lg:mb-10 font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl">
              I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <form className="space-y-8 contact" ref={form} onSubmit={sendEmail}>
            <div>
                <label
                  for="subject"
                  className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your name"
                  name="user_name"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@gmail.com"
                  name="user_email"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let me know how we can help each other"
                  name="user_subject"
                  required
                />
              </div>
            
              <div className="sm:col-span-1">
                <label
                  for="message"
                  className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  name="message"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Contact;
