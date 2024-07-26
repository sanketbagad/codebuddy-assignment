import React from "react";

const Step1 = () => {
  return (
    <>
     <div className="flex text-black">
      <div className="md:col-span-2">
        <label htmlFor="countryCode">Country Code</label>
        <select
          name="countryCode"
          id="countryCode"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
          required
        >
          <option value="">Select Country Code</option>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
      </div>

      <div className="md:col-span-3">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
          placeholder="Enter 10 digit phone number"
        />
      </div>
    </div>
    </>
  );
};

export default Step1;
