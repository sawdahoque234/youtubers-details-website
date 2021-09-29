import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Person.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Person = (props) => {
    const {name, img,age, key,subscriber,country,earn}=props.person

    return (
            
        <div className="col-3 m-4 rounded-3 mb-2 p-3 bg-secondary  text-white">
            <div>
            <img src={img} alt="" />
            </div>
            <div class="p">
            <h5 className="text-white py-2">{name}</h5>
            <p><small>Age: {age}</small></p>
                <p>Country: {country}</p>
                <p>Subscriber: {subscriber}</p>
                <p>Earn: ${earn}</p>

                <button onClick={()=>props.addtocart(props.person)}
                    className="button btn-danger"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
        // *****
       
        
    );
};

export default Person;