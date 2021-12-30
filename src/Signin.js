import React,{useState} from "react";
import Userprofile from "./Userprofile";
import { auth } from './firebase';
import{signInWithEmailAndPassword,sendPasswordResetEmail,onAuthStateChanged} from "firebase/auth";
import'./Signin.css';
 function Signin() {
    const[signIn,setSignin]=React.useState()
    const [userlogin,setUserlogin]=useState({email:'',password:''})
    const[currentUser, setcurrentuser] = React.useState()
      

    onAuthStateChanged(auth,(user)=>{
      //console.log('users',user)
      setcurrentuser(user)
      console.log("currentUser",currentUser)
    })

  
    if(signIn){

      return<Userprofile currentUser={currentUser.uid}/>
       
    }

    const inputHandler=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setUserlogin({...userlogin,[name]:value})
        console.log(userlogin)
    }

      const login= async(e)=>{
         e.preventDefault()
      
        try{
             const userAuth = await signInWithEmailAndPassword(auth,userlogin.email,userlogin.password)
                     console.log('users here',userAuth)
                     setSignin(true)
                  } catch(error){
                     alert('error logging in', error);
                 }
                
            
       }
     const resetPassword=async(e)=>{
       e.preventDefault()
       try{
         const restPass = await sendPasswordResetEmail(auth,userlogin.email)
         alert("Reset password mail has been sent to your mail");
       }catch(error){
         alert(error.message)
       }
       }
     
     return (
      <div className="App">
       <h1>Signin Form</h1>
       
       <form className="container1">
              <div className="form-group"> 
                <div className="form-group"> 
                <label className="form-label"> Email</label>
                <input type='email' id="email" className="form-control" name="email" placeholder="Enter your email" onChange={inputHandler} required/>
                </div>
          <div className="form-group">
          <label className="form-label"> Password</label>
          <input type='password' id="password" className="form-control"name="password" placeholder="Enter password"  onChange={inputHandler} required/>
           </div> 
           <div className="form-group">
           <button type="submit"  id="btn" className="btn-success" onClick={login}>Signin</button>
        </div>
        <div className="form-ggroup">
          <button className="btn btn-link" type="submit" onClick={resetPassword}>Forgot password</button>
        </div>
        </div>
        </form>
     
     </div>
    );
    }
  
  export default Signin;