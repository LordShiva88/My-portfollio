import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form Data:", form.current);

    emailjs
      .sendForm(
        "service_6vh18m9",
        "template_4x5apzg",
        form.current,
        "zuAc3bNHVpyZC92ku"
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
        },
        (error) => {
          console.log("Email Error:", error.text);
        }
      );
  };


  return (
    <section className="bg-gray-900">
      <div className="max-w-5xl px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="space-y-10">
            <div className="flex items-center lg:gap-10 md:gap-10 gap-5">
              <span className="inline-block p-4 text-blue-500 rounded-lg shadow-lg bg-gray-800">
                <MdOutlineMail className="text-4xl" />
              </span>
              <div>
                <h2 className="mt-4 text-base font-medium text-white">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  litonnath4184@gmail.com
                </p>
                <p className=" text-sm text-blue-500 dark:text-blue-400">
                  litonnath442@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center lg:gap-10 md:gap-10 gap-5">
              <span className="inline-block p-4 text-blue-500 rounded-lg shadow-lg bg-gray-800">
                <IoLocationOutline className="text-4xl" />
              </span>
              <div>
                <h2 className="mt-4 text-base font-medium text-white">
                  Location
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Chittagong-4350, Bangladesh
                </p>
              </div>
            </div>
            <div className="flex items-center lg:gap-10 md:gap-10 gap-5">
              <span className="inline-block p-4 text-blue-500 rounded-lg shadow-lg bg-gray-800">
                <LuPhoneCall className="text-4xl" />
              </span>
              <div>
                <h2 className="mt-4 text-base font-medium text-white">
                  Contact
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  +880 1835-480233
                </p>
              </div>
            </div>
            <h2 className="mt-2 text-gray-400 text-4xl font-semibold">
              Social Info
            </h2>
            <div className="flex items-center lg:gap-10 md:gap-10 gap-5">
              <span className="inline-block p-4  rounded-lg shadow-lg bg-gray-800">
                <FaGithub className="text-4xl" />
              </span>
              <span className="inline-block p-4  rounded-lg shadow-lg bg-gray-800">
                <FaFacebook className="text-4xl" />
              </span>
              <span className="inline-block p-4 rounded-lg shadow-lg bg-gray-800">
                <FaLinkedin className="text-4xl" />
              </span>
            </div>
          </div>

          <div className="">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-4 py-6 shadow-lg bg-opacity-75 backdrop-blur-md rounded-lg bg-gray-800 md:p-8"
            >
              <h1 className="text-gray-200 font-bold text-center md:text-3xl text-2xl mb-5">
                Let’s work <span className="text-blue-500">together</span>
              </h1>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John "
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 0 border border-gray-200 rounded-lg placeholder-gray-600 bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="block w-full px-5 py-2.5 mt-2  placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-200">
                  Email address
                </label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="johndoe@example.com"
                  className="block w-full px-5 py-2.5 mt-2 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-200">
                  Message
                </label>
                <textarea
                  name="message"
                  className="block w-full h-32 px-5 py-2.5 mt-2  border  rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
