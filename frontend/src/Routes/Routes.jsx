import React from 'react';
import { BrowserRouter, Route, Outlet, Routes as RouterRoutes } from "react-router-dom";

const Routes = () => {
    /**
    * ----------------------------------------------------------------
    * State variables 
    * ----------------------------------------------------------------
    */
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    /**
     * ----------------------------------------------------------------
     * Load authenticated user
     * ----------------------------------------------------------------
     */
    const loadUser = () => {
        const token = localStorage.getItem("authtoken");
        if (token) {
            console.log('load user', token);
            setIsAuthenticated(true);
        } else {
            console.log('ohh fuck none was logged in ');
        }

    }
    React.useEffect(() => {
        loadUser();

    }, []);

    return (
        <div>

        </div>
    )
}

export default Routes
