import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from "../pages/common/Navbar";
import Sidebar from "../pages/common/Sidebar";
import { useDispatch } from "react-redux";
import { post_api_call } from '../services/ApiServices';


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
    async function getLoggedInUserData() {
        const res = await post_api_call('/api/v1/fetch-profile');
        console.log('sjdasjkdas dskadna --s', res)
        dispatch({
            type: "setLoggedInUserData",
            payload: res?.response
        });
    }
    useEffect(() => {
        getLoggedInUserData();

    }, [])
    const auth = localStorage.getItem('authtoken') ? localStorage.getItem('authtoken') : null; // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    return auth ? _pass(auth) : _login();
}

export default ProtectRoutes;
