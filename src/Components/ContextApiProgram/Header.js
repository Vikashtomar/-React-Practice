 import React,{useContext} from 'react'
import { globalContext } from './App'
import './Product.css'

 
 function Header() {
  const  {cart} = useContext(globalContext);
  
   return (
     <div className='head'>

      <h1>
        <p>This is cart length</p>
        {cart.length}
      </h1>
     </div>
   )
 }
 
 export default Header