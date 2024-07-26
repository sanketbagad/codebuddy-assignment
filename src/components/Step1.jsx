import React from "react";
import { useFormContext } from "react-hook-form";

const Step1 = () => {
  const { register, formState: {errors} } = useFormContext();
  return (
    <>
      <div className="md:col-span-5 text-black">
        <label htmlFor="email" className="text-black">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
          placeholder="email@domain.com"
          {...register("email", {
            required: "Email ID is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div className="md:col-span-5">
        <label htmlFor="password" className="text-black">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4 text-black"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
              message:
                "Password must contain at least 2 capital letters, 2 small letters, 2 numbers, and 2 special characters",
            },
          })}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>
    </>
  );
};

export default Step1;
