import React from 'react'
import {ArrowBigRight} from 'lucide-react'

const Rightcardcon = (props) => {
  return (
   
     <div className='h-full w-full  p-7 flex flex-col justify-between absolute top-0 left-0'>
    <h2 className='bg-white rounded-full h-10 w-10 flex text-xl font-bold justify-center items-center'>{props.id+1}</h2>
    <div>
      <p className='text-xl leading-relaxed text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, eos.</p>
      <div className='flex justify-between'>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-full font-medium'>{props.tag}</button>
        <button className='bg-blue-600 text-white px-3 py-3 rounded-full font-medium'><ArrowBigRight /></button>
      </div>
    </div>
      </div>
      
  )
}

export default Rightcardcon
