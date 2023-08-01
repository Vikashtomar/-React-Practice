 import React,{useContext} from 'react'
import { CountContext } from '../../App'
 

function FileA() {
   const {count,setCount} = useContext(CountContext);
  
  
   return (
     <div>

    <button onClick={(e)=> setCount(count+1)}>  Increment </button>

      <button onClick={(e)=>{setCount((count <= 0) ? 0 : count -1)}}> Decrement </button>
    
    


     </div>
   )
 }
 
 export default FileA