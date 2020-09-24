import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Feed from './Component/Feed/Feed';
import Widge from './Component/Widge/Widge';
import Login from './Component/Login/Login'
// import { useStateValue } from './Component/StateProvider/StateProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';




 export const userContext=createContext();
function App() {
  const [loggedIn,setLoggedIn]=useState();
  // const [{user},dispatch]=useStateValue();
  return (
    <userContext.Provider value={[loggedIn,setLoggedIn]}>
      <div className="app">
     <Router>
       <Switch>
         <Route path="/login">
         <Login/>
         </Route>
         <PrivateRoute path="/">
         <>
        <Header/>
        <div className="app_body">
          <Sidebar/>
          <Feed/>
          <Widge/>
        </div>
        </>
         </PrivateRoute>
       </Switch>
     </Router> 
    </div>
    </userContext.Provider>
  );
}

export default App;
