import React from 'react';
import Cooler from '../Images/1.jpg'
const ItemCard = ({ imageSrc, name, price }) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center hover:translate-y-[-5px] transition duration-300 ease-in-out w-50 p-2 m-5 mx-10">
      {/* Product Image */}
      <img src={Cooler} alt={name} className="w-full h-32 object-cover" />

      {/* Product Details */}
      <div className="p-4 text-center">
        {/* Product Name */}
        <h2 className="text-gray-800 text-xl font-semibold">Cooler</h2>
        <hr />

        {/* Product Price */}
        <p className="mt-2 text-red-500">Rs.500 <span className='line-through text-gray-500 text-xs '>800</span></p>
        <p>Provider : Sakar Kumar</p>
      </div>
    </div>
  );
};

export default ItemCard;