import React, { createContext, useState } from 'react'
import './head.css'
import Header from './Header'
import Main from './Main'

export  const  globaldata = createContext({});



function App() {
    const [cart,setCart] = useState([]);
    const [cost,setCost] = useState(0);


  return (
    <div>
        <globaldata.Provider value={{cart,setCart,cost,setCost}}>

        <Header />
        <Main />
        </globaldata.Provider>
    </div>
  )
}

export default App