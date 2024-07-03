import React from 'react'

export default function Banner() {
  return (
    <div className='container w-5/6 mx-auto my-32 py-16 bg-[#E8FBFF]'>
      <div className='flex sm:flex-row gap-4 sm:gap-0 flex-col justify-center sm:justify-around'>
        <h2 className='font-semibold text-[37px]'>Let Suppliers <span className='border-b-2 border-[#EB7150]'>Find You</span></h2>
        <button className="px-8 py-2 bg-[#EB7150] max-sm:w-[200px] text-white rounded-md font-bold text-[15px]">
          Get Verified
          </button>
      </div>
    </div>
  )
}
