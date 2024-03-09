import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "react-feather";
import LessonCard from "../../components/LessonCard";
import TestCard from "../../components/TestCard";
import { useAuth } from "../../context/authContext";
import tests from "../../public/tests.json";
import tests2 from "../../public/tests2.json"
import lessons from "../../public/lessons.json";
import Image from "next/image"
import irembo from "../../public/images/irembo.svg";
import { useRouter } from "next/router";
import ChooseSign from "../../components/ChooseSign";



export default function Index() {
  const router = useRouter();
  var hours = new Date().getHours();

  let tStatus = hours < 12 ? "Mwaramutse" : "Mwiriwe";
  const [chooseModal, setChooseModal] = useState<Boolean>(false);
  const isClose = ()=>{
   
    setChooseModal(false)
  }

  const { user }: any = useAuth();

  return (
    <div className="my-2">
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
              href="https://irembo.gov.rw/user/citizen/service/rnp/registration_for_driving_license_test_provisional_paper_based"
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
      <div className="mt-5">

        <div className="mt-3">
          <div className="my-2">
            {tests.length ? (
              <div className="flex items-center justify-between">
                <h4 className="text-base">Amasuzuma akuzwe</h4>
                <Link href={"/learn/tests"}>
                  <a className="text-sm font-bold text-primary flex items-center">
                    <span> Ayandi</span>
                    <ArrowRight className="ml-2" size={15} />
                  </a>
                </Link>
              </div>
            ) : null}

            <div className="mt-5 sm:grid-cols-1 grid grid-cols-3 gap-3">
              {tests2.slice(0, 6).map((e: any, index) => {
                return (
                  <TestCard
                    key={index}
                    item={{
                      id: e.id,
                      name: e.name,
                      questions: e.questions,
                      free: e.free,
                      createdAt: new Date().toLocaleDateString(),
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

      
           {chooseModal && (
          <ChooseSign isClose={isClose}/>

           )}
          <div className="flex md:items-center flex-col gap-2 mt-3 items-start w-full">
          <h4 className="text-base">Amasomo </h4>
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
        </div>
      </div>
    </div>
  );
}
