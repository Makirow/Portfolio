import React, { useEffect, useState } from 'react'
import "./chatlist.css"
import avatar from "../default.jpg";
import avatar1 from "../Legacies-Header1.jpg";
import avatar2 from "../Screen-Shot-2021-08-16-at-65730-PM-1.jpg"
import avatar3 from "../sleepy hallow.jpg";
import avatar4 from "../spifewick.jpg";
import avatar5 from "../Resident alien.jpg"
import avatar6 from "../p10874252_i_v9_aa.jpg";
import avatar7 from "../Legacies-Header1.jpg";
import avatar8 from "../Screen-Shot-2021-08-16-at-65730-PM-1.jpg"

import { db } from '../../../lib/Firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';




function Chatlist() {

    const [addMode, setAddMode] = useState(false);

  


  return (
    <div className='Chatlist'>

      <div className="search">
          <div className="search-bar">
                 <ion-icon  name="search-sharp" ></ion-icon>
                 <input type="text" placeholder='search here' />
          </div>

         
                  
      </div>


   
                    <div className="items" >
                       <img src={avatar1} alt="image" />
                       <div className="texts">
                       <div className='spaceOut' >
                             <span>Gilles Bryton</span>
                             <abbr title="Delete this user"> <ion-icon  name="remove-sharp" ></ion-icon>  </abbr>
                        </div>
                          <p>Hello, How are you doing makis</p>
                       </div>
                  </div>
            
                  <div className="items" >
                       <img src={avatar2} alt="image" />
                       <div className="texts">

                        <div className='spaceOut' >
                             <span>Rooney</span>
                            <abbr title="Delete this user"> <ion-icon  name="remove-sharp" ></ion-icon>  </abbr>
                        </div>
                          
                          <p>Hello, How are you doing makis</p>
                       </div>
                  </div>
            
                  <div className="items active" >
                       <img src={avatar2} alt="image" />
                       <div className="texts">
                       <div className='spaceOut' >
                             <span>Brandon</span>
                             <abbr title="Delete this user"> <ion-icon  name="remove-sharp" ></ion-icon>  </abbr>
                        </div>
                          <p>Hello, How are you doing makis</p>
                       </div>
                  </div>
                   
                  <div className="items" >
                       <img src={avatar3} alt="image" />
                       <div className="texts">
                       <div className='spaceOut' >
                             <span>Kerein</span>
                             <abbr title="Delete this user"> <ion-icon  name="remove-sharp" ></ion-icon>  </abbr>
                        </div>
                          <p>Hello, How are you doing makis</p>
                       </div>
                  </div>
            
   

                  

                  
                 
    </div>
  )
}

export default Chatlist
