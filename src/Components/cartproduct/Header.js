import React from 'react';
import { useContext } from 'react';
import { globaldata } from './App';

function Header() {
    const {cart,cost} = useContext(globaldata)
    
    
  return (
    <div className='head'>
        
        <h1>
            Shoping Cart
        </h1>
        <p className='price'>
           Total Item: {cart.length}
        </p>
        <p>
            Total cost: {cost}
        </p>
    </div>
  )
}

export default Header