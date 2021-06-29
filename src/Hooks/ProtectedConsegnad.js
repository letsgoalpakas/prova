import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line
function ProtectedConsegnad({ isAuth: isAuth, isEmployee: isEmployee, component: Component, ...rest }) {
    
    return ( 
        <Route 
        {...rest }
        render = { (props) => {
                    // eslint-disable-next-line
                if (isAuth != null && isEmployee == "HAsgA5NoVC") {
                    return <Component/>;
                    
                } else {
                    return ( 

                    <Redirect to = {{ pathname: "/main", state: { from: props.location } } } />
                    );
                 }       
             }}
        />
    );
} 
export default ProtectedConsegnad;