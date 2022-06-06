import React from 'react';
import { Link } from "react-router-dom";
const SignUpPage = () => {
    
    return (
        <div>
            <h1 className="form__title">Create Account</h1>
            <form className="form" id="createAccount">
                <div className="form__message form__message--error"></div>
                <div className="form__input-group">
                    <label htmlFor="username">Name</label>
                    <input type="text" className="form__input" id="signupUsername" autoFocus placeholder="Enter your name"/>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form__input" placeholder="Enter your email address"/>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="password" className="form__input" id="signupPassword" placeholder="Enter your phone number"/>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form__input" id="confirmPassword" placeholder="Create your password"/>
                    <div className="form__input-error-message"></div>
                </div>
                <button className="form__button" type="submit">Sign Up</button>
            </form>
            <p className="form__text">
                <Link to = "./LoginPage" className="form__link" id="linkLogin">Already have an account? <span className ="first_cta_gp">Sign in</span></Link>   
            </p>
        </div>
    );
}
 
export default SignUpPage;