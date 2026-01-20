import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-5'>
        <Link className='text-xl font-bold' to="/product/mens">Mens</Link>
        <Link className='text-xl font-bold' to="/product/womens">Womens</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product
