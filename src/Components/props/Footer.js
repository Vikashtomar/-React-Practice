import React from 'react'

function Footer({name,lname}) {
  return (
    <div>
        {/* <h1>{name}</h1> */}

     <h1>
     {name}
     <br />
     {lname}
      </h1>  
    </div>
  )
}

export default Footer