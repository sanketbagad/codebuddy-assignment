import React from "react";

const Step1 = () => {
  return (
    <>
      <div className="md:col-span-5">
        <label htmlFor="firstName" className="text-black">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
          placeholder="Sanket"
        />
      </div>
      <div className="md:col-span-5">
        <label htmlFor="lastName" className="text-black">
            Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
          placeholder="Bagad"
        />
      </div>
      <div className="md:col-span-5">
        <label htmlFor="address" className="text-black">
            Address
        </label>
        <input
          type="text"
          id="address"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
          placeholder="Pune, Maharashtra"
        />
      </div>
    </>
  );
};

export default Step1;
