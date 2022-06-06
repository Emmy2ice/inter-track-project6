import React from 'react';
import { Link } from "react-router-dom";
const LoginPage = () => {
    return ( 
        <div className="container">
            <h1 className="form__title">Login</h1>
            <form className="form form--hidden" id="login">
                <div className="form__message form__message--error"></div>
                <div className="form__input-group">
                    <label htmlFor="email" className="label-login">Email address</label>
                    <input type="text" className="form__input" autoFocus placeholder="Enter your email address"/>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <label htmlFor="password" className="label-login">Password</label>
                    <input type="password" className="form__input" placeholder="Enter your password"/>
                    <div className="form__input-error-message"></div>
                </div>
                <button className="form__button" type="submit">Continue</button>
            </form>
            <p className="form__text">
                <Link to = "./" className="form__link" id="linkCreateAccount">Don't have an account? <span className="first_cta_gp">Sign up</span></Link>
            </p>  
        </div>
     );
}
 
export default LoginPage;