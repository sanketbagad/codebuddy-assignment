import React from 'react';
import { Home, User, MessageCircle } from 'lucide-react';

const Stepper = ({ step, setStep }) => {
    const onClick = (step) => {
        setStep(step);
    };
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 m-5">
        <button
            onClick={() => onClick(1)}
            className={`p-4 rounded  text-indigo-500 shadow-md flex items-center justify-center ${
                step === 1 ? 'bg-indigo-500 text-black' : 'bg-white'
            }`}
        >
          <Home className="h-6 w-6 mr-2" />
          Home
        </button>
        <button onClick={() => onClick(2)} className={`p-4 rounded  text-indigo-500 shadow-md flex items-center justify-center ${step === 2 ? 'bg-indigo-500 text-black' : 'bg-white'}`}>
          <User className="h-6 w-6 mr-2" />
          Profile
        </button>
        <button onClick={() => onClick(3)} className={`p-4 rounded text-indigo-500 shadow-md flex items-center justify-center ${step === 3 ? 'bg-indigo-500 text-black' : ' bg-white'}`}>
          <MessageCircle className="h-6 w-6 mr-2" />
          Messages
        </button>
      </div>
    </div>
  );
};

export default Stepper;
