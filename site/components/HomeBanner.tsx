import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronRight } from "react-feather";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useToast } from "../context/toastContext";
import { AuthServices } from "../services/auth.service";
import Button from "./Button";
import SocialIcon from "./SocialIcon";

export default function HomeBanner() {
  return (
    <div className="px-3 sm:px-0 max-w-5xl mx-auto ">
      <div className="home-banner relative overflow-hidden sm:rounded-none g-green-200 sm:my-0 py-14 rounded-md my-4 flex flex-col items-start justify-start sm:px-3 px-10">
        <img
          src="images/bg.png"
          className="h-full w-full left-0  object-cover absolute z-10 top-0"
          alt=""
        />
        <div className="flex relative z-30 max-w-2xl flex-col">
          <h4 className="text-3xl sm:text-xl leading-[50px] text-gray-100 mx-auto font-bold capitalize">
            Urubuga rwambere mu rwanda rufasha abantu bose kubona Provisoire
          </h4>
          <p className=" sm:line-clamp-2 mx-auto my-5 leading-7 text-[16px] font-medium text-gray-100">
            Infinit Tech Solution ni urubuga rwashyiriweho gufasha abanyarwanda
            Bose kumenya amategeko y&apos;umuhanda mu rwego rwo kwirinda
            impanuka.
          </p>

          <div className="flex">
            <Button
              className="!bg-white !border-none !text-primary"
              onClick={() => {}}
            >
              Tangira kwiga Nonaha
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
