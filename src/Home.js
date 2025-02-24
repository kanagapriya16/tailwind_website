import React from "react";
import headerimage from "./images/bestseller_6.png";
import bestsell1 from "./images/bestseller_1.png";
import bestsell2 from "./images/bestseller_2.png";
import bestsell3 from "./images/bestseller_3.png";
import bestsell4 from "./images/bestseller_4.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav className="bg-green-200 p-3 flex items-center justify-between shadow-xl sticky top-0 z-10">
        <h1 className="text-2xl">Greenden</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>

        <ul className="flex gap-5 text-gray-600 hidden md:flex">
          <li>
            <Link
              to="/"
              className="hover:underline cursor-pointer hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="hover:underline cursor-pointer  hover:text-black"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline cursor-pointer  hover:text-black"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-green-100 p-4 md:p-10 flex justify-center">
        <div className="flex-col">
          <p className="mb-4">
            We Offer You A Wide Range of Artificial and Natural Flowers
          </p>
          <h2 className="font-bold text-3xl md:text-5xl mb-5">
            Plants For Your Interior
          </h2>

          <div className="mb-5">
            <button className="bg-black rounded text-white p-2">
              Shop Now
            </button>
            <button className=" border border-black rounded p-2">
              Watch Video
            </button>
          </div>
          <p>160+ Plant Species | 100+ Clients</p>
        </div>
        <div className="hidden md:block ">
          <img className="p-5" src={headerimage} alt="image"></img>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold mt-5">About Us</h1>
        <p>This site for those who admire the beauty and harmony of nature</p>
        <div className=" md:flex">
          <div className="border border-black p-2 m-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>

            <h2 className="text-xl font-medium">Large Assortment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="border border-black p-2 m-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
              />
            </svg>

            <h2 className="text-xl font-medium">Free and Fast Shipping</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="border border-black p-2 m-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <h2 className="text-xl font-medium">24/7 Support</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h1 className=" font-bold mt-5 text-3xl">Best Seller</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5 ">
          <div>
            <img
              className="inline hover:shadow-xl hover:transform hover:-translate-y-2"
              src={bestsell1}
            ></img>
            <h1>Rose Plant</h1>
            <p>$20</p>
          </div>
          <div>
            <img
              className="inline hover:shadow-xl hover:transform hover:-translate-y-2"
              src={bestsell2}
            ></img>
            <h1>Snake Plant</h1>
            <p>$20</p>
          </div>
          <div>
            <img
              className="inline hover:shadow-xl hover:transform hover:-translate-y-2"
              src={bestsell3}
            ></img>
            <h1>Spider Plant</h1>
            <p>$20</p>
          </div>
          <div>
            <img
              className="inline hover:shadow-xl hover:transform hover:-translate-y-2"
              src={bestsell4}
            ></img>
            <h1>Lily Plant</h1>
            <p>$20</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-5 text-center">
          Customer Reviews
        </h1>
        <div className="flex flex-col justify-center text-white m-5">
          <div className="bg-green-900 p-5 container m-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="font-bold text-yellow-300">Kanaga Priya</p>
          </div>
          <div className="bg-green-900 p-5 container m-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="font-bold text-yellow-300">Velladurai</p>
          </div>
          <div className="bg-green-900 p-5 container m-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="font-bold text-yellow-300">Krishna</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-5 text-center">
          Join our News Letter
        </h1>
        <p>
          Signup for our email newspaper to get exclusive discounts,updates and
          more !
        </p>
        <input
          type="text"
          className="border border-black p-2 m-2 container"
        ></input>
        <br />
        <button className="bg-black text-white p-3 m-1 underline ">
          Subscribe
        </button>
      </div>
      <div className="bg-green-100 p-5 text-center flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Greenden</h1>
        <p>
          The standard chucnk of lorem ipsum used since 1500s is reproduced
          below for those interest
        </p>
        <p>@2021 greenday.com</p>
      </div>
    </div>
  );
}

export default Home;
