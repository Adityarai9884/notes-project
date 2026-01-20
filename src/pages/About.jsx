import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  let navigate = useNavigate();
  const btnclicked=()=>{
    navigate('/');
  }

  return (
    <div>
     
      <h1>About Page</h1>
    </div>
  )
}

export default About
