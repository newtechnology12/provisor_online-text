import React from 'react'

const Step2 = () => {
  return (
    <div className='grid grid-cols-2 gap-[10px] w-full '>
        <div className='flex flex-col gap-2 items-start w-full'>
            <span className='text-[14px] font-[300] text-black'>Icyangombwa</span>
            <input type="number" placeholder=' shyiramo nimero y’indangamuntu' className='p-3 outline-none text-[12px] w-full rounded-[8px] bg-[#E7E7E7]' />
        </div>
        <div className='flex flex-col gap-2 items-start w-full'>
            <span className='text-[14px] font-[300] text-black'>Icyangombwa</span>
            <input type="text" placeholder=' shyiramo nimero y’indangamuntu' className='p-3 outline-none text-[12px] w-full rounded-[8px] bg-[#E7E7E7]' />
        </div>
        
        <div className='flex flex-col gap-2 items-start w-full'>
        <span className='text-[14px] font-[300] text-black'>Ururimi</span>
            <select  placeholder=' shyiramo nimero y’indangamuntu' className='p-3 outline-none text-[12px] rounded-[8px] bg-[#E7E7E7] w-full' >
                <option>Hitamo Uririmi</option>
                <option>Kinyarwanda</option>
                <option>French</option>
                <option>English</option>
            </select>
        </div>
      
    </div>
  )
}

export default Step2
