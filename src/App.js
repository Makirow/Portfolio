import logo from './logo.svg';
import './App.css';
import Chat from './components/chats/Chat';
import List from './components/list/List';
import Details from './components/detail/Details';
import MainColumn from './components/MaincColumn/MainColumn';
import { useEffect, useState } from 'react';
import Login from './components/login/Login';

import io from 'socket.io-client';

const SocketIO = io.connect("http://localhost:4000")

function App() {

  const [show, setShow] = useState(false);
  const [addMode, setAddMode] = useState(false);

  const revealLogin = true;

  const toggleDetails = () =>{
       setShow(!show);
       setAddMode((previous) =>  !previous)
  }

 

  return (
  <>
        {

                     revealLogin ?(

                        <div className="container">

                        <div className='sub-container1'>
                               <MainColumn />
                        </div>
               
                         <div className='sub-container2'>
                         <List/>
                      <Chat  show={show} addMode={addMode} toggleDetails={toggleDetails} />
                      <Details show={show} toggleDetails={toggleDetails}/>
                         </div>
                     
                         </div>

                     ) : ( <Login />)
            
        }



           

        
    


   
</>
         
   
    
  );
}

export default App;
