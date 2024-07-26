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
      {step === 1 && <Step1 onSubmit={onSubmit} />}
      {step === 2 && <Step2 onSubmit={onSubmit} />}
      {step === 3 && <Step3 onSubmit={onSubmit} />}
    </FormProvider>
  );
};

export default App;
