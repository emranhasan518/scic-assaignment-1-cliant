import React from 'react';
import { Carousel } from 'react-bootstrap';
import coxsazar from '../../../Images/coxsbazar.jpg';
import sajek from '../../../Images/sajek.jpg';
import stmartin from '../../../Images/stmartin.jpg';

const Carosol = () => {
    return (
        <>   
            <h2 className="text-warning my-3">Our Upcoming Budget Trip</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={coxsazar}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Cox's Bazar</h3>
                    <p>tk-2999 only</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={sajek}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Sajek</h3>
                    <p>Tk-3999 only</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={stmartin}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Saintmartin</h3>
                    <p>tk-4999 only</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Carosol;