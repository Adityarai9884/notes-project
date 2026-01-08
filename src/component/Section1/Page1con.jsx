import React from 'react'
import Leftcon from './Leftcon'
import Rightcon from './Rightcon'
const Page1con = (props) => {
  return (
    <div className='pb-7 flex gap-10 items-center h-[90vh]  px-18'>
      <Leftcon />
      <Rightcon users={props.users} />
    </div>
  )
}

export default Page1con
