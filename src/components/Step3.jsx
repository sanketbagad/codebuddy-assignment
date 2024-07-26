import React from "react";

const Step3 = () => {
  return (
    <div className="flex  items-center justify-center p-6">
      <div className="container mx-auto max-w-screen-lg">
        <div>
          <h2 className="text-xl font-semibold text-gray-200">One Last Step</h2>
          <p className="mb-6 text-gray-500">And Get Started With Us</p>

          <div className="mb-6 rounded bg-white p-4 px-4 shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="text-lg font-medium">Login Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 text-black">
                    <div className="md:col-span-2">
                      <label htmlFor="countryCode">Country Code</label>
                      <select
                        name="countryCode"
                        id="countryCode"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option value="">Select Country Code</option>
                        <option value="+91">India (+91)</option>
                        <option value="+1">America (+1)</option>
                      </select>
                    </div>

                    <div className="md:col-span-3 text-black">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter 10 digit phone number"
                      />
                    </div>
                  <div className="text-right md:col-span-5">
                    <div className="inline-flex items-end">
                      <button className="rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        Save & Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
