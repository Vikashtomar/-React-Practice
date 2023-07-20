import React,{useState} from 'react'

function Product(){

const [cart ,setCart] = useState([])

  const products = [
    {id:1,name:"Product A",price:20},
    {id:2,name:"Product B",price:30},
    {id:3,name:"Product C",price:40},
    {id:4,name:"Product D",price:50},
    {id:5, name: "Product E", price:60}
]


console.log("Hello")

function handlechange(e,val) {
    e.preventDefault()
       setCart([...cart,val]) 
}
console.log(cart)


  return (
    <div>
     {
        products.map((val,index)=>{
           
            return (
                
                <div  key={index}> 
                <p>{val.id}</p>
                <h1>{val.name}</h1>
                <p>{val.price}</p>

                <a href="#" onClick={(e) => {handlechange(e,val)}}>Add To cart</a>   

                
                </div>
            )
          
            
            
        })
     } 
    </div>
  )
}

export default Product
