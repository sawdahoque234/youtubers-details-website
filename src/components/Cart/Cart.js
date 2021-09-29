import React from 'react';

const Cart = (props) => {
    let { cart } = props;
    console.log(cart)
    let total = 0;
    for (const person of cart) {
        total = total + parseFloat(person.earn);
        
    }



    return (
        <div className="bg-primary bg-opacity-50 p-2">
            <h5>Added Channel List</h5>
            <h4>Total Channel:{props.cart.length}</h4>

            <h4>Total: ${total}</h4>
           <h5>Your Added list: {
                cart.map(person => <li>{person.name}</li>)
            }</h5>
        </div>
    );
};

export default Cart;