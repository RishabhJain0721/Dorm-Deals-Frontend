import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import Cooler from '../Images/1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin,faPhoneVolume,faUser,faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';

const ItemInfo = () => {
  return (
  <>
    <Navbar/>
    <div className="overflow-hidden flex items-center h-screen justify-center bg-gray-800 ">
      <div className="bg-white shadow-lg rounded-lg flex items-center mx-14 ">
        {/* Image Carousel */}
        <Carousel infiniteLoop autoPlay showArrows={true} showThumbs={false} className="w-1/4 p-2">
          <div>
            <img src={Cooler} alt="Product" />
          </div>
          <div>
            <img src={Cooler} alt="Product" />
          </div>
          <div>
            <img src={Cooler} alt="Product" />
          </div>
        </Carousel>

        {/* Product Details */}
        <div className="p-4 px-10 w-3/4 ">
          {/* Product Name */}
          <h2 className="text-2xl font-semibold">Cooler</h2>

          {/* Price */}
          <p className="text-red-600 text-md mb-4">  <FontAwesomeIcon icon={faIndianRupeeSign} /> 1000</p>
          <hr />

          {/* Description */}
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, minus accusantium. Iusto rerum consectetur in molestias necessitatibus eius ad dolore accusamus, harum inventore minus officiis quod fugiat corporis deleniti perspiciatis.
          </p>

          {/* Provider Details */}
          <div className="mt-4">
            <p className="font-semibold text-xl mb-3">Provider Details</p>
            <p  className='py-1 '> <FontAwesomeIcon icon={faUser} size="xl" /> <span className='mx-2'> Sakar Kumar </span></p>
            <p className='py-1 '> <FontAwesomeIcon icon={faPhoneVolume} fade  size="xl"/> <span className='mx-2'> 75006369799</span></p>
            <p className='py-1 '><FontAwesomeIcon icon={faMapPin} flip size="2xl"/> <span className='mx-2'>B- Block Room No. - 110</span></p>
          </div>
        </div>
      </div>
    </div>
  </>

  );
};

export default ItemInfo;