import React from 'react'
import Navbar from './Navbar'
import Page1con from './Page1con'
const Section1 = (props) => {

  return (
    <div className='h-screen w-full'>

        <Navbar />
       <Page1con users={props.users}/>
        
      
    </div>
  )
}

export default Section1
// import React from 'react'
// import Card from './component/Card'
// import User from './component/User'
// import {Bookmark} from 'lucide-react'
// import Section1 from './component/Section1/Section1'
// import Section2 from './component/Section2/Section2'

// const App = () => {
//   const users = [{
//     img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',

//     intro:'',
//     tag:'unsatisfied'
//   },
//   {
//     img:'https://media.istockphoto.com/id/1390330373/photo/young-business-woman-with-crossed-arms-outdoor-portrait.webp?a=1&s=612x612&w=0&k=20&c=eDVVOJpJOBZsmFrlsZbWvDa_fF6UCOP56UzqgThDYR4=',

//     intro:'',
//     tag:'undertaking'

//   },
//   {
//     img:'https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
//     intro:'',
//     tag:'satisfied'

//   }
// ]
  
// return (
//   <div>
//     <Section1 users={users} />
//   <Section2 />
    
//   </div>
  
 
// )

// }
// export default App
