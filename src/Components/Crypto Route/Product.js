/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://api.coinlore.net/api/tickers/").then((res) => {
      console.log(res);
      //setProducts([...products,...res])
    
    setProduct(res.data.data)
    });
    console.log(product);
  });

  return <div>
    {
        product.filter((val)=>val.rank <=10).map((prdct)=>{
            const {id,name} = prdct;
            return(
                <>
                <p>
                    {id}
                </p>
                <h1>{name}</h1>
                </>
            )
        })
    }

  </div>;
}

export default Product;
