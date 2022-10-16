import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { post_api_call } from "../services/ApiServices";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


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
    const dispatch = useDispatch();
    const authToken = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null;
    async function getLoggedInUserData() {
        const result = await post_api_call('/api/v1/fetch-profile', {});
        console.log('logged in user --', result)
        dispatch({
            type: "setLoggedInUserData",
            payload: result?.response
        });
    }
    React.useEffect(() => {
        getLoggedInUserData();
    }, [])

    return (
        <>
            {authToken !== null ? _pass(authToken) : _login()}
        </>
    )
}

export default ProtectRoutes
