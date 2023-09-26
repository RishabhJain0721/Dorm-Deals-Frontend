import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faPhoneVolume,
  faUser,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { ItemContext } from "../Contexts/ItemContext";

const ItemInfo = () => {
  const { currentItem } = useContext(ItemContext);
  const finalItem = currentItem.item;
  const imageArray = finalItem.images.map((img) => {
    const base64Image = img.buffer;
    const imageType = img.mimetype;
    return `data:${imageType};base64,${base64Image}`;
  });

  return (
    <>
      <Navbar />
      <div className="overflow-hidden flex items-center h-screen justify-center bg-gray-800 ">
        <div className="bg-white shadow-lg rounded-lg flex items-center mx-14 ">
          {/* Image Carousel */}
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={true}
            showThumbs={false}
            className="w-1/4 p-2"
          >
            <div>
              <img src={imageArray[0]} alt="Product" />
            </div>
            <div>
              <img src={imageArray[1]} alt="Product" />
            </div>
            <div>
              <img src={imageArray[2]} alt="Product" />
            </div>
          </Carousel>

          {/* Product Details */}
          <div className="p-4 px-10 w-3/4 ">
            {/* Product Name */}
            <h2 className="text-2xl font-semibold">{finalItem.itemName}</h2>

            {/* Price */}
            <p className="text-red-600 text-md mb-4">
              {" "}
              <FontAwesomeIcon icon={faIndianRupeeSign} /> {finalItem.itemCost}
            </p>
            <hr />

            {/* Description */}
            <p className="text-gray-700 mt-2">{finalItem.itemDescription}</p>

            {/* Provider Details */}
            <div className="mt-4">
              <p className="font-semibold text-xl mb-3">Provider Details</p>
              <p className="py-1 ">
                {" "}
                <FontAwesomeIcon icon={faUser} size="xl" />{" "}
                <span className="mx-2"> {finalItem.userName} </span>
              </p>
              <p className="py-1 ">
                {" "}
                <FontAwesomeIcon icon={faPhoneVolume} fade size="xl" />{" "}
                <span className="mx-2"> {finalItem.contactNumber}</span>
              </p>
              <p className="py-1 ">
                <FontAwesomeIcon icon={faMapPin} flip size="2xl" />{" "}
                <span className="mx-2">{finalItem.pickupLocation}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemInfo;
