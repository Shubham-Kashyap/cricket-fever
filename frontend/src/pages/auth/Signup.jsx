import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post_api_call } from '../../services/ApiServices';
// import { useAlert } from 'react-alert';

const Signup = () => {
    /**
     * ----------------------------------------------------------------
     * state variables
     * ----------------------------------------------------------------
     */
    // const alert = useAlert();
    const navigate = useNavigate();
    const [checkbox, setCheckbox] = useState('fade');
    const [userInput, setUserInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
    });
    /**
     * ----------------------------------------------------------------
     * custom functions
     * ----------------------------------------------------------------
     */
    const onInputChange = (e) => {
        // console.log(e.target.elements.email.name);
        const targetElement = e.target.name;
        const targetElementValue = e.target.value;

        setUserInputData({
            ...userInput, [targetElement]: targetElementValue //  to add the data to the previous values
        });
        // setUserInputData({
        //     [targetElement]: targetElementValue // to update the value
        // });
        // console.log(userInput)
    }
    const register = async (e) => {
        e.preventDefault();
        // onInputChange(e);
        console.log('register ', userInput)
        const data = await post_api_call('/api/v1/signup', {
            name: `${userInput.firstName} ${userInput.lastName}`,
            email: `${userInput.email}`,
            country_code: 91,
            phone_no: parseInt(`${userInput.phoneNumber}`),
            password: `${userInput.password}`
        })
        // console.log(data.response);
        if (data.status === false) {
            // alert.error(data.message);
        } else {
            alert.success('Sign up successful !');
            navigate('/login');
        }

    }

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
            {/* <!--  begin #page-container --> */}
            <div id="page-container" className="show">
                {/* <!--  begin register --> */}
                <div className="register register-with-news-feed">
                    {/* <!--  begin news-feed --> */}
                    <div className="news-feed">
                        {/* <div className="news-image" style={{ backgroundImage: " url('/assets/img/login-bg/login-bg-9.jpg')" }}></div> */}
                        <div className="news-image" style={{ backgroundImage: " url('https://media.istockphoto.com/vectors/digital-communication-technical-support-concept-vector-id1264232949?k=20&m=1264232949&s=612x612&w=0&h=oeH9JtEE1XWrgd25nqmImissgP4VlNjaxsrCh4SwCX4=')" }}></div>
                        <div className="news-caption">
                            <h4 className="caption-title"><b>React</b> Application</h4>
                            <p>
                                As a Cricket Fever application , watch lis of matches , see details and much more.
                            </p>
                        </div>
                    </div>
                    {/* <!--  end news-feed --> */}
                    {/* <!--  begin right-content --> */}
                    <div className="right-content">
                        {/* <!--  begin register-header --> */}

                        <h1 className="register-header">
                            Sign Up
                            <small>Sign up with the Cricket Fever. It’s free and always will be.</small>
                        </h1>
                        {/* <!--  end register-header --> */}
                        {/* <!--  begin register-content --> */}
                        <div className="register-content">
                            <form action="index.html" method="GET" className="margin-bottom-0" onSubmit={register}>
                                <label className="control-label">Name <span className="text-danger">*</span></label>
                                <div className="row row-space-10">
                                    <div className="col-md-6 m-b-15">
                                        <input type="text" className="form-control" placeholder="First name" name="firstName" required value={userInput.firstName} onChange={onInputChange} />
                                    </div>
                                    <div className="col-md-6 m-b-15">
                                        <input type="text" className="form-control" placeholder="Last name" name="lastName" required value={userInput.lastName} onChange={onInputChange} />
                                    </div>
                                </div>
                                <label className="control-label">Email <span className="text-danger">*</span></label>
                                <div className="row m-b-15">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Email address" name="email" required value={userInput.email} onChange={onInputChange} />
                                    </div>
                                </div>
                                <label className="control-label">Phone number <span className="text-danger">*</span></label>
                                <div className="row m-b-15">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Enter phone number" name="phoneNumber" required value={userInput.phoneNumber} onChange={onInputChange} />
                                    </div>
                                </div>
                                <label className="control-label">Password <span className="text-danger">*</span></label>
                                <div className="row m-b-15">
                                    <div className="col-md-12">
                                        <input type="password" className="form-control" name="password" placeholder="Password" required value={userInput.password} onChange={onInputChange} />
                                    </div>
                                </div>
                                <div className="checkbox checkbox-css m-b-30">
                                    <div className="checkbox checkbox-css m-b-30">
                                        <input type="checkbox" name="agreementCheckbox" id="agreement_checkbox" value="" required onClick={(e) => { e.target.checked ? setCheckbox('show') : setCheckbox('fade') }} />
                                        {/* <label htmlFor="agreement_checkbox">
                                            By clicking Sign Up, you agree to our <a href="#javascript:;">Terms</a> and that you have read our <a href="#javascript:;">Data Policy</a>, including our <a href="#javascript:;">Cookie Use</a>.
                                        </label> */}
                                        <label htmlFor="agreement_checkbox">
                                            By clicking Sign Up, you are ready to get set go.

                                        </label>
                                    </div>
                                </div>
                                <div className={`register-buttons ${checkbox}`}>
                                    <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
                                </div>
                                <div className="m-t-30 m-b-30 p-b-30">
                                    Already a member? Click <a href="/login">here</a> to login.
                                </div>
                                <hr />
                                <p className="text-center mb-0">
                                    &copy; Cricket Fever All Right Reserved {new Date().getFullYear()}
                                </p>
                            </form>
                        </div>
                        {/* <!--  end register-content --> */}
                    </div>
                    {/* <!--  end right-content --> */}
                </div>
                {/* <!--  end register --> */}



                {/* <!--  begin scroll to top btn --> */}
                <a href="#javascript:;" className="btn btn-icon btn-circle btn-primary btn-scroll-to-top fade" data-click="scroll-top"><i className="fa fa-angle-up"></i></a>
                {/* <!--  end scroll to top btn --> */}
            </div>
            {/* <!--  end page container --> */}
        </>
    );
};

export default Signup;