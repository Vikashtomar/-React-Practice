 import React from 'react';
 import logo from './images/logo.svg'
 import head from './head.css'
 


 
 function Header() {
   return (
     <div className="one">

      <header>
        <div className="menu">
          <nav1>
            <img src={logo} alt="" />
          </nav1>

          <nav2>
          <h3> <a href="#">Model3</a></h3>
          <h3> <a href="#">ModelS</a></h3>
          <h3> <a href="#">Modelx</a></h3>
          <h3> <a href="#">Solarpanel</a></h3>
          <h3> <a href="#">SolorProof</a></h3>
          </nav2>
          <nav3>
          <h3> <a href="#">Menu</a></h3>
          <h3> <a href="#">Account</a></h3>
          <h3> <a href="#">Shop</a></h3>
          </nav3>

        </div>
      </header>
      
     </div>
   )
 }
 
 export default Header