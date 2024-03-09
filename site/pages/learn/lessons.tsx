import React, { Fragment, useState } from "react";
import LessonCard from "../../components/LessonCard";
import { NextSeo } from "next-seo";
import lessons from "../../public/lessons.json";
import Image from "next/image";
import ChooseSign from "../../components/ChooseSign";
import { useAuth } from "../../context/authContext";
import { useRouter } from "next/router";

export default function Lessons() {
  const router = useRouter();
  const [chooseModal, setChooseModal] = useState<Boolean>(false);
  const isClose = ()=>{
   
    setChooseModal(false)
  }
  const { user }: any = useAuth();
  return (
    <Fragment>
      <NextSeo title="Amasomo" />
      <div className="flex mt-2 items-center justify-between">
        <div>
          <h2 className="mb-1 text-[17px] capitalize sm:mb-0">
            Amasomo yo kwiga
          </h2>
          <p className="text-[15px] leading-7 sm:hidden font-medium text-gray-500">
            Hitamo mumasomo ari aho hasi utangire kwihugura nonaha.
          </p>
        </div>
      </div>
      {chooseModal && (
          <ChooseSign isClose={isClose}/>

           )}
      <div className="flex cursor-pointer items-center flex-row md:flex-col  gap-2">
            <div onClick={()=> setChooseModal(!chooseModal)}  className="flex flex-col bg-white rounded-[12px]">
              <div className=" ">
                <Image
                  src={"/images/bg-part.png"}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover rounded-t-[12px]"
                />
              </div>
              <div className="flex flex-col items-start gap-2 px-2">
                <h1 className="font-[700] ">
                  ibimenyetso ibyo mumuhanda n’ibimurika
                </h1>
                <span className="text-[12px] font-[300] max-w-[300px] text-[#9A9A9A]">
                  abusobanuro bwuzuye n’amafoto y’ibimenyetsobyo mu muhanda
                  n’ibimurika{" "}
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-[12px] font-[300] text-[#B9B9B9]">
                    PUBLISHED
                  </span>
                  <span className="text-[12px] font-[300] text-[#FF9F00]">
                    Nov 30,2023
                  </span>
                </div>
              </div>
            </div>

            <div  onClick={() => {
                  if (user?.subscription === "active" ) {
                    router.push("/learn/lessons/UmkTlqVp5Rv8129TXilv");
                  } else {
                    router.push("/learn/plans");
                  }
                }} className="flex flex-col gap-4">
              <div className="bg-white cursor-pointer rounded-[12px] p-2 gap-2 flex flex-row md:flex-col md:items-center">
                <div className="w-[20vh] md:h-[150px] md:w-[300px]  overflow-hidden   ">
                  <Image
                    src={`/images/bg-part.png`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover md:object-center  rounded-[8px]"
                  />
                </div>
                <div className="flex flex-col md:items-center md:max-w-[300px] items-start px-2 gap-2 ">
                  <h1 className="font-[700] max-w-[250px] ">
                  ibyapa n’ ibinyabiziga
                  </h1>
                  <span className="text-[12px] md:text-center font-[300] text-[#9A9A9A] ">
                  abusobanuro bwuzuye n’amafoto y’ ibyapa nibibyabiziga
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] font-[300] text-[#B9B9B9]">
                      PUBLISHED
                    </span>
                    <span className="text-[12px] font-[300] text-[#FF9F00]">
                      Nov 30,2023
                    </span>
                  </div>
                </div>
              </div>
              <div onClick={() => {
               
                    router.push("/learn/lessons/siluGQfApdQMsmyN2RCv");
             
                }}  className="bg-white rounded-[12px]  gap-2 p-2 flex flex-row md:flex-col md:items-center cursor-pointer ">
                <div className="w-[26vh]  md:h-[150px] md:w-[300px]  overflow-hidden  ">
                  <Image
                    src={`/images/bg-part.png`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover  rounded-[8px]"
                  />
                </div>
                <div className="flex flex-col max-w-[300px] items-start md:items-center px-2 gap-2 ">
                  <h1 className="font-[700]  ">
                    ibibazo n’ibisubizo
                  </h1>
                  <span className="text-[12px]  md:text-center font-[300] text-[#9A9A9A] ">
                    Ibibazo n’ibisubizo 400 bikubiye mwigazeti byagiye bikorwa
                    mugihugu hose{" "}
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] font-[300] text-[#B9B9B9]">
                      PUBLISHED
                    </span>
                    <span className="text-[12px] font-[300] text-[#FF9F00]">
                      Nov 30,2023
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div onClick={() => {
                  if (user?.subscription === "active" ) {
                    router.push("/learn/lessons/282tY16xfYHzZowTyfz8");
                  } else {
                    router.push("/learn/plans");
                  }
                }} className="flex cursor-pointer flex-col bg-white rounded-[12px]">
              <div className=" ">
                <Image
                  src={"/images/bg-part.png"}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover rounded-t-[12px]"
                />
              </div>
              <div className="flex flex-col items-start gap-2 px-2">
                <h1 className="font-[700] ">Igazeti</h1>
                <span className="text-[12px] font-[300] max-w-[300px] text-[#9A9A9A]">
                  Ibibazo n’ibisubizo 400 bikubiye mwigazeti byagiye bikorwa
                  mugihugu hose
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-[12px] font-[300] text-[#B9B9B9]">
                    PUBLISHED
                  </span>
                  <span className="text-[12px] font-[300] text-[#FF9F00]">
                    Nov 30,2023
                  </span>
                </div>
              </div>
            </div>
          </div>
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
