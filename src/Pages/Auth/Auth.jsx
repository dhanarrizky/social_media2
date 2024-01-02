import React from "react";
import './Auth.css';

const Auth = (promp) => {
    if(promp.auth === 'login'){
        console.log(promp.auth)
    } else {
        console.log(promp.auth)
    }

    const RegistForm = (
        <div className="form-regist">
            <div>
                <input type="password" placeholder="Enter Your Confirm password"/>
            </div>
            <div>
                <input type="email" placeholder="Enter Your Email Address"/>
            </div>
        </div>
    );

    return (
        <div className="auth">
            <div className="auth-card">
                <h1>{promp.auth}</h1>
                <form action="#">
                    <div>
                        <input type="text" placeholder="Enter Your Username"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Enter Your password"/>
                    </div>
                    {promp.auth === 'login' ? <></>:RegistForm}
                    <button>{promp.auth}</button>
                </form>
            </div>
        </div>
    )
}

export default Auth;