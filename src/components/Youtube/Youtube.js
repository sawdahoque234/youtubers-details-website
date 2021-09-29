import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Cart from '../Cart/Cart';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';




const Youtube = () => {
        const [person, setPerson] = useState([])
        const [cart, setCart] = useState([]);
    
        useEffect(() => {
            fetch('./persons.JSON')
                .then(res => res.json())
                .then(data => setPerson(data));
             
        }, [])
    
        const addtocart = (person) => {
            const newCart = [...cart, person]
            setCart(newCart);
        }
    return (
        <div className="container row">
            <div className="col-9">

                <div className=" row">

                    {
                    person.map(person => <Person 
                        key={person.key}
                        person={person }
                        addtocart={addtocart}
                    >
                        
                    </Person>)
                }
                </div>
            </div>
            
            <div className="col-3">
                <Cart cart={cart}></Cart>
            </div>
    
        </div>
    );
           
    
};

export default Youtube;