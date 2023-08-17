 import React, { createContext, useState } from 'react'
 import Header from './Header'
import Main from './Main'
 
import './app.css'
 export const globalData = createContext();
 
 function App() {
  const [cart,setCart] = useState([])
  const [cost,setCost] = useState(0)


   return (
     <div >
<globalData.Provider value={{cart,setCart,cost,setCost}}>

      <Header/>
           
      <Main/>
</globalData.Provider>
     </div>
   )
 }
 
 export default App