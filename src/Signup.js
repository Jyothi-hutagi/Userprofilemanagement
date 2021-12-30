import React,{ useState} from "react";
import Signin from "./Signin";
import {db} from './firebase'
import { auth, } from './firebase';
import{createUserWithEmailAndPassword} from "firebase/auth";
import'./Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userprofile from "./Userprofile";
import { setDoc,doc } from "firebase/firestore/lite";
function Signup() {
    const[Submit,setSubmit]=React.useState(false)
    const[click ,setClick]=React.useState(false)
    const [user,setUser]= React.useState({name:'',email:'',password:''})
   
    if (Submit){
        return <Signin/>
      }
  
      if (click){
          return <Userprofile/>
      }
      
    const inputHandler=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }
      const enterdetails=async(e)=>{
      e.preventDefault();
      console.log("enter details")
      try{
        const userAuth =await createUserWithEmailAndPassword(auth,user.email,user.password,user.name)
      console.log('user here',userAuth)
      await setDoc(doc(db,"users",userAuth.user.uid),{
           name: user.name,
           email: user.email
      })
      setSubmit(true)
      }catch(error){
          alert(error.message)
      }

    } 

    return (
      <div className="App">
       <h1 className="form-header">Signup Form</h1>
       <form className="container" onSubmit={enterdetails}>
          <div className="form-group">
              <label className="form-label"> Username</label>
          <input type='text' id="name" className="form-control" name="name"placeholder="Enter your username" onChange={inputHandler} required/>
          
          </div>
          <div className="form-group"> 
          <label className="form-label"> Email</label>
          <input type='email' id="email" className="form-control" name="email" placeholder="Enter your email" onChange={inputHandler} required/>
          </div>
          <div className="form-group">
          <label className="form-label"> Password</label>
          <input type='password' className="form-control"name="password" placeholder="Enter password"  onChange={inputHandler} required/>
           </div>
           <div className="btn1">
           <button  type="submit" id="btn">Signup</button>
           </div>
           <div className="btn2">
            <h5> Already have account? <button className="btn btn-link" onClick={()=>setSubmit(true)}>Signin</button></h5>
           </div>
     </form>
     </div>
    );
  }
  
  export default Signup;
 