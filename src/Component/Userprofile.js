import React,{ useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../userprofile.css';
import Userdetails from "./Userdetails";
function Userprofile(props){
    const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [signin,setSign]=useState(false)
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  if(signin){
    return <Userdetails/>

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
           borderRadius:"30px"
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
            {props. userdatadate}
            </div>
            <div className="card-body">
            <label>Email: &nbsp;</label>
            {props.userdataemail }
            </div>
            <div className="card-body">
            <label>Phoneno: &nbsp;</label>
            {props. userdataphone }
            </div>
          
             </div>
             </div>
             <button className="btn4" onClick={()=>setSign(true)}>Edit Profile</button>
             </div>
    )
}
export default Userprofile;
