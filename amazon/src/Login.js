import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';

import './Login.css' 
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const signIn =(e)=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((user)=>{
            console.log(user)
            if(user){
                history.push('/')
            }
        }).catch(error => alert(error.message))
         
    }
    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }

        })
        .catch(error => alert(error.message))

        }
    
    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
                
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button className="login_signin" onClick={signIn} type='submit'>Sign-in</button>
                </form>

                <button className="login_signup" onClick={register}>Create a new account</button>
            </div>

        </div>
    )
}

export default Login
