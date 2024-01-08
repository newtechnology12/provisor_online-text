import "react-phone-number-input/style.css";
import Button from "./Button";
import { useRouter } from "next/router";

export default function HomeBanner() {
  const router = useRouter();
  return (
    <div className="home-banner md:pt-12 md:h-fit p h-[650px] relative overflow-hidden sm:rounded-none g-green-200 sm:my-0 md:py-0  py-14 rounded-md my-0 flex flex-col items-start justify-start sm:px-4 px-10">
      <img
        src="images/bg.png"
        className="h-full w-full md:object-right md:opacity-15  object-top- left-0 object-cover absolute z-10 top-0"
        alt=""
      />
      <div className="w-full hidden md:block absolute h-full bg-[#0C8C7C] backdrop-blur-sm z-40 left-0 opacity-20"></div>
      <div className="max-w-5xl md:py-12 w-full py-36 relative z-[45]  mx-auto">
        <div className="flex max-w-xl relative z-30 flex-col">
          <div className="flex m items-center mb-3 gap-3">
            <span className="text-primary font-medium">Ikaze Kurubuga</span>
            <div className="h-[3px] w-32 mt-1 bg-primary"></div>
          </div>
          <h4 className="text-3xl sm:text-xl leading-[50px] text-[#0C8C7C] mx-auto font-bold capitalize">
            Urubuga rwambere mu rwanda rufasha abantu bose kubona Provisoire
          </h4>
          <p className="sm:line-clamp-2- font-medium ml-0 max-w-[450px] mx-auto my-5 mt-3 leading-8 text-[16.5px] font-medium- md:text-slate-700 text-slate-500">
            Infinit Tech Drive ni urubuga rwashyiriweho gufasha abanyarwanda
            Bose kumenya amategeko y&apos;umuhanda mu rwego rwo kwirinda
            impanuka.
          </p>

          <div className="flex gap-3">
            <Button
              className="!bg-primary !border-none !text-white"
              onClick={() => {
                router.push("/auth/login");
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
