import React, { useState } from 'react'
import "./maincolumn.css"
import avatar from "../list/default.jpg"
import AddUser from '../addUser/AddUser'



function MainColumn() {

    const [addMode, setAddMode] = useState(false)
 
  return (
    <div className='MainColumn'>
         <div className="top-sect">
                  <div className="icons active">
                  <abbr title="My Chats">   <ion-icon  name="chatbubble-ellipses" ></ion-icon> </abbr>
                   </div>
                   <div className="icons">
                   <abbr title="My Group Chats">   <ion-icon  name="people" ></ion-icon> </abbr> 
                   </div>
                   <div className="icons">
                   <abbr title="My calls">  <ion-icon  name="call" ></ion-icon> </abbr> 
                   </div>

                   <div className="settings">
                   <div className="icons">
                   <abbr title="Settings">  <ion-icon  name="settings-sharp" ></ion-icon> </abbr>
                   </div>
                   </div>
         </div>
         
         <div className="buttom-sect">


         <div className='icons add' onClick={() => setAddMode((previous) =>  !previous)} >
         <abbr title="Add user">     <ion-icon  className='addition' name={addMode ? "remove-sharp" : "add-sharp"} ></ion-icon></abbr>
          </div>

          <div className='icons' >
             <abbr title="Archive Chat"> <ion-icon   name="archive-outline" ></ion-icon></abbr> 
          </div>

               <img src={avatar} alt="" />
         </div>
        {  addMode && <AddUser />   }
    </div>
  )
}

export default MainColumn
