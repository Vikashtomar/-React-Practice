 import React,{useState} from 'react'
 import axios from 'axios'
 
 function Main() {
    const [mdata,setData] = useState([]);

    function getdata(){
        
        axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then((res)=>{
            console.log(res.data)
            setData(res.data.joke)
          
        })
    }

   return (
     <div>
           
        <button onClick={getdata}> Click me</button> 

     </div>
   )
 }
 
 export default Main