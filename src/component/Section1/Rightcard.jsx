import React from 'react'
import {ArrowBigRight} from 'lucide-react'
import Rightcardcon from './Rightcardcon'

const Rightcard = (props) => {
  return (
    <div className='h-full w-60 shrink-0 overflow-hidden relative  rounded-4xl '>
      <img className="h-full w-full object-cover" 
      src={props.img} alt="" />
     <Rightcardcon id={props.id} tag={props.tag}/>
     
    </div>
  )
}

export default Rightcard