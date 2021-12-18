import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://arcane-beyond-14507.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            <h2 className="text-danger mt-4">New Booking Offers</h2>
            <div className="services">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;