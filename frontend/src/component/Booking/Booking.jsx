import React, { useState } from 'react';
import './Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap"; 
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour; 
    const navigate = useNavigate(); 

    const [credentials, setCredentials] = useState({ 
        userId: 1, 
        userEmail: "example@gmail.com", 
        fullName: "",
        phone: "",
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = e => { 
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value })); // Fixed syntax
    };

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee); 

    // Send the data to the server
    const handleClick = e => {
        e.preventDefault(); 
        navigate("/thank-you");
    };

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between"> {/* Fixed class names */}
                <h3>${price} <span>/per person</span></h3>
                <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center">
                        <i className="ri-star-s-fill"></i>
                        {avgRating === 0 ? null : avgRating} ({reviews?.length})
                    </span>
                </div>
            </div>

            {/* Booking form start */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}> {/* Fixed onSubmit */}
                    <FormGroup>
                        <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} /> {/* Fixed onChange */}
                    </FormGroup>

                    <FormGroup>
                        <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} /> {/* Fixed onChange */}
                    </FormGroup>

                    <FormGroup className="d-flex align-items-center gap-3"> {/* Fixed className */}
                        <input type="date" placeholder="" id="bookAt" required onChange={handleChange} /> {/* Fixed id and onChange */}
                        <input type="number" placeholder="Guest" id="guestSize" required onChange={handleChange} /> {/* Fixed onChange */}
                    </FormGroup>
                </Form>
            </div>
            {/* Booking form end */}

            {/* Booking bottom */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0"> {/* Fixed ListGroupItem */}
                        <h5 className="d-flex align-items-center gap-1">${price} <i className="ri-class-line"></i> 1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 px-0"> {/* Fixed ListGroupItem */}
                        <h5>Service charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 px-0 total"> {/* Fixed ListGroupItem */}
                        <h5>Total</h5>
                        <span>${totalAmount}</span> {/* Fixed typo */}
                    </ListGroupItem>
                </ListGroup>
                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button> {/* Fixed Button */}
            </div>
        </div>
    );
};

export default Booking;