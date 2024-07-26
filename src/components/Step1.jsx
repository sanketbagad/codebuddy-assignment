import React from "react";

const Step1 = () => {
  return (
    <div className="flex  items-center justify-center p-6">
      <div className="container mx-auto max-w-screen-lg">
        <div>
          <h2 className="text-xl font-semibold text-gray-200">Login to Codebuddy</h2>
          <p className="mb-6 text-gray-500">And Get Access to Exclusive Posts</p>

          <div className="mb-6 rounded bg-white p-4 px-4 shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="text-lg font-medium">Login Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="email" className="text-black">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="password" className="text-black">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                      placeholder="Enter your password"
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

export default Step1;
