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
    <div className="h-screen flex items-center mt-40">
      <container className="bg-gradient-to-br from-sky-600  to-sky-300 grid grid-cols-5 mx-auto max-w-screen-lg p-4 rounded-md mb-40">
        {/* Left side: "Contact us" with Social media icons and such */}
        <div className="col-start-1 col-end-3 pl-5 pr-20">
          <h1 className="text-3xl font-bold dm-sans-bold text-white mt-3 mb-5">
            Contact us
          </h1>
          <p className="dm-sans text-xl text-white mb-9">
            Send us a message, and we will be sure to get back to you as soon as
            possible.
          </p>
          <div className="flex flex-row gap-2">
            <FontAwesomeIcon
              className="text-white mt-1.5"
              icon={icon({
                name: "phone",
                style: "solid",
              })}
            />
            <p className="text-xl dm-sans text-white mb-3">777-777-7777</p>
          </div>
          <div className="flex flex-row gap-2">
            <FontAwesomeIcon
              className="text-white mt-1.5"
              icon={icon({
                name: "envelope",
                style: "solid",
              })}
            />
            <p className="text-xl dm-sans text-white mb-3">
              will@phoenixhealthtech.com
            </p>
          </div>
          {/* TODO: social media icons: NOT working yet}
          {/* <div>
            <FontAwesomeIcon className="mt-1.5" icon={brands("twitter")} />
          </div> */}
        </div>
        {/* input form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white col-start-3 col-end-6 rounded-r-md p-8 grid grid-rows-2"
        >
          <div className="grid grid-cols-2 gap-3">
            {/* first name */}
            <div>
              <div className="mb-2 block">
                <label className="mb-3" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="rounded-md border-sky-400 border-2 shadow-sm focus:border-amber-400 focus:ring-0 block text-gray-900"
                  id="firstName"
                  type="text"
                  sizing="sm"
                  required
                />
              </div>
            </div>
            {/* last name */}
            <div className="ml-5">
              <div className="mb-2 block">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="rounded-md border-sky-400 border-2 shadow-sm focus:border-amber-400 focus:ring-0 block text-gray-900"
                  id="lastName"
                  type="text"
                  sizing="sm"
                />
              </div>
            </div>
            {/* phone TODO: react-phone-input-2 via npm*/}
            <div>
              <div className="mb-2 block">
                <label htmlFor="phone">Phone number</label>
                <input
                  className="rounded-md border-sky-400 border-2 shadow-sm focus:border-amber-400 focus:ring-0 block text-gray-900"
                  id="phone"
                  type="text"
                  sizing="sm"
                  required
                />
              </div>
            </div>
            {/* email */}
            <div className="ml-5">
              <div className="mb-2 block">
                <label htmlFor="email">Email</label>
                <input
                  className="rounded-md border-sky-400 border-2 shadow-sm focus:border-amber-400 focus:ring-0 block text-gray-900"
                  id="email"
                  type="email"
                  sizing="sm"
                  required
                />
              </div>
            </div>
          </div>
          {/* Message and submit section */}
          <div className="text-center mt-3">
            <div class="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md shadow-sm border-2 border-sky-400 focus:ring-0 focus:border-amber-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="What can we do for you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-3 dm-sans-med text-white text-lg bg-sky-400 px-6 py-1 rounded-sm hover:bg-sky-300 "
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
