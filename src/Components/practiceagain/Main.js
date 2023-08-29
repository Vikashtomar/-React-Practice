 import React, { useContext } from 'react'
import { globalData } from './App'
 

 
 function Main() {

  const {cart,setCart} = useContext(globalData)
  const {cost,setCost} = useContext(globalData)
  const products = [
    {name:"item 1",des:"this is item 1", price: 100},
    {name:"item 2",des:"this is item 2", price: 200},
    {name:"item 3",des:"this is item 3", price: 300},
    {name:"item 4",des:"this is item 4", price: 400},
    {name:"item 5",des:"this is item 5", price: 500},
    {name:"item 6",des:"this is item 6", price: 600},



]

function handleClick(e,value){
  e.preventDefault()
  setCart([...cart,value])
  setCost(cost + value.price)
  
//  {<Cart/>}

}


function handledlt(e,value,index){
  e.preventDefault()
  setCart(cart.filter((a,id) => index!=id))
  setCost(cost - value.price)

}

   return (
     <div className='main'>
      {products.map((value,index)=>{
        return(
          <div key={index} className='items'>

            <p>{value.name}</p>
            <p>{value.des}</p>
            <p>{value.price}</p>
            <button onClick={e=>{handleClick(e,value) }}>Add To Cart</button>
            </div>
        )
      })}


<div className='cart'>

<h1>Cart context</h1>
{
  cart.map((value,index)=>{
    return(
      <div key={index}  className='left'>
        <p>
          {value.name}
        </p>
      <p>
        {value.price}
      </p>
      <button onClick={(e)=>handledlt(e,value,index)}>Remove button</button>
        </div>
    )
    
  })
  
}
  </div>


     </div>
   )
 }
 
 export default Main