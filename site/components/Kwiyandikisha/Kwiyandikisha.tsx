import React, { useEffect, useRef, useState } from "react";
import Step2 from "./Step2"
import Step1 from "./Step1";
import Step3 from "./Step3";

const Kwiyandikisha
: React.FC<{ isClose: ()=> void }> = ({isClose}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      isClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const [step,setStep] = useState<number>(1)

  return (
    <div className="fixed w-[100%]  bg-black/30 flex items-center justify-center z-40 left-0 h-[100vh] top-0">
      <div ref={modalRef} className="w-[40%] p-[20px] bg-white rounded-[8px] flex flex-col items-start gap-[20px]">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="font-[900]">kwiyandikisha </h1>
          <div className=" cursor-pointer" onClick={isClose}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                fill="#292D32"
              />
              <path
                d="M11.0594 10.0001L13.3594 7.70011C13.6494 7.41011 13.6494 6.93011 13.3594 6.64011C13.0694 6.35011 12.5894 6.35011 12.2994 6.64011L9.9994 8.9401L7.69937 6.64011C7.40936 6.35011 6.92937 6.35011 6.63938 6.64011C6.34938 6.93011 6.34938 7.41011 6.63938 7.70011L8.93939 10.0001L6.63938 12.3001C6.34938 12.5901 6.34938 13.0701 6.63938 13.3601C6.78938 13.5101 6.97936 13.5801 7.16936 13.5801C7.35936 13.5801 7.54937 13.5101 7.69937 13.3601L9.9994 11.0601L12.2994 13.3601C12.4494 13.5101 12.6394 13.5801 12.8294 13.5801C13.0194 13.5801 13.2094 13.5101 13.3594 13.3601C13.6494 13.0701 13.6494 12.5901 13.3594 12.3001L11.0594 10.0001Z"
                fill="#292D32"
              />
            </svg>
          </div>
        </div>
        {step !== 3 && (
        <div className="p-[20px] bg-[#0C8C7C] w-full flex flex-row items-center gap-[20px] rounded-[16px]">
          <div>
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M27.5001 54.5833C42.4577 54.5833 54.5834 42.4576 54.5834 27.5C54.5834 12.5423 42.4577 0.416656 27.5001 0.416656C12.5424 0.416656 0.416748 12.5423 0.416748 27.5C0.416748 42.4576 12.5424 54.5833 27.5001 54.5833Z"
                fill="#20A392"
              />
              <path
                d="M27.5 32.2396C28.6104 32.2396 29.5312 31.3187 29.5312 30.2083V16.6667C29.5312 15.5562 28.6104 14.6354 27.5 14.6354C26.3896 14.6354 25.4688 15.5562 25.4688 16.6667V30.2083C25.4688 31.3187 26.3896 32.2396 27.5 32.2396Z"
                fill="white"
              />
              <path
                d="M29.9917 37.3039C29.8563 36.9789 29.6667 36.681 29.423 36.4102C29.1522 36.1664 28.8542 35.9768 28.5292 35.8414C27.8792 35.5706 27.1209 35.5706 26.4709 35.8414C26.1459 35.9768 25.848 36.1664 25.5772 36.4102C25.3334 36.681 25.1438 36.9789 25.0084 37.3039C24.873 37.6289 24.7917 37.981 24.7917 38.3331C24.7917 38.6852 24.873 39.0372 25.0084 39.3622C25.1438 39.7143 25.3334 39.9852 25.5772 40.256C25.848 40.4997 26.1459 40.6893 26.4709 40.8247C26.7959 40.9602 27.148 41.0414 27.5001 41.0414C27.8522 41.0414 28.2042 40.9602 28.5292 40.8247C28.8542 40.6893 29.1522 40.4997 29.423 40.256C29.6667 39.9852 29.8563 39.7143 29.9917 39.3622C30.1272 39.0372 30.2084 38.6852 30.2084 38.3331C30.2084 37.981 30.1272 37.6289 29.9917 37.3039Z"
                fill="#CCCCCC"
              />
            </svg>
          </div>
         
            
          
          <div className="flex flex-col items-start">
            <h1 className="text-white font-[600] text-[18px]">
              ubufasha bwo kwiyandikisha
            </h1>
            <span className="font-[200] text-[12px] text-[#C2C2C2]">
              hitamo uruhushya uska ko tugufasha kwiyandikisha
            </span>
          </div>
       
        </div>
        )}
        <form action="" className="w-full">
          {step === 1 && (

          <Step1/>
          )}
          {step === 2 && (

          <Step2/>
          )}
          {step === 3 && (

          <Step3/>
          )}

        </form>
      
        <button onClick={()=> setStep(step+1)} className="p-2 bg-[#FF9F00] text-white rounded-[8px] px-[50px] flex ml-auto hover:opacity-85 transition-all">
          komeza
        </button>
      </div>
    </div>
  );
};

export default Kwiyandikisha
;
