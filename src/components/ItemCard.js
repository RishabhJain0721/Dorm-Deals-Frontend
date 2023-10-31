import React from "react";
import { useNavigate } from "react-router-dom";

const ItemCard = (props) => {
  const navigate = useNavigate();

  const base64Image = props.rest.image ? props.rest.image.buffer : null;
  const imageType = props.rest.image ? props.rest.image.mimetype : null;
  const placeholderImageURL =
    "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image-768x518.jpg";

  const src = props.rest.image
    ? `data:${imageType};base64,${base64Image}`
    : placeholderImageURL;

  const moreInfo = async () => {
    navigate(`/dashboard/item/${props.rest._id}`);
  };

  return (
    <div
      onClick={moreInfo}
      className={`bg-white p-4 ${
        props.width === "full"
          ? "w-full"
          : `sm:w-1/2 md:w-1/4 lg:w-${props.width} xl:w-${props.width}`
      } cursor-pointer`}
    >
      <div className="card flex flex-col rounded-lg shadow-md hover:shadow-lg">
        <div className="prod-img">
          <img
            src={src}
            alt={props.rest.itemName}
            className="w-full h-48 sm:h-64 object-cover object-center"
          />
        </div>
        <div className="prod-title p-4">
          <p className="text-lg sm:text-xl text-gray-900 font-bold">
            {props.rest.itemName}
          </p>
          <p className="text-gray-700">Provider: {props.rest.userName}</p>
        </div>
        <div className="prod-info grid grid-cols-2 gap-4 p-4">
          <p className="text-lg sm:text-xl font-bold text-gray-900">
            Rs. {props.rest.itemCost}
          </p>
          <button className="bg-gray-900 hover:bg-red-500 text-white py-2 px-4 rounded-full focus:outline-none">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
