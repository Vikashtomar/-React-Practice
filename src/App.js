 import React from 'react'
import Header from './Components/props/Header'
 
 function App() {
  let name = "vikas";
   return (
     <div>
      <Header  name={name} />
     </div>
   )
 }
 
 export default App