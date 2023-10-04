import React from 'react';
import CEO from '../Images/CEO.JPG';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 px-6">
          <h1 className="text-3xl font-semibold mb-4">About DormDeals</h1>
          <p className="text-gray-600 mb-4">
            Welcome to DormDeals, your trusted online marketplace for all your hostel needs! We understand the challenges of hostel life, and that's why we've created DormDeals – your one-stop destination for buying and selling hostel essentials.
          </p>
          <p className="text-gray-600 mb-4">
            Our platform is designed to make life easier for hostelers like you. Whether you're a student looking to buy affordable and quality items for your dorm room or a seller wanting to connect with potential buyers, DormDeals has got you covered.
          </p>
          <p className="text-gray-600 mb-4">
            At DormDeals, we are committed to providing a safe and convenient environment for all users. You can browse through a wide range of items, from furniture to study materials, and connect with fellow students in your hostel community.
          </p>
          <p className="text-gray-600">
            Thank you for choosing DormDeals as your go-to platform for all your hostel needs. We're here to make your hostel life more comfortable and enjoyable.
          </p>
        </div>
        <div className="w-full lg:w-1/2 px-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={CEO} alt="DormDeals Team" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
