import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../src/Images/notfound.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={notfound} alt="" /><br />
            <Link to='/home'>
            <button className="btn-primary">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;