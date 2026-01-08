import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 1)
  }

  function decreaseNum() {
    setNum(num - 1)
  }
  return (
    <div>
      <h1>value of num :  {num}</h1>
      <h1>usestatefunction // or we did a small project of inc & dec</h1>
      <button  onClick={increaseNum} className='bg-amber-800 p-1 m-5'>increase</button>
      <button onClick={decreaseNum} className='bg-amber-800 p-1 m-5'>decrease</button>
    </div>
  )
}

export default App