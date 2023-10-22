import React from "react";
import { useNavigate } from "react-router-dom";

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
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
    >
      <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl h-full">
        <div className="prod-img">
          <img
            src={src}
            alt={props.rest.itemName}
            className="w-full h-40 sm:h-48 md:h-56 object-cover object-center"
          />
        </div>
        <div className="prod-title">
          <p className="text-xl sm:text-3xl uppercase text-gray-900 font-bold">
            {props.rest.itemName}
          </p>
          <p className="uppercase text-sm sm:text-base text-gray-400">
            The best {props.rest.itemName.toLowerCase()} in the marketplace
          </p>
        </div>
        <div className="prod-info grid gap-6">
          <p className="font-bold text-xl sm:text-2xl">Rs. {props.rest.itemCost}</p>
          <div className="flex justify-center items-center">
            <button
              className="px-6 py-2 bg-gray-900 text-white transition ease-in duration-200 uppercase rounded-full hover:bg-red-500 hover:text-white border-2 focus:outline-none"
              onClick={() => alert("Add to cart clicked")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
