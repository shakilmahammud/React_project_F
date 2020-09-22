import React from 'react'
import './Login.css'
import Button from '@material-ui/core'

function Login() {
    const signIn=()=>{
        
    }
    return (
        <div className="login">
            <div className="login_logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png" alt=""/>

            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
               Sign In
            </Button>
            
        </div>
    )
}

export default Login
