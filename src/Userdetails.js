import React,{ useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from './firebase'
import Userprofile from "./Userprofile";
import { auth } from './firebase';
import { updateDoc,doc } from "firebase/firestore/lite";
import { onAuthStateChanged } from "firebase/auth";
import './Userdetails.css';
function Userdetails(){
    const[save,setSave]=React.useState(false);
    const[userdata,setUserdata]=React.useState({name:'',address:'',date:'',email:'',phone:''})
    const[currentUser, setcurrentuser] = React.useState()
    // console.log("props.currentUser.uid",props.currentUser)


    onAuthStateChanged(auth,(user)=>{
        //console.log('users',user)
        setcurrentuser(user)
        // console.log("currentUser",currentUser)
      })

     if(save){
         return <Userprofile userdataname={userdata.name} userdataaddress={userdata.address} userdatadate={userdata.date} userdataemail={userdata.email} userdataphone={userdata.phone} />
     }
     const inputHandlerr=(e)=>{
         e.preventDefault()
         const{name,value}=e.target
         setUserdata({...userdata,[name]:value})
        //  console.log('userdata',userdata.name)
     }
        

        const datastore  =async(e)=>{

        e.preventDefault();
        try{
            console.log("props.currentUser.uid",currentUser.uid)
        await updateDoc(doc(db, "users",currentUser.uid),
        {
            name: userdata.name,
            address: userdata.address,
            date: userdata.date,
            email: userdata.email,
            phone:userdata.phone
             })
             setSave(true)
      }catch(error){
          alert(error);
      
      }   
    }
    return(
        <div className="page-header">
        <h1 className="heading"> Edit Profile</h1>
        <form>
          
            <div className="container2">
            <div className="form-group">
            <label className="form-label">Name</label>
            <input type='text' className="form-control" name="name" onChange={inputHandlerr} required />
            </div>
            <div className="form-group">
            <label className="form-label"> Address</label>
            <textarea name="address" className="form-control" maxLength={50} onChange={inputHandlerr} required></textarea>
            </div>
            <div className="form-group">
            <label className="form-label">Date of Birth</label>
            <input type='date' className="form-control" name="date"onChange={inputHandlerr} required/>
            </div>
            <div className="form-group">
            <label className="form-label">Email</label>
            <input type='text' className="form-control" name="email" onChange={inputHandlerr} required/>
            </div>
            <div className="form-group">
            <label className="form-label">Phoneno</label>
            <input type='phone' className="form-control" name="phone" onChange={inputHandlerr} required />
            </div>
             <div className="btn3">
            <button className="btn-success" onClick={datastore}>Save</button>
            </div>
            </div>
            </form>
        </div>
    )
}
export default Userdetails;