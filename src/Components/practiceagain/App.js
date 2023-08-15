import { createContext, useState } from 'react'
import Header from './Header'
import Main from './Main'
import './app.css'

export const  globalState = createContext({})

function App() {
    const [cart,setCart] = useState([])
    const [cost,setCost] = useState(0)
  return (
    <div>
<globalState.Provider value={{cart,setCart,cost,setCost}}>

<Header />
<Main />
</globalState.Provider>

    </div>
  )
}

export default App