 import React,{useState} from 'react'
 import axios from 'axios'
 
 function Main() {
    const [data,setData] = useState([]);

    function getdata(){
        
        axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then((res)=>{
            console.log(res)
            setData(res.data.joke)
        })
    }

   return (
     <div>

    <h1>{data}</h1>

        <button onClick={getdata}> Click me</button> 

     </div>
   )
 }
 
 export default Main