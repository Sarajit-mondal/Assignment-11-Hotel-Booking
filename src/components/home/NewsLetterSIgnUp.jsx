import { useState } from "react";

const NewsLetterSIgnUp = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or email service)
    console.log("Submitted:", email);
    // Reset the email input after submission
    setEmail("");
  };

  return (
   <div data-aos="fade-right">
      <h2 className="text-2xl font-bold text-sky-400 mb-10 text-center">
      Subscribe Our NewsLetter
      </h2>
     <div className="flex flex-col md:flex-row  items-center gap-10 justify-center bg-white">
      <div>
        <img src="https://i.postimg.cc/BbqCPvHq/sign.jpg" alt="" className="" />
      </div>
      <div className="max-w-96 space-y-6">
        <p className="text-xl font-bold">
          If you Subscribe Our NewsLetter than you will get updates, deals, and
          exclusive offers.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
         <span className="text-red-500"> Subscribe</span> to Our Newsletter
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full sm:w-auto px-4 py-2 sm:mr-2 mb-2 sm:mb-0 rounded-md border-2 border-skyBlue-400 bg-transparent focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default NewsLetterSIgnUp;