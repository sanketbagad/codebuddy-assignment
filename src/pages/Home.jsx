import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Stepper from "../components/Stepper";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

const App = () => {
  const [step, setStep] = useState(1);
  const methods = useForm();

  const onSubmit = async (data) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      try {
        const response = await axios.post("https://codebuddy.review/submit", data);
        alert("Data submitted successfully");
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <Stepper step={step} setStep={setStep} />
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
                    {step === 1 && <Step1 onSubmit={onSubmit} />}
                    {step === 2 && <Step2 onSubmit={onSubmit} />}
                    {step === 3 && <Step3 onSubmit={onSubmit} />}
                    <div className="text-right md:col-span-5">
                      <div className="inline-flex items-end">
                        {/* back button */}
                        <button
                          className="rounded bg-white px-4 py-2 font-bold text-black ml-2"
                          onClick={() => setStep(step - 1)}
                          disabled={step === 1}
                        >
                          Back
                        </button>
                        <button
                          className="rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                          disabled={step === 3}
                          onClick={methods.handleSubmit(onSubmit)}
                        >
                          Save & Next
                        </button>
                        {/* submit button */}
                        <button
                          type="submit"
                          className="ml-2 rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                          disabled={step}
                        >
                          Submit
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
    </FormProvider>
  );
};

export default App;
