import React,{ useState} from "react";
import Signin from "./Signin";
import'../Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Signup() {
     const[isError,setIsError]=useState("");
     const[password,setPassword]=useState("");
     const[confirmPassword,setConfirmPassword]=useState("");
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
    const checkValidation=(e)=>{
        const confirmPassword=e.target.value;
        setConfirmPassword(confirmPassword);
        if(password!=confirmPassword){
            setIsError("Password did-not match");
        } else
        {
            setIsError('');
        }
    };
  
   
    return (
      <div className="App">
       <h1 className="form-header">Signup Form</h1>
       <div style={{position:"absolute" ,top:600,marginLeft:660 ,fontSize:20,}}>
           {isError}
       </div>
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
          <input type='password' value={password} className="form-control"name="password" placeholder="Enter password"  onChange={(e)=>setPassword(e.target.value)} required/>
           </div>
           <div className="form-group">
           <label className="form-label"> Confirm Password</label>
           <input type='password' value={confirmPassword} className="form-control"name="repassword"placeholder="Confirm your password"onChange={(e)=>checkValidation(e)}required/>
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
 