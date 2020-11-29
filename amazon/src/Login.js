import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css' 
function Login() {
    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
                
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>
                    <button className="login_signin">Sign-in</button>
                </form>

                <button className="login_signup">Create a new account</button>
            </div>

        </div>
    )
}

export default Login
