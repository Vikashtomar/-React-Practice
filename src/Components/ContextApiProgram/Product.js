 import React,{useState,useEffect, useContext} from 'react'
 import axios from 'axios'
import { globalContext } from './App';

 
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
    <div>
        {mydata.map((value)=>{
            const {title,image,price} = value;
            return <>
        <h1>{title}</h1>
        <img src={image} alt="" />
        <p>${price}.0</p><br/>
       
            {/* <a href={handleClick}>Add to cart</a> */}
            <button onClick={(e)=>handleClick(e, value)}> Add to Cart</button>
            </>

            

        })}
    </div>

   )
  
 }
 
 export default Product