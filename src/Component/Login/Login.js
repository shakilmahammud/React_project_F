import React, { useContext, useState } from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from '../Firebase/Firebase';
// import { useStateValue } from '../StateProvider/StateProvider';
// import { actionType } from '../StateProvider/reducer';
import {userContext} from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
import GTranslateIcon from '@material-ui/icons/GTranslate';

function Login() {
    // const [state,dispatch]=useStateValue()
    const [loggedIn,setLoggedIn]=useContext(userContext);
    const location=useLocation().location?.pathname
    const  history=useHistory();
    const [user, setUser] =useState(
        {
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmationPassword:'',
    });
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(res=>{
            const {displayName, email} = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            }
            setUser(signedInUser);
            setLoggedIn(signedInUser);
            history.replace(location || '/')
        })
        .catch(error=>alert(error.message))
    }
        
    return (
        <div className="login">
            <div className="login_logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png" alt="" className="img"/>

            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
              <GTranslateIcon/> Sign In With Google </Button>
            
        </div>
    )
}

export default Login;
