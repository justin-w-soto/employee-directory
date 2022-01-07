import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
    const user = useUser();
    return (
        <div>
               <Route {...rest} render={( privateRouteProps ) => 
            user ? children : <Redirect to={{pathname:'/login', 
            state: { from: privateRouteProps.location } }} /> } />
        </div>
    )
}
