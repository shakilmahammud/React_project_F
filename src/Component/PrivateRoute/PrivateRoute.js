import React, { useContext } from 'react'
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom'
import {userContext} from '../../App'

function PrivateRoute({ children, ...rest }) {
    const location =useLocation();
    const [loggedIn,setLoggedIn]=useContext(userContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
               location 
            }}
          />
        )
      }
    />
    )
}

export default PrivateRoute
