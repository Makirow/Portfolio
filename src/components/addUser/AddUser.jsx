import React, { useState } from 'react'
import "./addUser.css"
import avatar from "../list/default.jpg"
import Notification from '../notification/Notification';
import { toast } from 'react-toastify';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../lib/Firebase';

function AddUser() {

  const [users, setUsers] =  useState(null)



  return (
    <div className='AddUser'>
           <form action="#" >
                      <input type="text" placeholder='Enter user name' name='username' />
                      <button className="icons"> find</button>
           </form>
           {
            users && 

            <div className="user">
            <div className="details">
                    <img src={avatar} alt="" />
                    <span>Makia Yengue</span>
            </div>
              <button className="addUser">Add User</button>
           </div>

           }

           
           <Notification/>
    </div>
  )
}

export default AddUser
