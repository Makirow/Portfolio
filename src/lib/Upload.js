import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import React from 'react'

const Upload = async(file) => {

    const metadata = {
        contentType1: 'image/jpeg',
        contentType2: 'image/jpg',
        contentType3: 'image/png',
       
      };

      const Dates = new Date()
  
    const storage = getStorage();
    const storageRef = ref(storage, `images/${Dates + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);


return new Promise((resolve, reject) =>{
    

      uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    alert('Upload is ' + progress + '% done');
   
    }, 
    (error) => {
     reject("Something went werong" + error.code)
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
     // Upload completed successfully, now we can get the download URL
     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      resolve(downloadURL)
     });
   }
 );
})

// Upload file and metadata to the object 'images/mountains.jpg'


// Listen for state changes, errors, and completion of the upload.


}

export default Upload


