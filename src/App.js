import React from 'react'
import'./App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Signup from "./Signup";
import Signin from './Signin';
import Userdetails from './Userdetails';
import Userprofile from './Userprofile';
function App() {
  return (
    <div className="App">
    <Router>
     <Switch>
     <Route path={"/"} exact component={Signup}>
         <Signup/>
       </Route>
       <Route path={"./Signin.js"} exact component={Signin}>
         <Signin/>
       </Route>
       <Route path={"./Userdetails.js"} exact component={Userdetails}>
         <Userdetails/>
       </Route>
       <Route path={"./Userprofile.js"} exact component={Userprofile}>
         <Userprofile/>
       </Route>
       

     </Switch>
    </Router>
    </div>
  );
}

export default App;
