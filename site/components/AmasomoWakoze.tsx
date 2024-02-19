import React, { useState } from "react";
import workedLesson from "../public/workedLesson.json";

const AmasomoWakoze = () => {
  const itemsPerPage: number = 3;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentData: any = workedLesson.slice(startIndex, endIndex);

  const totalPages: number = Math.ceil(workedLesson.length / itemsPerPage);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col w-full gap-[20px] py-6">
      {currentData.length && (
        <>
          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-[16px] font-[600] text-black">
              Amasuzuma wakoze
            </h1>
            <div className="flex flex-row items-center gap-4 justify-end p-2 rounded-[4px]  ml-auto">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className={`mx-1 px-2 py-1 flex flex-row items-center gap-2 rounded cursor-pointer ${
                  currentPage === 1 && "hidden"
                }`}
              >
                <svg
                  className=" rotate-180"
                  width="14"
                  height="12"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.96921 15.0302C9.89948 14.9606 9.84416 14.8778 9.80642 14.7868C9.76867 14.6957 9.74925 14.5982 9.74925 14.4996C9.74925 14.401 9.76867 14.3034 9.80642 14.2124C9.84416 14.1213 9.89948 14.0386 9.96921 13.969L15.4395 8.49959L0.749838 8.49959C0.550926 8.49959 0.360159 8.42058 0.219507 8.27992C0.0788555 8.13927 -0.000162125 7.94851 -0.000162125 7.74959C-0.000162125 7.55068 0.0788555 7.35992 0.219507 7.21926C0.360159 7.07861 0.550926 6.99959 0.749838 6.99959L15.4395 6.99959L9.96921 1.53022C9.82848 1.38949 9.74942 1.19862 9.74942 0.999593C9.74942 0.80057 9.82848 0.609699 9.96921 0.468968C10.1099 0.328238 10.3008 0.249176 10.4998 0.249176C10.6989 0.249176 10.8897 0.328238 11.0305 0.468968L17.7805 7.21897C17.8502 7.28862 17.9055 7.37134 17.9433 7.46239C17.981 7.55344 18.0004 7.65103 18.0004 7.74959C18.0004 7.84815 17.981 7.94575 17.9433 8.0368C17.9055 8.12785 17.8502 8.21056 17.7805 8.28022L11.0305 15.0302C10.9608 15.1 10.8781 15.1553 10.787 15.193C10.696 15.2308 10.5984 15.2502 10.4998 15.2502C10.4013 15.2502 10.3037 15.2308 10.2126 15.193C10.1216 15.1553 10.0389 15.1 9.96921 15.0302Z"
                    fill="#FF9F00"
                  />
                </svg>
                <span className="text-[12px] text-[#FF9F00] font-[800]">
                  Subira Inyuma
                </span>
              </button>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className={`mx-1 flex flex-row items-center gap-2 px-2 py-1 rounded cursor-pointer ${
                  currentPage === totalPages && "hidden"
                }`}
              >
                <span className="text-[12px] text-[#FF9F00] font-[800]">
                  Ayandi
                </span>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.96921 15.0302C9.89948 14.9606 9.84416 14.8778 9.80642 14.7868C9.76867 14.6957 9.74925 14.5982 9.74925 14.4996C9.74925 14.401 9.76867 14.3034 9.80642 14.2124C9.84416 14.1213 9.89948 14.0386 9.96921 13.969L15.4395 8.49959L0.749838 8.49959C0.550926 8.49959 0.360159 8.42058 0.219507 8.27992C0.0788555 8.13927 -0.000162125 7.94851 -0.000162125 7.74959C-0.000162125 7.55068 0.0788555 7.35992 0.219507 7.21926C0.360159 7.07861 0.550926 6.99959 0.749838 6.99959L15.4395 6.99959L9.96921 1.53022C9.82848 1.38949 9.74942 1.19862 9.74942 0.999593C9.74942 0.80057 9.82848 0.609699 9.96921 0.468968C10.1099 0.328238 10.3008 0.249176 10.4998 0.249176C10.6989 0.249176 10.8897 0.328238 11.0305 0.468968L17.7805 7.21897C17.8502 7.28862 17.9055 7.37134 17.9433 7.46239C17.981 7.55344 18.0004 7.65103 18.0004 7.74959C18.0004 7.84815 17.981 7.94575 17.9433 8.0368C17.9055 8.12785 17.8502 8.21056 17.7805 8.28022L11.0305 15.0302C10.9608 15.1 10.8781 15.1553 10.787 15.193C10.696 15.2308 10.5984 15.2502 10.4998 15.2502C10.4013 15.2502 10.3037 15.2308 10.2126 15.193C10.1216 15.1553 10.0389 15.1 9.96921 15.0302Z"
                    fill="#FF9F00"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-[10px]">
            {currentData.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="p-4 cursor-pointer flex flex-col gap-[10px] rounded-[8px] bg-[#FFFFFF]"
                >
                  <div className="w-full flex flex-row justify-between items-baseline">
                    <h1 className="text-[14px] font-[700] text-black">
                      {item.name}
                    </h1>
                    <span className="text-[14px] font-[200] text-[#FF9F00]">
                      {item.mark}
                    </span>
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <span className="text-[#C7C7C7] text-[14px] font-[300]">
                      {item.date}
                    </span>
                    <span className="text-[12px] font-light text-[#C7C7C7]">
                      Ayo wagize
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default AmasomoWakoze;
