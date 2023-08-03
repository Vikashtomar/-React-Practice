 import React,{useContext} from 'react'
import { globalContext } from './App'

 
 function Header() {
  const  {cart} = useContext(globalContext);
  
   return (
     <div>

      <h1>
        {cart.length}
      </h1>
     </div>
   )
 }
 
 export default Header