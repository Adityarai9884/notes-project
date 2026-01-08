import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');  
  }
  return (
    <div>
      <form onSubmit={submitHandler}  className='border-2 m-10 p-10'>
        <h1>fromhandling</h1>
        <input className='text-black border-2 p-2 m-4 ' type="text" placeholder='enter the text'/>
        <br />
        <button className='text-white border-2 p-2 m-4 bg-black'>submit</button>
      </form>
    </div>
  )
}

export default App
