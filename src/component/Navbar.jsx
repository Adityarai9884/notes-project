import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-8 justify-between p-5 bg-blue-200 '>
      <h2 className='text-xl font-bold'>Sheryians</h2>
      <div className='flex gap-6'>
        {/* <a href="/" className='text-xl font-bold'>home</a>
        <a href="/about" className='text-xl font-bold'>about</a>
        <a href="/product" className='text-xl font-bold'>Product</a> */}
        <Link to='/' className='text-xl font-bold'>Home</Link>
        <Link to='/about' className='text-xl font-bold'>About</Link>
        <Link to='/product' className='text-xl font-bold'>Product</Link>

        
      </div>
    </div>
  )
}

export default Navbar
