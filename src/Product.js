import React from 'react'
import bestsell1 from "./images/bestseller_1.png"
import bestsell2 from "./images/bestseller_2.png"
import bestsell3 from "./images/bestseller_3.png"
import bestsell4 from "./images/bestseller_4.png"
import { Link } from 'react-router-dom'

function Product() {
  return (
    <>
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
            <Link to="/"
              className="hover:underline cursor-pointer hover:text-black"
              
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:underline cursor-pointer  hover:text-black" >
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline cursor-pointer  hover:text-black">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className='text-center'>
<h1 className='text-3xl font-bold text-center m-2'>Our Products</h1>
<input type='text' placeholder='Search For A Product' className='p-2 border border-black m-5 w-96'></input>

     
      <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5 ">
        <div >
          <img className="inline hover:shadow-xl hover:transform hover:-translate-y-2" src={bestsell1}></img>
          <h1>Rose Plant</h1>
          <p>$20</p>
        </div>
        <div>
          <img className="inline hover:shadow-xl hover:transform hover:-translate-y-2"  src={bestsell2}></img>
          <h1>Snake Plant</h1>
          <p>$20</p>
        </div>
        <div>
          <img  className="inline hover:shadow-xl hover:transform hover:-translate-y-2" src={bestsell3}></img>
          <h1>Spider Plant</h1>
          <p>$20</p>
        </div>
        <div>
          <img className="inline hover:shadow-xl hover:transform hover:-translate-y-2" src={bestsell4}></img>
          <h1>Lily Plant</h1>
          <p>$20</p>
        </div>
        <div >
          <img className="inline hover:shadow-xl hover:transform hover:-translate-y-2" src={bestsell1}></img>
          <h1>Rose Plant</h1>
          <p>$20</p>
        </div>
        <div>
          <img className="inline hover:shadow-xl hover:transform hover:-translate-y-2"  src={bestsell2}></img>
          <h1>Snake Plant</h1>
          <p>$20</p>
        </div>
        <div>
          <img  className="inline hover:shadow-xl hover:transform hover:-translate-y-2" src={bestsell3}></img>
          <h1>Spider Plant</h1>
          <p>$20</p>
        </div>
        <div>
          <img className="inline hover:shadow-xl hover:transform hover:-translate-y-2" src={bestsell4}></img>
          <h1>Lily Plant</h1>
          <p>$20</p>
        </div>
        </div>
        </div>
        
      <div className="bg-green-100 p-5 text-center flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Greenden</h1>
<p>The standard chucnk of lorem ipsum used since 1500s is reproduced below for those interest</p>
<p>@2021 greenday.com</p>
      </div>
      </>
  
  )
}

export default Product;
