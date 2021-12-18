import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Loginn = () => {
    const {signInUsingGoogle, } = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();
    

    const handleGoogleLogIn =() =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
        
    }

    return (
        <div className="login">
            <h2>Please Log in</h2>
            <button onClick={handleGoogleLogIn} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Loginn;