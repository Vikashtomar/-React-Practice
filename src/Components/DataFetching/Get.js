 import React,{useState,useEffect} from 'react';
 import axios from 'axios'

 
 function Get() {
    const [data,setData] = useState('');


    useEffect(()=>{
        axios.get("http://hn.algolia.com/api/v1/search?query=html")
        .then((res)=>{
            console.log(res)
            // setData(res.data)
        })
    
    },[])


             
   return (
     <div>
        {/* {data.map((val)=>{
            const {}
        })} */}


     </div>
   )
 }
 
 export default Get