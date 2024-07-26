import React from "react";
import { useFormContext } from "react-hook-form";

const Step3 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
        <div className="md:col-span-2 text-black">
          <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">Country Code</label>
          <select
            name="countryCode"
            id="countryCode"
            className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
            {...register("countryCode", { required: 'Country code is required' })}
          >
            <option value="">Select Country Code</option>
            <option value="+91">India (+91)</option>
            <option value="+1">America (+1)</option>
          </select>
          {errors.countryCode && <p className="text-red-500 text-sm mt-1">{errors.countryCode.message}</p>}
        </div>

        <div className="mt-4 md:mt-0 md:col-span-3">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber", { required: 'Phone number is required', pattern: { value: /^\d{10}$/, message: 'Phone number must be 10 digits' } })}
            className="mt-1 h-10 w-full rounded border bg-gray-50 px-4 text-black"
            placeholder="Enter 10 digit phone number"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
        </div>
      </>
  );
};

export default Step3;
