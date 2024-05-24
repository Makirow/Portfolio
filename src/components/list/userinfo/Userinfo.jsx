import React from 'react'
import "./userinfo.css"
import avatar from "../profolio logo.png"


function Userinfo() {
 
  return (
    <div  className='Userinfo'>
              <div className="user">
                   <img src={avatar} alt="avatar" />  
                   <h2>Angelina</h2>
              </div>
              <div className="icons">
                     <ion-icon  name="ellipsis-horizontal" ></ion-icon>
              </div>
    </div>
  )
}

export default Userinfo
