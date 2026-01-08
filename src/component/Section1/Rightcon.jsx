import React from 'react'
import {Upload}from 'lucide-react'
import Rightcard from './Rightcard'
const Rightcon = (props) => {
  return (
    <div id='right' className='h-full  overflow-x-auto w-2/3 flex flex-nowrap gap-10 p-6'>
     {props.users.map(function(elem,idx){
    
    return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
    
})}
     
    </div>
  )
}

export default Rightcon
