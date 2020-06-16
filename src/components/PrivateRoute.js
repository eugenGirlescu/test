import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouteCoumponent, ...rest }) => {
    const currentUser  = useContext(AuthContext);
    return (
        <Route {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteCoumponent {...routeProps} />)
                    :
                    (<Redirect to={'/login'} />)
            }
        />
    );
};

export default PrivateRoute;