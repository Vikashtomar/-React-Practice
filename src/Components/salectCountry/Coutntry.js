
import React, { useEffect, useState } from "react";

function Coutntry() {
  const [city, setCity] = useState("");
  const [selectedStates, setSelectedStates] = useState([])
  const countries = [
    {
      country: "india",
      code: "In",
      states: ["delhi", "rajasthan", "mumbai"],
    },
    {
      country: "China",
      code: "Ch",
      states: ["wuhan", "beijing", "hunan"],
    },
    {
      country: "Sri lanka",
      code: "Sl",
      states: ["colombo", "candy", "jaffna"],
    },
  ];


  useEffect(() =>{
    
    countries.map((cntry) =>{
      if(cntry.code === city){
        setSelectedStates(cntry.states)
      }
    })
  }, [city])

  console.log(selectedStates);

  return (
    <div className="container">
      <select
        onChange={(e) => {
          setCity(e.target.value);
        }}>
        {countries.map((val, index) => {
      
          return (
            <option value={val.code} key={index}>
              {" "}
              {val.country}{" "}
            </option>
          );
        })}
      </select>
      <select> 
          { 
              selectedStates.map((cnt, index) => {
                  return   <option key={index} value={cnt}>
                  {cnt}
                </option>
 } ) 
              }
      </select>
    </div>
  );
}

export default Coutntry;
