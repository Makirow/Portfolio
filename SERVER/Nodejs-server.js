

const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express();

const Port = 4000;  // setting up the port to be used on port 4000
const http = require('http'); //INCLUDEN THE HTTP LIBRARY INSIDE OUR CODE 
const Myserver = http.createServer(app);

app.use(express.static("public"));
app.use(cors());

const  { Server } = require("socket.io");
const  SocketIO = new Server(Myserver, {
     cors:{
          origin: "http://localhost:3000",  // allow socket io to accept connection with this server       
          methods: ["POST", "GET"],
         },
});



SocketIO.on("connect", (Socket) =>{
         console.log("User is connected");
         console.log(Socket.id);

         Socket.on("disconnect", () => {
              console.log("User is disconnected");
         });
});

Myserver.listen(Port, function(error){
        if (error) {
            console.log("The error found was \n" + error.message +"\n Try again");
        }
        else{
            console.log("Server is listening on port: " + Port);
        }
})