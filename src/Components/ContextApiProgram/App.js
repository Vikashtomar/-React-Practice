import React,{createContext, useState} from 'react'

import Product from './Product'
import Header from './Header'

export const globalContext = createContext({})


function App() {

    const [cart, setCart] = useState([])
  return (
    <div>

<globalContext.Provider value={{cart,setCart}}>
    
    <Header />
    <Product />
</globalContext.Provider>


    </div>
  )
}

export default App