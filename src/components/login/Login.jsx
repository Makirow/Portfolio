import React, { useState } from 'react'
import "./login.css"
import { toast } from 'react-toastify';
import { auth, db } from '../../lib/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import avatar7 from "../list/Legacies-Header1.jpg";
import avatar from "../list/default.jpg"
import Upload from '../../lib/Upload';


function Login() {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const ToggleLogin = () =>{
       setToggle(!toggle)
       setToggle1(true)
  }
 const [loading, setLoading] = useState(false)

 const [inputType, setInputType] = useState('password');
 const [addMode, setAddMode] = useState(true)
 const clickToggle = () =>{
     
      if (!addMode) {
         setInputType('password')
      }
      else{
             setInputType('text')
      } 
 
      setAddMode(!addMode);
 }




  return (
    <>

<div className={`SignUpForm  Container ${toggle ? 'active' : undefined} `}>
   
    


   <div className="sub-container">
                  
         <div className="container1">
              <h2>Sign up</h2>
              
                     <form action="#" >
  
                     <div className="input-box">
                           <input type="text" name='username' autoComplete='off' />
                                <span><ion-icon name="person"></ion-icon></span>
                                <label htmlFor="username">Username</label>
                                <div className="error">error message</div>
                           </div>
  
                           <div className="input-box">
                           <input type="email" name='email' autoComplete='off' />
                                <span><ion-icon name="mail"></ion-icon></span>
                                <label htmlFor="email">Email</label>
                                <div className="error">error message</div>
                           </div>
  
                           <div className="input-box">
                           <input type={inputType} name='password' autoComplete='off'  />
                           <span><ion-icon onClick={clickToggle}  name={addMode ? "eye-off-sharp" : "eye-sharp"}></ion-icon></span>
                                <label htmlFor="password">password</label>
                                <div className="error">error message</div>
                           </div>
                          
                             <div className="input-image-box">
                                     <input type="file" id='file' accept='.jpg' name='image' autoComplete='off' />
                                                                <label htmlFor='file'  > 
                                                                                       
                                                            Choose a Picture
                                </label>
                              
                                                            <img className='Upload-image' src={avatar} alt="" />
                           </div>
  
                           
                                 <span className='term'> My signing up, i do agree to your company terms and policies </span>
                                 
                           
  
                           <div className="input-button">
                               <button type='submit'>Sign Up</button>
                           </div>
                           <span className='term signin'>Are you already a member ? <b  onClick={ToggleLogin} >Sign in</b> </span>
  
                     </form>
  
         </div>
         <div className="container2">
             <div className="container2-heading">
                 <h2>Welcome to</h2>
                   <div className='logodiv d-flex align-items-center justify-content-center gap-4'>
                        <h1>Mak-cinema</h1>
                   </div>
             </div>
  
             <div className="container-body">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, consequuntur? Dolorum molestias labore iste? Odio, cupiditate laboriosam saepe soluta esse nisi aut adipisci incidunt eveniet repellendus officia et tenetur ipsum.</p>
                
                       <div className='hori'>
                      
  
                      </div>
             </div>
                
         </div>
   </div>
  
     </div>
    
    <div className={`SignInForm Container ${toggle ? 'active' : undefined} `}>
   
  
    


 <div className="sub-container">
     
       <div className="container1">
            <h2>Sign In</h2>
            
                   <form action="#">

                         

                         <div className="input-box">
                         <input type="email" name='email' autoComplete='off' />
                              <span><ion-icon name="mail"></ion-icon></span>
                              <label htmlFor="email">Email</label>
                              <div className="error">error message</div>
                         </div>

                         <div className="input-box">
                         <input type={inputType} name='password' autoComplete='off'  />
                         <span><ion-icon onClick={clickToggle}  name={addMode ? "eye-off-sharp" : "eye-sharp"}></ion-icon></span>
                              <label htmlFor="password">password</label>
                              <div className="error">error message</div>
                         </div>

                        <div  className='holder' >
                               <span className='term'> <input type="checkbox" /> Remember me</span>
                               <a href="#">Forgot Password?</a>
                        </div>
                         

                         <div className="input-button">
                             <button type='submit'>Sign in</button>
                         </div>
                         <span className='term signin'>Not yet a member ? <b  onClick={ToggleLogin} >Sign Up</b> </span>

                   </form>

       </div>
       <div className="container2">
           <div className="container2-heading">
               <h2>Welcome Back</h2>
                 <div className='logodiv d-flex align-items-center justify-content-center gap-4'>
                      <h1>Mak-cinema</h1>
                 </div>
           </div>

           <div className="container-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, consequuntur? Dolorum molestias labore iste? Odio, cupiditate laboriosam saepe soluta esse nisi aut adipisci incidunt eveniet repellendus officia et tenetur ipsum.</p>
               
                     <div className='hori'>
                    

                    </div>
           </div>
              
       </div>
 </div>

   </div>


  

    </>
   
  )
}

export default Login
