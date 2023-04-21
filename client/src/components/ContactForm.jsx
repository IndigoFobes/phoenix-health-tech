import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName, lastName, phone, email, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="bg-fixed contact-photo flex flex-col">
      <div className="bg-gray-200/80 py-10">
        <div className="grid grid-cols-6">
          <container className="col-start-1 col-end-7 lg:col-end-5 mb-5 mx-10">
            <h1 className="text-center lg:text-left our-mission title-text">
              Interested in Purchasing a Unit?
              {/* Or asking questions? */}
            </h1>
          </container>
        </div>
        <div className="grid grid-cols-6">
          <container className="col-start-1 col-end-7 lg:col-end-5 xl:col-end-4 mb-5 mx-10 text-center dm-sans-med lg:text-left sm:text-lg md:text-xl">
            <p>
              Send us a message, and we will be sure to get back to you as soon
              as possible.
            </p>
          </container>
        </div>
      </div>

      <container className="grid grid-cols-7 p-8 xl:mt-40 mb-20">
        <div className="flex flex-col gap-6 col-start-2 col-end-7 xl:col-start-1 xl:col-end-4 xl:mr-10 mt-20 xl:mt-10 mb-20 xl:mb-0">
          <div className="flex flex-row gap-2 justify-center xl:justify-end contact-icons dm-sans-bold">
            <FontAwesomeIcon
              className="text-white mt-1.5"
              icon={icon({
                name: "phone",
                style: "solid",
              })}
            />
            <p className=" text-white mb-3">{`(678) 886-3901`}</p>
          </div>
          <div className="flex flex-row gap-2 justify-center xl:justify-end contact-icons dm-sans-bold">
            <FontAwesomeIcon
              className="text-white mt-1.5"
              icon={icon({
                name: "envelope",
                style: "solid",
              })}
            />
            <p className="text-white mb-3">will@phoenixhealthtech.com</p>
          </div>
          {/* TODO: social media icons: NOT working yet}
          {/* <div>
            <FontAwesomeIcon className="mt-1.5" icon={brands("twitter")} />
          </div> */}
        </div>
        {/* Left side: "Contact us" with Social media icons and such */}

        {/* input form */}
        <form
          onSubmit={handleSubmit}
          className="col-start-1 col-end-8 xl:col-start-4 xl:col-end-8 2xl:col-end-7 xl:mr-10 2xl:mr-20 bg-white rounded-sm md:p-10 pt-4 mx-4 sm:mx-20 lg:mx-40 xl:mx-0 grid md:grid-rows-2"
        >
          <div className="grid md:grid-cols-2 gap-3">
            {/* first name */}
            <div className="flex flex-col justify-self-center w-full md:w-auto">
              <div className="mb-2 block mx-4 md:mx-0">
                <label className="mb-3" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="w-full md:w-auto rounded-md border-gray-600 border-2 shadow-sm focus:border-amber-400 focus:ring-0 block text-gray-900"
                  id="firstName"
                  type="text"
                  sizing="sm"
                  required
                />
              </div>
            </div>
            {/* last name */}
            <div className="flex flex-col justify-self-center w-full md:w-auto">
              <div className="mb-2 block mx-4 md:mx-0">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="w-full md:w-auto rounded-md border-gray-600 border-2 shadow-sm focus:border-amber-400 focus:ring-0 block text-gray-900"
                  id="lastName"
                  type="text"
                  sizing="sm"
                />
              </div>
            </div>
            {/* phone TODO: react-phone-input-2 via npm*/}
            <div className="flex flex-col justify-self-center w-full md:w-auto">
              <div className="mb-2 block mx-4 md:mx-0">
                <label htmlFor="phone">Phone number</label>
                <input
                  className="w-full md:w-auto rounded-md border-gray-600 border-2 shadow-sm focus:border-amber-400 focus:ring-0 block text-gray-900"
                  id="phone"
                  type="text"
                  sizing="sm"
                  required
                />
              </div>
            </div>
            {/* email */}
            <div className="flex flex-col justify-self-center w-full md:w-auto">
              <div className="mb-2 block mx-4 md:mx-0">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full md:w-auto rounded-md border-gray-600 border-2 shadow-sm focus:border-amber-400 focus:ring-0 block text-gray-900"
                  id="email"
                  type="email"
                  sizing="sm"
                  required
                />
              </div>
            </div>
          </div>
          {/* Message and submit section */}
          <div className="text-center mt-3 md:grid md:grid-cols-9 flex flex-col mx-4 md:mx-0 mb-4">
            <div class="md:col-start-2 md:col-end-9">
              <label
                for="message"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md shadow-sm border-2 border-gray-600 focus:ring-0 focus:border-amber-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="What can we do for you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 dm-sans-med text-white text-lg bg-sky-400 px-6 py-1 rounded-sm hover:bg-sky-300 col-start-4 col-end-7 lg:mx-4"
            >
              {status}
            </button>
          </div>
        </form>
      </container>
    </div>
  );
};

export default ContactForm;
