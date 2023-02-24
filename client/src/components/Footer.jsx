import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400 flex flex-col items-start">
        © 2023 Phoenix Health Technologies. All Rights Reserved.
        <div className="flex">
          <span>
            Site designed and built in Georgia, USA by{" "}
            <a
              href="https://indigofobes.github.io/indigo-react-portfolio/"
              className="hover:underline"
            >
              Indigo
            </a>
          </span>
        </div>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-600 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
      </ul>
    </footer>
  );
}
