import React from "react";
import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line
function ProtectedTassista({ isAuth: isAuth, isEmployee: isEmployee, component: Component, ...rest }) {

    return ( 

        <Route 
        {...rest }
        render = { (props) => {
                    // eslint-disable-next-line
                if (isAuth != null && isEmployee == "QaWScfwXQk") {
                    return <Component/>;
                    
                } else {
                    return ( 
                    <Redirect to = {{ pathname: "/maindip", state: { from: props.location } } } />
                    );
                 }       
             }}/>
             
    );
} 
export default ProtectedTassista;