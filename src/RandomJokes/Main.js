 import React,{useState} from 'react'
 import axios from 'axios'
 
 function Main() {
    const [data,setData] = useState([]);

    function getdata(){
        
        axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then((res)=>{
            console.log(res.data.joke)
            setData(res.data.joke)
          
            setTimeout(()=>{
                setData("")
            },2000)
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