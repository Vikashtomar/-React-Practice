//  import React,{useState,useEffect} from 'react'
 
//  function File() {
//     const [city,setCity] = useState("");

//     const [state,setState] = useState([])

//     const countries = [
//         {
//             country:"india",
//             code:"In",
//             states:['delhi','rajasthan','mumbai']
//         },
//         {
//             country:"China",
//             code:"Ch",
//             states:['wuhan','beijing','hunan']
//         },
//         {
//             country:"Sri lanka",
//             code:"Sl",
//             states:['colombo','candy','jaffna']
//         }
//     ]


//     useEffect(() =>{
//         countries.map((cntry)=>{
//             if(cntry.code === city){
//                 setState(cntry.states)
//         })
//     },[city])

//    return (
//      <div className="container">
// <select  onChange={(e)=>{
//     setCity(e.target.value)}}>

//         {countries.map((value,index)=>{
//             return(
//                 <option value={value.code} key={index}>
//                     {" "}
//                     {value.country}{" "}
                    
//                 </option>
//             );
//         })}

// </select>

// <select >

// {
//     state.map((cnt,ind)=>{
//         return <option key={ind} value={cnt}>

//             {cnt}
//         </option>
//     })
// }
// </select>

//      </div>
//    )
//  }
 
//  export default File