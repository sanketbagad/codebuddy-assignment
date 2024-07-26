import React from "react";
import { useFormContext } from "react-hook-form";

const Step2 = () => {
    const { register, formState: {errors} } = useFormContext();
  return (
    <>
      <div className="md:col-span-5 text-black">
        <label htmlFor="firstName" className="text-black">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4 text-black"
          placeholder="Sanket"
          {...register("firstName",{ pattern: { value: /^[A-Za-z]*$/, message: 'Only alphabets are allowed' } })}
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
      </div>
      <div className="md:col-span-5">
        <label htmlFor="lastName" className="text-black">
            Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4 text-black"
          placeholder="Bagad"
          {...register("lastName",{ pattern: { value: /^[A-Za-z]*$/, message: 'Only alphabets are allowed' } })}
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
      </div>
      <div className="md:col-span-5">
        <label htmlFor="address" className="text-black">
            Address
        </label>
        <input
          type="text"
          id="address"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4 text-black"
          placeholder="Pune, Maharashtra"
          {...register("address",{ required: 'Address is required', minLength: { value: 10, message: 'Minimum length is 10' } })}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
      </div>
    </>
  );
};

export default Step2;
