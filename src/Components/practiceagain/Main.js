 import React, { useContext } from 'react'
import { globalState } from './App'
 
 function Main() {

    const {cart,setCart,cost,setCost} = useContext(globalState)

    const products = [
        {name:"Item 1",des:"This is item 1", price:100},
        {name:"Item 2",des:"This is item 2", price:200},
        {name:"Item 3",des:"This is item 3", price:300}
    ]


    function handleClick(e,value){
        e.preventDefault()
        setCart([...cart,value])
        setCost(cost + value.price)
    }
   return (
     <div>

    {products.map((value)=>{
        return(
            <>
            <h1>
                {value.name}
            </h1>
          <h3>
            {value.des}
          </h3>
            <h3>
                {value.price}
            </h3>
            
            <button onClick={(e)=> handleClick(e,value)}>Add to Cart</button>
            

            </>
        )
    })}


     </div>
   )
 }
 
 export default Main