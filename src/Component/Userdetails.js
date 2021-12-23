import React,{ useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Userprofile from "./Userprofile";
import '../Userdetails.css';
function Userdetails(){
   
     const [signin,setSign]=useState(false)
    
     if(signin){
        console.log(signin)
        return <Userprofile/>

    }

    const[save,setSave]=React.useState(false);
    const[userdata,setUserdata]=React.useState({name:'',address:'',date:'',email:'',phone:''})


     if(save){
         return <Userprofile userdataname={userdata.name} userdataaddress={userdata.address} userdatadate={userdata.date} userdataemail={userdata.email} userdataphone={userdata.phone} />
     }
     const inputHandlerr=(e)=>{
         e.preventDefault()
         const{name,value}=e.target
         setUserdata({...userdata,[name]:value})
         console.log('userdata',userdata.name)
     }
     
    return(
        <div className="page-header">
        <h1> Edit Profile</h1>
        <form>
          
            <div className="container2">
            <div className="form-group">
            <label className="form-label">Name</label>
            <input type='text' className="form-control" name="name" onChange={inputHandlerr}required />
            </div>
            <div className="form-group">
            <label className="form-label"> Address</label>
            <textarea name="address" className="form-control" rows={4} cols={4} onChange={inputHandlerr}required></textarea>
            </div>
            <div className="form-group">
            <label className="form-label">Date of Birth</label>
            <input type='date' className="form-control" name="date"onChange={inputHandlerr}required/>
            </div>
            <div className="form-group">
            <label className="form-label">Email</label>
            <input type='text' className="form-control" name="email" onChange={inputHandlerr} required/>
            </div>
            <div className="form-group">
            <label className="form-label">Phoneno</label>
            <input type='phone' className="form-control" name="phone" onChange={inputHandlerr}required />
            </div>
             <div className="btn3">
            <button className="btn-success" onClick={()=>setSave(true)}>Save</button>
            </div>
            </div>
       

        </form>
        </div>
    )
}
export default Userdetails;