import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <>

   <header>
    <div className="rout">

<h1>Logo</h1>


    <ul>
        <li><Link to="/"> Home</Link> </li>
        <li><Link to="/about"> About </Link> </li>  
        <li> <Link to ="/Blog">  Blog </Link> </li>
    </ul>
    </div>

   </header>
   
   </>
  )
}

export default Header