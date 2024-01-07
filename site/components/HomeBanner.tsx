import "react-phone-number-input/style.css";
import Button from "./Button";
import { useRouter } from "next/router";

export default function HomeBanner() {
  const router = useRouter();
  return (
    <div className="home-banner md:h-[370px] p h-[700px] relative overflow-hidden sm:rounded-none g-green-200 sm:my-0 md:py-0  py-14 rounded-md my-0 flex flex-col items-start justify-start sm:px-4 px-10">
      <img
        src="images/bg.png"
        className="h-full w-full md:object-right md:opacity-25  object-top- left-0 object-cover absolute z-10 top-0"
        alt=""
      />
      <div className="max-w-5xl md:py-12 w-full py-36 relative z-30  mx-auto">
        <div className="flex max-w-xl relative z-30 flex-col">
          <div className="flex m items-center mb-3 gap-3">
            <span className="text-primary font-medium">Ikaze Kurubuga</span>
            <div className="h-[3px] w-32 mt-1 bg-primary"></div>
          </div>
          <h4 className="text-3xl sm:text-xl leading-[50px] text-[#0C8C7C] mx-auto font-bold capitalize">
            Urubuga rwambere mu rwanda rufasha abantu bose kubona Provisoire
          </h4>
          <p className="sm:line-clamp-2- ml-0 max-w-lg mx-auto my-5 leading-8 text-[16px] font-medium- text-slate-600">
            Infinit Tech Solution ni urubuga rwashyiriweho gufasha abanyarwanda
            Bose kumenya amategeko y&apos;umuhanda mu rwego rwo kwirinda
            impanuka.
          </p>

          <div className="flex">
            <Button
              className="!bg-primary !border-none !text-white"
              onClick={() => {
                router.push("/auth/login");
              }}
            >
              Tangira kwiga Nonaha
            </Button>
            {/* <Button
              className="!bg-white !border-none !text-primary"
              onClick={() => {
                router.push("/auth/login");
              }}
            >
              Tangira kwiga Nonaha
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
