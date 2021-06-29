import React from "react";
import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line
function ProtectedDipendente({ isAuth: isAuth, isEmployee: isEmployee, component: Component, ...rest }) {

    return ( 
        <Route 
        {...rest }
        render = { (props) => {
                    // eslint-disable-next-line
                if (isAuth != null && isEmployee == "HAsgA5NoVC") {
                    return <Component/>;
                    
                } else {
                    return ( 

                    <Redirect to = {{ pathname: "/", state: { from: props.location } } } />
                    );
                 }       
             }}
        />
    );
} 
export default ProtectedDipendente;