import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {users} = useAuth();
    return (
        <div className="placeOrder">
            <h2>Place Oder</h2>
            <form>
                <input defaultValue={users.displayName} type="text" placeholder="Name"/><br />
                <input defaultValue={users.email} type="email" placeholder="Email"/><br />
                <input type="text" placeholder="Address"/><br />
                <input type="phone" placeholder="Phone"/><br />
                <input type="text" placeholder="City" /><br />
                <input className="mb-5 my-2" type="submit" value="Place Order" /><br />
            </form>
        </div>
    );
};

export default PlaceOrder;