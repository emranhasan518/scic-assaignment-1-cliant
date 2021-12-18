import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router';
import './Booking.css'

const Booking = () => {
    const {serviceId} = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    // console.log(serviceDetails)

    useEffect(()=>{
        fetch('https://arcane-beyond-14507.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceDetails(data))

    },[])

    const abc = serviceDetails.filter(service => service.id == serviceId);
    // console.log(abc[0])

    return (
        <div className="booking">
            <div class="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="details mx-5 justify-content-center">
                     
                        <img className="mt-3" style={{width:'40%', borderRadius:'10px'}} src={abc[0]?.img} />
                        <h2 className="text-primary">{abc[0]?.name}</h2>
                        <h2 className="text-danger">Categori: {abc[0]?.categori}</h2>
                        <h3>Total Tour Fee: {abc[0]?.cost}</h3>
                    </div>
                </div>

            </div>

            <Link to='/placeorder'>
            <button className="btn btn-primary">Procced To Confirm Booking</button>
            </Link>
        </div>
    );
};

export default Booking;