import React from 'react';
import "./Service.css";
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const {id, name, cost, categori, img, description } = service; 
    return (
        <div className="service pb-2">
            <img src={img} alt="" />
            <h4>Travel Spot Id: 10{id}</h4>
            <h3 className="text-primary">Place Name: {name}</h3>
            <h5>Booking Fee: {cost}</h5>
            <h4>Category: {categori}</h4>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-warning my-3">Book {name} Trip</button>
            </Link>
        </div>
    );
};

export default Service;