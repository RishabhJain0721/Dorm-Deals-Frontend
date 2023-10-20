import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Item Card component
 * @param {Object} props - Props
 * @param {Object} props.rest - Item details
 * @param {string} props.rest._id - Item ID
 * @param {string} props.rest.itemName - Item name
 * @param {string} props.rest.itemCost - Item cost
 * @param {string} props.rest.userName - Item username
 * @param {Object} props.rest.image - Item image object
 * @param {string} props.rest.buffer - Item image buffer
 * @param {string} props.rest.mimetype - Item image mimetype
 * @param {string} props.rest.itemName - Item name
 * @param {string} props.rest.itemCost - Item cost
 * @param {string} props.rest.userName - Item username
 * @returns {JSX.Element}
 * @constructor
 */
const ItemCard = (props) => {
  const navigate = useNavigate();

  const base64Image = props.rest.image.buffer;
  const imageType = props.rest.image.mimetype;
  const src = `data:${imageType};base64,${base64Image}`;

  const moreInfo = async () => {
    navigate(`/dashboard/item/${props.rest._id}`);
  };

  return (
    <div
      onClick={moreInfo}
      className="bg-gray-100 hover:cursor-pointer shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center hover:translate-y-[-5px] transition duration-300 ease-in-out w-50 p-2 m-5 mx-10"
    >
      {/* Product Image(First image from the three uploaded ones) */}
      <img
        src={src}
        alt={props.rest.itemName}
        className="w-full h-32 object-cover"
      />

      {/* Product Details */}
      <div className="p-4 text-center">
        {/* Product Name */}
        <h2 className="text-gray-800 text-xl font-semibold">
          {props.rest.itemName}
        </h2>
        <hr />

        {/* Product Price */}
        <p className="mt-2 text-red-500">Rs. {props.rest.itemCost}</p>
        <p>Provider : {props.rest.userName} </p>
      </div>
    </div>
  );
};

export default ItemCard;
