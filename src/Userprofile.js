import React,{ useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './userprofile.css';
import Userdetails from "./Userdetails";
import Signup from "./Signup";
import {auth, db, storagee } from './firebase';
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore/lite";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
function Userprofile(props){
    const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [signin,setSign]=useState(false)
  const [logout,setLogout]=useState(false)
  const [prog, setProg] = React.useState();
  const [uploaded,setUploaded] = React.useState(false)
  const[currentUser, setcurrentuser] = React.useState()

  
  // const ReactFirebaseFileUpload = ()=>{
  //   const [image,setImage]=useState('');
  //   const handleChange = e=>{
  //     if (e.target.files[0]){
  //       setImage(e.target.files[0]);
  //     }
  //   };
    
  // }
  const handleImageUpload =async(e) => {
    const [file] = e.target.files;
    if (file) {
      const uploadTask = ref(storagee,`${props.currentUser.uid}`);
      console.log(currentUser)
      const storageRef = uploadBytesResumable(uploadTask, file)
      storageRef.on("state_changed",(snapshot) => {
        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) *100)
        setProg(prog)
        setUploaded(true)
      },(error)=>console.log(error),
      ()=>{
        getDownloadURL(storageRef.snapshot.ref)
        .then(url => {
          setUploaded(false)
          console.log("url",url)
          try{
             updateDoc(doc(db, "users", props.currentUser.uid),{
              image:url
               })
              }catch(error){
                console.log(error)
              }})
      }  
      )  
    }
  };
  if(signin){
    return <Userdetails/>

}

if(logout){
  return <Signup/>

}
 return(
        <div className="app">
            <h1 className="page-header">My Profile</h1>
            <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "200px",
          width: "223px",
          border: "1px dashed black",
          borderRadius:"30px"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "223px",
            height: "200px",
           marginLeft:"-2px",
           borderRadius:"30px",
           alt:"profile"
          }}
        />
      </div>
      Click to upload Image
    </div>
             <div className="main">
             <h1 className="header">{props.userdataname}</h1>
            <div className="card">
            <div className="card-body">
            <label>Address: &nbsp;</label>
            {props.userdataaddress}
            </div>
            <div className="card-body">
            <label>Date of Birth: &nbsp;</label>
            {props.userdatadate}
            </div>
            <div className="card-body">
            <label>Email: &nbsp;</label>
            {props.userdataemail }
            </div>
            <div className="card-body">
            <label>Phone Number: &nbsp;</label>
            {props.userdataphone }
            </div>
          
             </div>
             </div>
             <button className="btn4" onClick={()=>setSign(true)}>Edit Profile</button>
             <button className="btn5" onClick={()=>setLogout(true)}>Logout</button>
             </div>
    )
}
export default Userprofile;
