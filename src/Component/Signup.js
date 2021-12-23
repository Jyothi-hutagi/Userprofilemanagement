import React,{ useState} from "react";
import Signin from "./Signin";
import'../Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Signup() {
  
    const[isSubmit,setSubmit]=React.useState(false)
    const [signin,setSign]=useState(false)
    const [user,setUser]=useState({name:'',email:'',password:'',repassword:''})
    const inputHandler=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setUser({...user,[name]:value})
        console.log(user.email)
    }
      
    if(signin){
        return <Signin/>

    }

    if (isSubmit){
        return <Signin/>
    }
  
   
    return (
      <div className="App">
       <h1 className="form-header">Signup Form</h1>
       <form className="container">
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
          <input type='password' id="password" className="form-control"name="password" placeholder="Enter password"  onChange={inputHandler} required/>
           </div>
           <div className="form-group">
           <label className="form-label"> Confirm Password</label>
           <input type='password' id="password-confirm" className="form-control"name="repassword"placeholder="re-confirm your password"onChange={inputHandler}required/>
           </div>

           <div className="btn1">
           <input  type="submit" onClick={()=>setSubmit(true)}  id="btn"/>
           </div>
           <div className="btn2">
            <h5> Already have account? <button className="btn btn-link" onClick={()=>setSign(true)}>Signin</button></h5>
           </div>
     </form>
     </div>
    );
  }
  
  export default Signup;
 