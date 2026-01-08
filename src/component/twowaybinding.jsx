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
        <p>two way binding mai agar apko koi bhi chnage karna hai to app phele titile se bolenge 
           chnage karne koo uski value change hogi onchnage se uski wagah se set
           title change hoga settitle ke chnage hone ki wagah se phir se title chage hoga</p>
        <input className='text-black border-2 p-2 m-4 ' type="text"
        onChange={(e) => {
          console.log(e.target.value); 
        }}
         placeholder='enter the text'/>
        <br />
        <button className='text-white border-2 p-2 m-4 bg-black'>submit</button>
      </form>
    </div>
  )
}

export default App
