import React,{useState} from "react";
import Userdetails from "./Userdetails";
import'../Signin.css';


function Signin() {
    const[isSubmit,setSubmit]=React.useState(false)
    const [user,setUser]=useState({name:'',email:'',password:''})
   
    
    
    const inputHandler=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }

    

    if (isSubmit){
        return <Userdetails/>
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setSubmit(true)
    }

   
    return (
      <div className="App">
       <h1>Signin Form</h1>
       
       <form className="container1"onSubmit={submitHandler}>
              <div className="form-group">
              <label className="form-label">Username</label>
              <input type='text' id="name" className="form-control" name="name"placeholder="Enter your username" onChange={inputHandler} required/>
               </div>
         
                <div className="form-group"> 
                <label className="form-label"> Email</label>
                <input type='email' id="email" className="form-control" name="email" placeholder="Enter your email" onChange={inputHandler} required/>
                </div>
          <div className="form-group">
          <label className="form-label"> Password</label>
          <input type='password' id="password" className="form-control"name="password" placeholder="Enter password"  onChange={inputHandler} required/>
           </div> 
           <div className="form-group">
           <input  type="submit" onClick={()=>setSubmit} id="btn" className="btn-success"/>
        </div>
        </form>
     
     </div>
    );
    }
  
  export default Signin;