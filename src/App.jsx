import React, { useState } from 'react'
import { use } from 'react';

const App = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);  
    // console.log(details);
    const copytask = [...task]; // aise copy karte hai hm

    copytask.push({title,details})
    setTask(copytask)
    console.log(task)

    setTitle('')
    setDetails('')
  }
  
  return (
    
      <div className='h-screen bg-gray-800 lg:flex text-white'>
    {/* // {  <h1 className='bg-white w-50 flex justify-center h-10 px-2 py-1  text-black border-2'>Amelie</h1> } */}
      
    {/* // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"> */}

     <form className='flex  items-center flex-col  lg:w-1/2  gap-4  p-10'
      onSubmit={(e) => submitHandler(e) 

      }>
     
     <h1 className='text-3xl text-black font-bold border-2 bg-amber-50'> ADD NOTES</h1>

     {/* phela input */}
        <input
         className='border-2 rounded bg-white text-black px-5 w-full py-2 m-4'
         type="text"
          placeholder='enter the text'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          />

      {/* detailed input */}
      <textarea className='border-2 bg-black
       text-white px-5 w-full h-20 py-2 rounded'
       placeholder='enter the thought'
        name=""
         id=""
         value={details}
         onChange={(e)=> {
          setDetails(e.target.value)
         }}
         />


      <button className='bg-gray-700 border-2 active:bg-black rounded px-5 py-2 w-full m-4'>ADD NOTES</button>
     
     </form>

      <div className='lg:w-1/2  lg:border-l-2 p-10'>
     {/* <div className="w-fit h-fit  p-4 rounded-lg shadow-lg"> */}
     <h1 className='text-4xl border-2 bg-pink-100 w-fit text-black  font-bold'> YOUR NOTES</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-6 overflow-auto h-full '>
       {task.map(function(elem,idx){

        return  <div  key={idx} className="h-56 w-44 bg-cover flex flex-col overflow-hidden rounded-xl p-4 bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NCA4IDQ4HDQcOBw4IBwcIBw8IDQcNFRUWFhYRExMYHigsGBomHhUTIT0hJSkrLjMuFx8/ODMsNygtMCsBCgoKDg0OFw8QGi0fHiUrNzgrLysyNy03OC00KysrLSsrKy0wLS0rLSs3LS03NysrLSsrKy0tKzcrKysrLSsrN//AABEIANEA8QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIHBAYIBQP/xABZEAABAgQBAQ4PCBAHAQAAAAAAAQIDBAURBwYSFCEmMTZRVWGBkZWzwQgTF0FScXV2oaKjscLR0hYyVGV0kpPDFSIlQ0RFU3JzgpSlsrTT4zNCY2RmpPAk/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEAAQQCAwEAAAAAAAAAAAAAAQIREhMDUQQUMWH/2gAMAwEAAhEDEQA/ANGgAAAAAAArWqrkaiKrlVGtaiXVy7Bz20WcX8Hmf1oeZ85woLnNiNez/FSIjof2qO+2RdDQ656tpDEiSECPFgS0KafKQ4sxBbBaiQoitRXImhqXuc+TkwWIu8xJQJ1fvL9+IxvOfqzJioO97LuXtR4a856naxE1EanaaiGV13eE5ex+Li8vw8iqm7Ul3/xeY5DMP6qupLxfoIrvM09MX7ZCexPRi83sw1q7vvCp+fBjt87DlQ8LKquqxE/UXnsehgPYnoxaAZhLU16yJvQ0870P3Zg9UF1Xsb20hL5ohvgE31Li0jDwbmv80aH85rfWfuzBiN148L6e3oKbnBN9RaGn2YLdlMt/Ujqv1ZyoeDMFPfTCrvudzIbWA3VloawZg3KdeMv0URfTQ/dmD1PT30R69qHEb9YbIBN1fZaGvlwrpUOG6I9XpDYxYkR6s0GtRLqq3VTQ886Gs1FdBzSSqzL1lkeiI5IeaXM3ROvax63iw2vhuhPRroTmLDiscl0e1UsqKeUcoWwG1aaZK6Mg2fitlF0NGGjlta3WO3DXNV7pMPngA7sgAAAAAAANnZGYRrVaJArP2QbASMsVM6/YvPHS8xEcz33TEvfM31Oufb6gnxqnEf8AdO64L6yJH8+a/mIh3ewGlOoJ8bLxD/eL1BE22dxB/eN02FgjS7cBW9eqvXtUJG/XGaYDwevU5jepLU+sNyWJYDUDMCoCKjvslN3RUVPuYzV7SvNsQZBUhtR8TNREYiRIiQsxm3W0VtfQP3sfu3RS55/I+Q3S4mcU7JfmjOKdk75pyweVpxM4p2TvmoM4p2TuBDlgDiZxb2T+BC5xb2T+BDlADi5xb2T/AADOLeyf4DlAK4ucW7MTwDOLdmJwp6jlADi5xbsxOFPUM5M2YnCnqOUAOLnJmzE4U9QzkzZifOT1HKARw4tPhuY6Gqxcy5iscrXoioipbQWxrp+DVERyp911TNaH/wB7fYNoHCiNs5U3T0+P9lmprtMHqJsVXfn09kyTCCidhUuMF9RsCxLHqYdBTCKh/k6hv1B3qL1I6H+SnuMHnfbEsB0TqS0L8hOcYxDpeLGQ9NpdEhTsnCjsmXVeHKvfEm3xkWGsOK5Usu6xpu+xrXHzWzA74YPIxwNBAAivT2CmsmS/STXLxDvNjo2CWsmT/TTXLPO9WAxsSxnYlgjGxLGdiWAxsfqmpvGFjJFSxx54mYizVLIGOaQZs82urpu8MiEzZM32y66ui8MgYdMHTNzwjVX0l4Zg/Ppm54SdMXcLpr6MofqD8umLuE6Yu4XRUZQ/YH4dMUnTF2fAXRUZQ5AOPm12fAhM2uypfXq7Mock4cRPtl2bmWaXZdwmK/8ArnXi45olmZuxsSxlYWOzLGxLGVhYDGxrjHll8l4a9jXYDvJxk5zZFjXuOjdKd9irS6+B6c4HncAEV6ewQ1kynyia5V53s6HgdrKlvlU1yrjvoEBQBLEsZEAxsLGQAwsLGVhYDCwsZWFgjCwsZWFgMLCxlYlgMbEsZ2JYDGxLGdiWAxsSxnYlgMbCxlYlgMbCxlYlgMbCxlYlijGx0DHFulGIuxUpdfCpsGx0LG5NJ8bcnpZfHIPNwACvTmBi6S5f5ZM8op381/gVrLgfLplPHNgACFAEBQBAABAUAQljIgEsSxkAMbEsZ2JYDGxLGdiWCMbEsZWFgMLCxlYWAwsLGVhYDCwsZWFgMLCxlYWAwsdExsTSbM7k1LL5Rp32x0bGpNJc3uR5ZfLMA8zgAK9NYEazIPdCZTxjYRrzAVdJsPunMp4UNiAQAAQFAEBSACFAEBQBAUgAhQBAUAY2FigDGwsZEsBjYWMrEsEY2JYzsSwGNiWM7EsBjY6PjQmkqd3Ikqvl4Z3qx0nGdNJE/uLKr/2IQHmAABXpfAPWc3urMJ/CbGNb4ALpPTcrEwngYbJAgKQAQoAgKAICkAEKAICgCAACAoAgKQAAAICgCWJYyIBLEsZADCx0vGZNI9Q7Ur/MwTu1jp2L7L5E1FP9CA7gjwl5gPLAAA9J9D6ulF25W5hPFhmyzWXQ8rfJOImxX46eTgqbOAgKQAAABCgCAoAgAAgKAICkAEKAICgCApABCgCAoAgAAh1PFdt8jKkn+yavBEYp206tiil8jqmnxaq8DmqB5OAAHo3odF0qzG5lJGRPoZc2kat6HPWrM98kbkJc2mBAUAQAAQFAEBQBAAAIUAQFAEBSACFAEBQBAABAUAQFAEOs4mJfJCp9yYi+Y7MdcxHS+SVT7jR18UDyOAAPRvQ5a1pnvkjchLm1DVXQ4615nvji8jANqgQFAEBQBAABAUAQFIAIUAQFAEBSAAABAUAQFIAAAEBQBDr2IaXyTqncOZXxFOxHwMv00q1TuBNr5JwHkEAAei+hw1szXfDE5GCbXNT9Dfrbm0/5A/kYJtkCAACAoAgKQAQoAgKAIAAICgCAoAgAAgKAICkAAAAQoAh8LLtNK1U73Z1fIvPvHw8uda9V7257kHgePQAB6J6G/W7Np8fO5KEbaNSdDcul+cT48XkoZtsAAABCgCAoAgAAgKAICgCAACAoAgKQAQoAgKAICkAEKAIfJyubfJ6ot2aFNt4YTz6583KVt6LOt2aTMp5NwHjIAAehuhtX7gzqfHX1TDbpprodJyDCok62LFloarV0c1I0dsNVTpbdHRU2wtYk/hVO352H6wOaDgLW5FPwul78/C9Zitfp6as7Sd+owU5wPog+WuUdNTVn6MnbqkFPSMVynpaatRoadurQE9ID6wPiuyupCatUyeT86tS6ekY+7Oi7a5N8ey3tAfcB8P3Z0XbXJvj2W9onu0ou2uTfHct7QH3QfBXLWi7a5O8cy6+kY+7eiba5P8bwPaA++Dr65c0TbWgcawV5yLl3Q9tKFxlCXnA7CDri5e0PbSib0+xecxXL+hbaUb9taoHZSHWlxCoW2lI/akUxXESg7Z0rej3A7ODqy4j0DbOmb0Ry8xiuJNA2zp+8r15gO1g6kuJmT+2UjvMir6JguKGTyfjKU3oEdfRA7gQ6cuKmTqfjGX3pOZX0D83Ys5OJ+MWb1Nm3eaGB3UHSOq5k3th+6Z3+mOq5k3th+6Z3+mB3cHRuq7k38PXiqc/pkXF7Jz4c/iqb9gDvJwa8l6VNps02OniKdTXF/Jz4bF4qmvYOLUsW8noknGgtnIyxHysSExPsZMpdVaqJqtA8yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==')]">

          <h3 className='leading-tight text-black p-4 font-bold text-lg'>{elem.title}</h3>
          <p className=' text-sm  overflow-y-auto leading-tight font-medium text-blue-500'>{elem.details}</p>
        </div>
      
       })}
      
      </div>
     </div>
    </div>

    
  )
}

