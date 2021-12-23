import React from 'react'
import'./App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Signup from "./Component/Signup";
import Signin from './Component/Signin';
import Userdetails from './Component/Userdetails';
import Userprofile from './Component/Userprofile';
function App() {
  return (
    <div className="App">
    <Router>
     <Switch>
     <Route path={"/"} exact component={Signup}>
         <Signup/>
       </Route>
       <Route path={"./Component/Signin.js"} exact component={Signin}>
         <Signin/>
       </Route>
       <Route path={"./Component/Userdetails.js"} exact component={Userdetails}>
         <Userdetails/>
       </Route>
       <Route path={"./Component/Userprofile.js"} exact component={Userprofile}>
         <Userprofile/>
       </Route>
       

     </Switch>
    </Router>
    </div>
  );
}

export default App;
