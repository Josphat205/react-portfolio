import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
    emailjs.sendForm('service_tsh2srf', 'template_sfdb5qc', form.current)
      .then((result) => {
          window.alert(`message send successfully!!`)
      }, (error) => {
        window.alert(`Error occured!!`,error)
      });
  };
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <section className="bg-[#0a192f] dark:bg-gray-900 w-full">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
              Contact me
            </p>
            <p className="mt-8 lg:mb-16 font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl">
              Got a technical issue?  Want to send feedback about a beta feature?
              Need details about our My experience? Let me know.
            </p>
            <form className="space-y-8" ref={form} onSubmit={sendEmail}>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
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
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let me know how we can help each other"
                  name="user_subject"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  name="message"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
