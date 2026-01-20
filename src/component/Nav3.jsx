import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav3 = () => {
  const navigate = useNavigate();
  return (
    <div className='py-3 px-5 bg-green-900'>
         
       <button 
      onClick={() => {
        navigate('/');
      }} 
      className='font-medium bg-green-950 p-2 rounded m-2 active:scale-95 text-white '>
        Go Home
        </button>
   
      <button 
      onClick={() => {
        navigate(-1);
      }} 
      className='font-medium bg-green-950 p-2 rounded m-2 active:scale-95 text-white '>
        Back
        </button>
        
        <button 
      onClick={() => {
        navigate(+1);
      }} 
      className='font-medium bg-green-950 p-2 rounded m-2 active:scale-95 text-white '>
        Next
        </button>
      
    </div>
  )
}

export default Nav3
