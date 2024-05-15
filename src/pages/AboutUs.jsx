import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-2xl p-8">
       <Helmet>
    <title>About Us</title>
   </Helmet>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">Welcome to Preaceful Hotel! We're dedicated to providing you with the best hotel booking experience possible.</p>
      
      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p className="mb-4">Our mission is to make hotel booking easy, convenient, and affordable for everyone. We strive to offer a wide range of accommodations, from budget-friendly options to luxurious stays, ensuring that there's something for every traveler.</p>
      
      <h2 className="text-2xl font-bold mb-2">What Sets Us Apart</h2>
      <p className="mb-4">At Preaceful Hotel, we understand that planning a trip can be stressful. That's why we've designed our platform to be user-friendly, intuitive, and reliable. With a seamless booking process and access to thousands of hotels worldwide, we're here to simplify your travel experience.</p>
      
      <h2 className="text-2xl font-bold mb-2">Our Team</h2>
      <p className="mb-4">Behind Preaceful Hotel is a dedicated team of travel enthusiasts, developers, and customer support specialists. We're passionate about travel and are committed to helping you find the perfect accommodations for your next adventure. Meet our team:</p>
      
      <ul className="list-disc pl-6 mb-4">
        <li>John Doe - CEO</li>
        <li>Jane Smith - Head of Customer Support</li>
        <li>Michael Johnson - Lead Developer</li>
        <li>Sarah Lee - Marketing Manager</li>
      </ul>
      
      <h2 className="text-2xl font-bold mb-2">Our Partners</h2>
      <p className="mb-4">We collaborate with a wide range of hotel partners to bring you the best deals and options for your travels. Our partners include renowned hotel chains, boutique hotels, and local accommodations, ensuring that you have plenty of choices no matter where you're headed.</p>
      
      <h2 className="text-2xl font-bold mb-2">Customer Satisfaction</h2>
      <p className="mb-4">Your satisfaction is our top priority. We're committed to providing excellent customer service and support throughout your booking journey. Whether you have questions about a reservation or need assistance with your account, our team is here to help.</p>
      
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="mb-4">Have a question or need assistance? We're here to help! Feel free to reach out to our customer support team at [contact@email.com] or give us a call at [phone number]. We're available 24/7 to ensure that your booking experience is seamless from start to finish.</p>
    </div>
  );

}

export default AboutUs
