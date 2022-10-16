import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';





const _login = (authToken) => {
    return (
        <>
            <Navigate to="/login" />
        </>
    );
}
const _pass = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
        </>
    );
}

const ProtectRoutes = () => {
    React.useEffect(() => {

    }, [])

    return (
        <div>

        </div>
    )
}

export default ProtectRoutes
