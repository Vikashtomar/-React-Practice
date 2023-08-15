import React,{useContext} from 'react'
import { globalState } from './App'

function Header() {
    const {cart,cost} = useContext(globalState)
  return (
    <div>
        <h1>
            Shoping Cart
        </h1>
        <h3>
            Total Item: - {cart.length}
        </h3>
        <h3>
            Total Cost: -  {cost}
        </h3>
    </div>
  )
}

export default Header