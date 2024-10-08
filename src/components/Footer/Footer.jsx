import React from "react"
import Image from "next/image"

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Movies", href: "/movie" },
  { name: "TV", href: "/tv" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-full xl:col-span-3 relative bg-gradient-to-tr from-black to-slate-200 dark:from-white rounded-2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start"
            ></a>
            <p className="text-center text-gray-200 dark:text-black">
              Trusted in more than 100 countries & 5 million customers. Have any
              query? contact us we are here for you.
            </p>
            <div className="flex space-x-4 sm:justify-center">
              {/* Social Media Icons */}
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-white dark:bg-black flex justify-center items-center hover:shadow-md"
              ></a>
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
            <h4 className="text-lg text-gray-900 dark:text-gray-50 font-bold mb-9">
              Get In Touch
            </h4>
            <ul className="text-gray-900 dark:text-gray-50 transition-all duration-500 grid gap-6">
              <li>support@pagedone.com</li>
              <li>+91 945 658 3256</li>
              <li>61-A, Elm street, Gujarat, India.</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
            <h4 className="text-lg text-gray-900 dark:text-gray-50 font-bold mb-9 text-center xl:text-left">
              Quick Links
            </h4>
            <ul className="text-gray-950 dark:text-gray-50 transition-all duration-500 grid gap-6">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="block xl:py-16 col-span-full md:col-span-4 xl:col-span-3">
            <h4 className="text-lg text-gray-900 dark:text-gray-50 font-bold mb-9 text-center xl:text-left">
              Newsletter
            </h4>
            <div className="grid gap-7">
              <input
                type="text"
                name="email"
                className="py-2 px-4 border border-gray-300 dark:border-gray-50 shadow-sm h-14 text-lg text-gray-800 rounded-full w-full xl:w-64 placeholder:text-gray-400 focus:outline-none"
                placeholder="Enter email.."
              />
              <button
                type="submit"
                className="flex gap-2 justify-center items-center py-3.5 px-7 rounded-full text-white bg-black dark:text-black dark:bg-white shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-indigo-700"
              >
                Subscribe
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 6.88281L14.8333 6.88281M10.6667 11.8828L15.0774 7.47207C15.3552 7.19429 15.4941 7.0554 15.4941 6.88281C15.4941 6.71022 15.3552 6.57133 15.0774 6.29356L10.6667 1.88281"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 bg-indigo-50 dark:bg-gray-800">
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-800 dark:text-white ">
            Copyright@2024 All Right Reserved by{" "}
            <a href="">MO JA AB</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
