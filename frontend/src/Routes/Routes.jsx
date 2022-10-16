import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import ProtectRoutes from "./ProtectRoutes";
import Home from "../pages/other/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

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
        <>
            <BrowserRouter>
                <RouterRoutes>

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />



                    {/* protected routes start  */}
                    <Route element={<ProtectRoutes />}>
                        <Route path="/dashboard" element={<Home />} />

                    </Route>
                    {/* protected routes end  */}
                </RouterRoutes>
            </BrowserRouter>
        </>
    )
}

export default Routes
