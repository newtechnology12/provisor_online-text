import React from 'react'

const Step1 = () => {
  return (
    <div className="w-full flex flex-row gap-[10px] justify-between">
    <div className="flex flex-col gap-[0px] items-center cursor-pointer bg-[#F6F6F6] p-[10px] rounded-[18px]">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z"
          stroke="#FFB73A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h1 className="font-[700] max-w-[200px] text-center">
        Uruhusya Rwagateganyo Rwogutwara
      </h1>
      <span className="text-[#FF9F00]">(provisoire)</span>
    </div>
    <div className="flex flex-col gap-[0px] items-center cursor-pointer bg-[#F6F6F6] p-[10px] rounded-[18px]">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z"
          stroke="#FFB73A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h1 className="font-[700] max-w-[200px] text-center">
        uruhushya rwaburundu rwogutwara{" "}
      </h1>
      <span className="text-[#FF9F00]">(permit)</span>
    </div>
  </div>
  )
}

export default Step1