export default App




// usually in reacts we put app.jsx vaant bcoz we dont wrote anything bcoz then it beacme hoch-poch
// kisse bhi variable ko print karana hai to history, usse {} bracket ke andar likhenge
// prop: parent ke thorugh  child ko data bhejte haiii which means ki hm hamesha app->card ko data bhejnege
// a set of a sequence of a data
// har ek object ko ek key pass karni padti hai jisse wo differinciate kar pyaae ki ha ye alag hai ha ye alag hai
// passing "IDX" as a key is very important 
// dheko mai jo abhi padh  raha tha inse 2:50 se ki agar tum header.jsx banaye to uska alag se tum uska css bana lo aise sabka alaag banoge to 
// koi bhi hoch-poch nahi hoga saari chig alag alag hogi lekin issemai bhi ke dikkat aa gaai wo hai ki agar tum c
// classname='btn like header aur button mai to dono pe same ek hi property lag jaayrgi jbki kyy
// kyy pata tume dono button pe alag alag properties lagani thi isliye hm 
// modules css ka use karte haiii
// to modules css mai jo jo banana hai like header.jsx button.jsx iase karke jo bhi uska ek component mai ek alag se
// folder bana lo and uss folder mai ye sab banao and same ussi folder mai unka tum csss daal do
// naam kaise rakhoge jaise 'haeder.modules.css' , 'btn.modules.css'
// aise karke and jb hmse iske properties use karni hogi tb hm 
// isse pehele im import karnege and wo kaise import styles from 'button.modules.css iske baad hm 
// <div classname = {style.btn} aise karke use karenge
// ab hm agar header mai jaa ke {styles.btn} ya button ki css propreties ab use karenge to wo nahi aayega 
// khu ki ab wo dono componnent ke alag alag folder mai hai 
// tailwind is also called as utility first library/framework
//const arr = [
  //   {
  //     user: 'Aditya',
  //     age:22
  //   },
  //   {
  //     user:'Ayush',
  //     age:20
  //   },
  //    {
  //     user:'Ameliee',
  //     age:20
  //   },
  //    {
  //     user:'Nataliee',
  //     age:20
  //   },

  // ];

  // arr.map(function(elem){
  //   console.log(elem);
  //   console.log(elem.user);
  //   console.log(elem.age);
  // })
  // Usestate(most used) : manages the state
  // what is state jaise ki message pe 7 messasge aaye kisse ne ek aur kr diya to 8 hogye to wo state change hua
  // use effect: ka mtlb hai ki jo main kaam ho raha ahai ye usse distrub nahi kargea baki apna kaam side by side 
  // karega bina main function mai koi change ya kuch uske path ko chnage kiya ye bas apna kaam karega
  // useref: DOM element ko selct karne ka kaam karta hai
  // useref meaning using refrences /selcct DOM elemnt
  // useContext: jaise hm ko koi bhi chid 2-3 state pe deni hoti hai to hm ek state ko dete the phir dusare state ko aise aise karke jata tha
  // iskke jagah hmne usecontext(global) kar diya jo chig ab usse koi bhi use kar sakta hai 
  // usereducer: basic/complex state manage jaise ki agar koi login hai ya nahi kon login hai agar admin login hai to usse sab classes /information dhiekga 
  // usememo : optimisataion 
  //  usecallback : help in optimisation
  // to copy anything from setnum we hve to do soemthing bcoz agar mai ek jagah se har ek refrence lenge 
  // to problem aa sakti hai isliye hm ke naya reference point bnayange 
  // kaise :
  // const btnclicked = () => {
    // const newNum = {...num}; [...num](agar aaray hota tb aise...) aise karte hai copy reference ko
    // setNum(newNum + 1); ya yaha hm kuch bhi change kar skate hai
  // }
  // batch click method
  // setNum(prevNum => prevNum + 1);
  // setNum(prevNum => prevNum + 1);
  // setNum(prevNum => prevNum + 1);
  // isse kya hoga ki jb hm button pe click karenge to wo 3 baar increase ho jaayega