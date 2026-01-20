import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import {Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Aboutdetail from './pages/Aboutdetail'
import Nav3 from './component/Nav3'




const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      
      <Navbar />
      <Nav3 />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<Aboutdetail />} />
         <Route path='*' element={<NotFound />} />
        <Route path='/product' element={<Product />}>
        <Route path='/product/mens' element={<Mens />} />
        <Route path='/product/womens' element={<Womens />} />
        </Route> 
        
      </Routes> 
      <Footer />
     
      
      


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
  // in local storage we set the item in key value pair like how (key:name, value :aditya)
  // local sotrage mai file string ki form mai jaati hai to ab hm pura ka pura aary bhej na ho to kaise karenge
  // uske liye hm use karenge JSON.stringfy("file ka naam")
  //const App = () => {
  // const user = {
  //   name : "Aditya",
  //   age : 19,
  //   city : "ghazipur"
  // }

  // localStorage.setItem('User', JSON.stringify(user))
  // AUR AB TUME JAISA DATA THA USSI FORM MAI CHAIYE TO USKE LIYE HM USE AKRTE HAI 
  // JASON.prase
  // we connect both backend a`nd frontend by the help of API
  // API : Application programming interface
  // ek set of rules hote hai jisse ki do application ek dusare se baat kar sake  
  // two method to call api
  // 1. fetch api : is bit difficult than axios
  // 2. axios : easy to use than fetch api
  // ye dono hogya ab inko kaisse use karenge: use state and useeffect ka use karenge
  // use effect mai hm api call karenge aur use state mai usse store karenge
  // use effect mai react ki proesss chati rehagei but useeffect add karne se properties sath sath chakegi
  // and  chlata kb hai jb react ka main function chal jata hai pura tbb iske baad useeffect chalta hai
  // jb jb set ki value change hogi tb tb useeffect chalega
  // agar hm chahte hai ki sirf ek baar chale to hm kya karenge
  // useeffect ke baad ek empty array [] de denge jisse ki wo sirf ek baar chalega
  // [] iska mtlb hai hmne koi dependency nahi di isliye sirf ek baar chalega
  // ab jaise jaise dependency badhegi waise waise useeffect chalega
  // react router dom react as a single page application banata hai
  // single page application mtlb ki jb hm ek page pe honge to wo pura page reload nahi karega balki sirf 
  // ussi component ko reload karega jaha change hua hai
  // routing ke andar bhot sari chige aati hai jaise ki nested routing , dynamic routing , protected routing
  // to nested routing mtlb ki ek route ke andar dusara route hona jaise ki /home ke andar /home/profile /home/settings aise kuch aur routes hona
  // dynamic routing mtlb ki jb hmara route kuch dynamic ho jaise ki /product/1 , /product/2 , /product/3
  // to yaha pe 1,2,3 dynamic hai jo bhi product ka id hoga wo aa jayega
  // protected routing mtlb ki jb hm koi aisa route banate hai jo sirf logged in user ke liye ho jaise ki /dashboard , /profile aise kuch routes hote hai jo sirf logged in user ke liye hote hai
  // to iske liye hm protected routing ka use karte hai jisse ki agar user logged in nahi hai to wo us route pe nahi jaa sakta
  // useparams : jb hm dynamic routing karte hai to usme hm useparams ka use karte hai jisse ki hm us dynamic part ko access kar sake
  // useNavigate : jb hm kisi route se dusare route pe jana chahte hai to usme hm useNavigate ka use karte hai
  // jaise ki jb hm login karte hai to hm login page se dashboard page pe chalte hai to isme hm useNavigate ka use karte hai
  // use navigate ka samaj gya sab mai baki next aur back jana hoga to +1 ya -1 ka navigate(+1/-1) 
  // aise karke use kar lenege
  // navlink : jb hm kisi bhi page pe hote hai to usme hm navlink ka use karte hai jisse ki hm us page pe active class de sake
  // jaise ki agar hm home page pe hai to home link pe active class lag jayegi
  // jisse ki user ko pata chal jayega ki wo kis page pe hai
    // navlink mai active class ko customize kar sakte hai jaise ki activeClassName ya activeStyle
  // link : jb hm kisi bhi page se dusare page pe jana chahte hai to usme hm link ka use karte hai
  // jaise ki jb hm home page se about page pe jana chahte hai to usme hm link ka use karte hai
  // setTheme value chnage krne ka kaam karta hai 
  // jaise ususlayy hm parent se child ki taraf deta flow hota hai 
  // lekin jb hm chahte hai ki child se parent ki taraf bhi data jaaye to uske liye hm callback function ka use karte hai
  // jaise ki hmne App.jsx mai setTheme banaya and usse Navbar ko bhej diya as a prop
  // ab Navbar mai jb bhi theme change karna hoga to wo App.jsx mai setTheme ko call karke theme change kar dega
  // prop drilling : jb hm ek se jyada level pe props bhejte hai to usme prop drilling hota hai
  // jaise ki App.jsx se Navbar.jsx ko props bhejte hai and Navbar.jsx se Header.jsx ko props bhejte hai
  // to isme prop drilling hota hai jisse ki code complex ho jata hai
  // iske liye hm context api ka use karte hai jisse ki hm easily props ko manage kar sake
  // context api : jb hm global state manage karte hai to usme hm context api ka use karte hai
  // jaise ki agar hm ek theme banate hai to usme hm context api ka use karte hai jisse ki hm easily theme ko manage kar sake
  // context api mai hm createContext , Provider , Consumer ka use karte hai
  // createContext : jb hm context banate hai to usme hm createContext ka use karte hai
  // Provider : jb hm context ko provide karte hai to usme hm Provider ka use karte hai
  // Consumer/usecontext : jb hm context ko consume karte hai to usme hm Consumer ka use karte hai