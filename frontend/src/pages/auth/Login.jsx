import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { post_api_call } from '../../services/ApiServices';

const Login = () => {
    /**
     * ----------------------------------------------------------------
     * State valiables 
     * ----------------------------------------------------------------
     */
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertContent, setAlertContent] = useState({});
    const navigate = useNavigate();
    /**
     * ----------------------------------------------------------------
     * user Login 
     * ----------------------------------------------------------------
     */
    async function login(e) {
        e.preventDefault();
        const _request = {
            username: username,
            password: password
        };
        if (username === "" || password === "") {
            setAlertContent({
                class: 'text-danger',
                content: "Request params cannot be empty !"
            });
            console.log("Request params cannot be empty !");
            return false;
        }

        const response = await post_api_call('/api/v1/login', _request);
        console.log(response);
        if (response && response.status === true) {
            localStorage.setItem('authtoken', response.response.token.personal_access_token);
            console.log('current authtoken ', localStorage.getItem('authtoken'));
            console.log('navigate to dashboard')
            dispatch({
                type: 'updateLoggedInUserData',
                payload: response.response,
            })
            navigate('/home');
        }
        else if (response && response.status === false) {
            setAlertContent({
                class: 'text-danger',
                content: response.message
            });
            navigate('/login');
        }


    }


    const authtoken = localStorage.getItem('authtoken')
    if (authtoken) {
        navigate('/home');
    }


    const clickHere = () => {
        navigate('/register');
    }


    console.log({ username: username, password: password });
    // console.log(post_api_call)

    /**
     * ----------------------------------------------------------------
     * Use Effect
     * ----------------------------------------------------------------
     */
    useEffect(() => {
        let auth = localStorage.getItem("authtoken");
        if (auth) {
            navigate("/dashboard");
        }
    }, []);
    return (
        <>

            {/* <!-- begin login-cover --> */}
            <div className="login-cover">
                <div className="login-cover-image" style={{
                    // background: 'black',
                    backgroundImage: `url('/assets/img/login-bg/login-bg-17.jpg')`
                }} data-id="login-cover-image"></div>
                <div className="login-cover-bg"></div>
            </div>
            {/* <!-- end login-cover --> */}

            {/* <!-- begin #page-container --> */}
            <div id="page-container" className="show" >
                {/* <!-- begin login --> */}
                {/* <div className="login login-v2" data-pageload-addclassName="animated fadeIn"> */}
                <div className="login login-v2" >
                    {/* <!-- begin brand --> */}
                    <div className="login-header">
                        <div className="brand">
                            <span className="logo"><i className="ion-ios-cloud"></i></span> <b>Admin</b> Login
                            <small className={alertContent !== {} ? alertContent.class : ''}>{alertContent === {} ? "Please enter credentials to login" : alertContent.content} </small>
                        </div>
                        <div className="icon">
                            <i className="fa fa-lock"></i>
                        </div>
                    </div>
                    {/* <!-- end brand --> */}
                    {/* <!-- begin login-content --> */}
                    <div className="login-content">
                        <form className="margin-bottom-0">
                            <div className="form-group m-b-20">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Email Address"
                                    onChange={(e) => setUsername(
                                        e.target.value
                                    )}
                                    required />
                            </div>
                            <div className="form-group m-b-20">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(
                                        e.target.value
                                    )}
                                    required />
                            </div>

                            <div className="login-buttons">
                                <button
                                    type="submit"
                                    className="btn btn-success btn-block btn-lg"
                                    onClick={(e) =>
                                        login(e)

                                    }
                                >Sign me in</button>
                            </div>
                            <div className="m-t-20">
                                Not registered yet? Click <a style={{ cursor: "pointer" }} onClick={clickHere}>here</a> to register.
                            </div>
                        </form>
                    </div>
                    {/* <!-- end login-content --> */}
                </div>
                {/* <!-- end login --> */}


            </div>
        </>
    );
}

export default Login;
