 import React, { useContext } from 'react'
import { globalData } from './App'
 
 function Header() {
    const{cart} = useContext(globalData)
    const{cost} = useContext(globalData)
   return (
     <div className='head'>
        <h1>Shoping Cart:</h1>
        <h3>Total item: {cart.length} </h3>
        <h3>Total Cost : {cost} </h3>

     </div>
   )
 }
 
 export default Header