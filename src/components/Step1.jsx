import React from "react";

const Step1 = () => {
  return (
    <>
      <div className="md:col-span-5">
        <label htmlFor="email" className="text-black">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
          placeholder="email@domain.com"
        />
      </div>
      <div className="md:col-span-5">
        <label htmlFor="password" className="text-black">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
          placeholder="Enter your password"
        />
      </div>

      
    </>
  );
};

export default Step1;
