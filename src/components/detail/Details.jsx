import React, { useState } from 'react'
import "./details.css"
import avatar4 from "../list/spifewick.jpg";
import avatar5 from "../list/Resident alien.jpg"
import avatar6 from "../list/p10874252_i_v9_aa.jpg";
import avatar7 from "../list/Legacies-Header1.jpg";
import { auth } from '../../lib/Firebase';

const Details = ({ show, toggleDetails}) => {

 
  return (
    <div className={`Details ${show ? 'active': undefined}`}>
      <div className="close" onClick={toggleDetails}>
                    <ion-icon  name="close" ></ion-icon>
      </div>
     
        <div className="user">
               <img src={avatar4} alt="" />
               <h2>Banen yengue</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div className="info">

                   <div className="option">                           
                               <div className="title">
                                     <span>Chat setting</span>
                                     <ion-icon  name="chevron-up" ></ion-icon>
                               </div>
                   </div>

                   <div className="option">                           
                               <div className="title">
                                     <span>Privacy & help</span>
                                     <ion-icon  name="chevron-down" ></ion-icon>
                               </div>
                   </div>

                   <div className="option">                           
                               <div className="title">
                                     <span>Shared photo</span>
                                     <ion-icon  name="chevron-down" ></ion-icon>
                               </div>
                               <div className="photos">
                                   <div className="photoItems">
                                           <img src={avatar5} alt="" />
                                           <span>my best day</span>
                                   </div>
                                   <ion-icon  name="download-outline" ></ion-icon>
                               </div>
                              
                   </div>

                   <div className="option">                           
                               <div className="title">
                                     <span>Shared files</span>
                                     <ion-icon  name="chevron-down" ></ion-icon>
                               </div>
                   </div>
                      <div style={{display:'flex', width:'100%', justifyContent:'space-between'}} >
                      <button className="button">Block</button>
                   <button className="button" onClick={() => auth.signOut()} >Delete</button>
                   <button className="button">Report</button>
                        </div>      
                   
        </div>
        
    </div>
  )
}

export default Details


