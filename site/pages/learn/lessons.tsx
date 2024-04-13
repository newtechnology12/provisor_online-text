import React, { Fragment } from "react";
import LessonCard from "../../components/LessonCard";
import { NextSeo } from "next-seo";
import lessons from "../../public/lessons.json";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import tests from "../../public/tests.json";
import TestCard from "../../components/TestCard";
import Image from "next/image"
import irembo from "../../public/images/irembo.svg";
import { useAuth } from "../../context/authContext";


export default function Lessons() {
  
  var hours = new Date().getHours();

  let tStatus = hours < 12 ? "Mwaramutse" : "Mwiriwe";

  const { user }: any = useAuth();
  return (
    <Fragment>
      <NextSeo title="Amasomo" />
      <div className="flex flex-row md:flex-col items-center justify-between">
        <div>
          {user && (
            <h2 className="mb-2 text-lg capitalize sm:mb-0">
              <span>👋</span> {tStatus}, {user.username.split(" ")[0]}
            </h2>
          )}
          <p className="text-[15px] leading-7 sm:hidden font-medium text-gray-500">
            hitamo isomo cyangwa isuzuma utangire kwiga.
          </p>
        </div>
        <div className="flex flex-row sm:flex-col items-center p-4 gap-4 bg-[#0C8C7C] rounded-[12px]">
          <div className="flex flex-col gap-1 items-start sm:items-center  ">
            <div className="w-[80px] h-[20px]">
              <Image
                src={irembo}
                alt=""
                width={0}
                height={0}
                className="w-full h-full object-fill"
              />
            </div>
            <p className="text-[14px] text-[#fff] max-w-[256px] leading-4 font-light sm:text-center">
              tugufashe kw’iyandikishe gukorera provisoire uciye hano
            </p>
          </div>
          <div className="">
            <a
              href="https://irembo.gov.rw/home/citizen/all_services"
              target="_blank"
            >
              <button className="p-2 rounded-[8px] bg-white flex flex-row items-center gap-2">
                <span className="text-[#F49621] text-[14px]">Kanda Hano</span>
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8077 16.0669C10.7496 16.0088 10.7035 15.9399 10.672 15.864C10.6406 15.7881 10.6244 15.7068 10.6244 15.6247C10.6244 15.5425 10.6406 15.4612 10.672 15.3853C10.7035 15.3095 10.7496 15.2405 10.8077 15.1825L15.3663 10.6247H3.12488C2.95912 10.6247 2.80014 10.5588 2.68293 10.4416C2.56572 10.3244 2.49988 10.1654 2.49988 9.99968C2.49988 9.83392 2.56572 9.67494 2.68293 9.55773C2.80014 9.44052 2.95912 9.37468 3.12488 9.37468H15.3663L10.8077 4.81686C10.6904 4.69959 10.6245 4.54053 10.6245 4.37468C10.6245 4.20882 10.6904 4.04976 10.8077 3.93249C10.925 3.81521 11.084 3.74933 11.2499 3.74933C11.4157 3.74933 11.5748 3.81521 11.6921 3.93249L17.3171 9.55749C17.3752 9.61553 17.4213 9.68446 17.4527 9.76034C17.4842 9.83621 17.5004 9.91754 17.5004 9.99968C17.5004 10.0818 17.4842 10.1631 17.4527 10.239C17.4213 10.3149 17.3752 10.3838 17.3171 10.4419L11.6921 16.0669C11.634 16.125 11.5651 16.1711 11.4892 16.2025C11.4133 16.234 11.332 16.2502 11.2499 16.2502C11.1677 16.2502 11.0864 16.234 11.0105 16.2025C10.9347 16.1711 10.8657 16.125 10.8077 16.0669Z"
                      fill="#FF9F00"
                    />
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
  
      
      <All />
    </Fragment>
  );
}

function All({}) {
  return (
    // <div className="bg-white mt-3 border border-slate-200">
    <div className="mt-5 grid sm:grid-cols-1 grid-cols-2 gap-3">
      {lessons.map((e: any, index) => {
        return (
          <LessonCard
            key={index}
            item={{
              id: e.id,
              name: e.name,
              lesson: "police",
              desc: e.desc,
              free: e.free,
            }}
          />
        );
      })}
    </div>
    // </div>
  );
}
