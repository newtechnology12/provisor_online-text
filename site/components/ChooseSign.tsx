import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
const ChooseSign
: React.FC<{ isClose: ()=> void }> = ({isClose}) => {
   
  const modalRef = useRef<HTMLDivElement>(null);
  const { user }: any = useAuth();
  const router = useRouter();

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
      <div ref={modalRef} className="w-[40%] lg:w-[60%] md:w-[90%] p-[20px] bg-white rounded-[8px] flex flex-col items-center gap-[20px]">
        <h1 className="text-[18px] font-[600]">Hitamo Kimwe</h1>
        <div onClick={() => {
                  if (user?.subscription === "active" ) {
                    router.push("/learn/lessons/XcKDXQUBvAkIIAPkfw5p");
                  } else {
                    router.push("/learn/plans");
                  }
                }} className="p-4 w-[250px] text-[14px]  flex items-center justify-center  bg-orange-400 rounded-[8px] text-white cursor-pointer">
            <h1>Ibimenyetso Byo Mu muhanda</h1>
        </div>
        <div onClick={() => {
                  if (user?.subscription === "active" ) {
                    router.push("/learn/lessons/KhkpaYYzI7a3QGCjHGcE");
                  } else {
                    router.push("/learn/plans");
                  }
                }} className="p-4 w-[250px] flex items-center justify-center border-[1px] border-orange-400 rounded-[8px] text-orange-400 cursor-pointer">
            <h1>Ibimenyetso Bimurika</h1>
        </div>

      </div>
    </div>
  );
};

export default ChooseSign
;
