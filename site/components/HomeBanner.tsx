import "react-phone-number-input/style.css";
import Button from "./Button";
import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";

export default function HomeBanner() {
  const router = useRouter();
  const { user } = useAuth();
  return (
    <div className="home-banner md:pt-12 p sm:h-[95vh] h-[650px] relative overflow-hidden sm:rounded-none g-green-200 sm:my-0 md:py-0  py-14 rounded-md my-0 flex flex-col items-start justify-start sm:px-4 px-10">
      <img
        src="/images/bg.png"
        className="h-full w-full sm:hidden block sm:object-right  left-0 object-cover absolute z-10 top-0"
        alt=""
      />
      <img
        src="/images/bg_mobile.png"
        className="h-full w-full hidden sm:block sm:object-center  left-0 object-cover absolute z-10 top-0"
        alt=""
      />
      {/* <div className="w-full hidden md:block absolute h-full bg-[#0C8C7C] backdrop-blur-sm z-40 left-0 opacity-20"></div> */}
      <div className="max-w-5xl md:py-12 w-full py-36 relative z-[45]  mx-auto">
        <div className="flex sm:gap-1 sm:items-center sm:justify-center sm:mx-auto sm:text-center max-w-xl relative z-30 flex-col">
          <div className="flex m items-center sm:mb-2 mb-3 gap-3">
            <span className="text-primary font-medium">Ikaze Kurubuga</span>
            <div className="h-[3px] sm:w-20 w-32 mt-1 bg-primary"></div>
          </div>
          <h4 className="text-3xl sm:text-[18px] md:leading-9 leading-[50px] text-[#0C8C7C] mx-auto font-bold capitalize">
            Ku Isonga mu mategeko y'umuhanda no gutegura Ikizami cya Provisoir.
          </h4>
          <p className="sm:line-clamp-2- sm:px-1 line-clamp-3 font-medium- ml-0 max-w-[450px] mx-auto my-5 sm:mt-1 sm:text-[15px] mt-3 leading-8 text-[16.5px] font-medium- md:text-slate-700- text-slate-500">
            Infinit Tech Drive ni urubuga rwashyiriweho gufasha abanyarwanda
            Bose kumenya amategeko y&apos;umuhanda mu rwego rwo kwirinda
            impanuka.
          </p>

          <div className="flex gap-3">
            <Button
              className="!bg-primary !border-none !text-white"
              onClick={() => {
                router.push(user ? "/learn" : "/auth/login");
              }}
            >
              Tangira kwiga Nonaha
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
