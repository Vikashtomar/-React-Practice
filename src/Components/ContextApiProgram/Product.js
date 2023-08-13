 import React,{useState,useEffect, useContext} from 'react'
 import axios from 'axios'
import { globalContext } from './App';

import "./Product.css"

 
 function Product() {
    const [mydata,setMydata] = useState([]);

    const {cart,setCart} = useContext(globalContext)

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/")
        .then((res)=>{
            console.log(res.data)
            setMydata(res.data)
        })  },[])


function handleClick(e,item)
{
    e.preventDefault()
    setCart([...cart, item])
}
    
   return(
    <div className='product'>
        {mydata.map((value)=>{
            const {title,image,price} = value;
            return <>
        <h1>{title}</h1>

        <div className="photo">
            <img src={image}/>
        </div>
    
        <p>${price}.0</p><br/>
       
            <button onClick={(e)=>handleClick(e, value)}> Add to Cart</button>
            </>

            

        })}
    </div>

   )
  
 }
 
 export default Product