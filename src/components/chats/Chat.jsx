import React, { useEffect, useState } from 'react'
import "./chat.css"
import avatar from "../list/sleepy hallow.jpg"
import EmojiPicker from "emoji-picker-react"
import myVideo from "../video/Ser_un_cantante_-_Manuel_Turizo_%F0%9F%8E%B6_Canci%C3%B3n_oficial_-_Letra___Caracol_TV(144p).mp4"

function Chat({ show, addMode,toggleDetails}) {

const [open, setOpen] = useState(false);
const [emoji, setEmoji] = useState(" ");

console.log(show)

const handleEmoji  = e =>{
   setEmoji(prev => prev + e.emoji);
   setOpen(false)
}

const endRef = useState(null);
useEffect(() =>{
  endRef.current?.scrollIntoView({behaviour: "smooth"})
}, [])




  return (
    <div className='Chat'> 
           <div className="top">
                         <div className="user">
                              <img src={avatar} alt="" />
                                 <div className="texts">
                                   <span>Brandon</span>
                                   <p>Online</p>
                                 </div>
                         </div>

                         <div className="icons">
                        <abbr title="Voice Call"></abbr> <ion-icon name="call" ></ion-icon>
                        <abbr title="Video Call"><ion-icon   name="videocam-sharp" ></ion-icon></abbr>
                        <abbr title="Setting"> <ion-icon  name="ellipsis-vertical" ></ion-icon></abbr>
                        <abbr title={addMode ? "Show Details" : "Hide Details"}> <ion-icon onClick={ toggleDetails} name={addMode ? "arrow-back-sharp" : "arrow-forward-sharp"}  ></ion-icon>  </abbr>
                         </div>
           </div>

           <div className="center">
                      <div className="message">
                              <img src={avatar} alt="image" />
                                   <div className="texts">
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti ipsum tenetur doloribus nisi quibusdam veritatis blanditiis totam fugiat, sapiente impedit in, iure rerum voluptatem architecto ducimus labore hic similique!</p>
                                   
                                   <span>1 min ago</span>
                                   </div>
                      </div>

                      <div className="message owner">
                               <div className="texts">
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti ipsum tenetur doloribus nisi quibusdam veritatis blanditiis totam fugiat, sapiente impedit in, iure rerum voluptatem architecto ducimus labore hic similique!</p>
                                   
                                   <span>1 min ago</span>
                                   </div>
                      </div>

                      <div className="message">
                              <img src={avatar} alt="image" />
                                   <div className="texts">
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti ipsum tenetur doloribus nisi quibusdam veritatis blanditiis totam fugiat, sapiente impedit in, iure rerum voluptatem architecto ducimus labore hic similique!</p>
                                   
                                   <span>1 min ago</span>
                                   </div>
                      </div>
                      <div className="message">
                              <img src={avatar} alt="image" />
                                   <div className="texts">
                                      <img src={avatar} alt="image" />
                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti ipsum tenetur doloribus nisi quibusdam veritatis blanditiis totam fugiat, sapiente impedit in, iure rerum voluptatem architecto ducimus labore hic similique!</p>
                                   
                                   <span>1 min ago</span>
                                   </div>
                      </div>
                      <div className="message owner">
                                <div className="texts">
                                    <img src={avatar} alt="image" />
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti ipsum tenetur doloribus nisi quibusdam veritatis blanditiis totam fugiat, sapiente impedit in, iure rerum voluptatem architecto ducimus labore hic similique!</p>
                                   
                                   <span>1 min ago</span>
                                   </div>
                      </div>
                      <div className="message owner">
                               <div className="texts">
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti ipsum tenetur doloribus nisi quibusdam veritatis blanditiis totam fugiat, sapiente impedit in, iure rerum voluptatem architecto ducimus labore hic similique!</p>
                                   
                                   <span>1 min ago</span>
                                   </div>
                      </div>
                                 <div ref={endRef}></div>
           </div>

           <div className="bottom">

           <div className="icons">
                         <ion-icon  name="image-outline" ></ion-icon>
                         <ion-icon  name="camera" ></ion-icon>
                     <ion-icon  name="mic" ></ion-icon>
                         </div>

                    <input type="text"
                     placeholder='Enter your message' 
                     value={emoji} 
                      onChange={(e) => setEmoji(e.target.value)} 
                      autoCapitalize='true' 
                      autoCorrect='on'
                       autoComplete='on' />
                           <div className="emoji" onClick={() => setOpen(prev => !prev)} >
                                  <ion-icon  name="happy" ></ion-icon>  

                                  <div className="emoji-container">
                                                 <EmojiPicker className='emoji-container' open={open} onEmojiClick={handleEmoji} />
                                    </div>

                           </div>
                                    
                           
                           <button className='send-Btn'><ion-icon  name="send" ></ion-icon></button>
           </div>
          

    </div>
  )
}

export default Chat
