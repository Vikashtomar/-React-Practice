 import React,{useState,useEffect} from 'react'
 import axios from 'axios'
 
 function Home() {
  const [product,setProduct]  = useState([]);

  useEffect(()=>{
    axios.get("https://api.coinlore.net/api/tickers/")
    .then((res)=>{
      console.log(res.data);
      setProduct(res.data.data)
    })
  })
  console.log(product)
   return (
     <div>
   {product.filter((val)=>val.rank <=6).map((pdct)=>{
    const {id,name} = pdct;

    return(
      <>
      <h1>{id}</h1>
      <p>{name}</p><br/>
      </>
    )
   })}

     </div>
   )
 }
 
 export default Home