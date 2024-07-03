import React from 'react'

export default function Button({Text}) {
  return (
    <div>
      <button className="px-8 py-4 w-full border-[1px] border-[#E7760D] text-[#3E3E3E] rounded-md font-normal text-[18px]">
       { Text }
    </button>
    </div>
  )
}
