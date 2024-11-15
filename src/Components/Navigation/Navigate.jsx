import React, { useState } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [menu,swetmenu]=useState("home")
  return (
    <div className='navbar'>
     <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
      <li onlick className={menu==="home"?"active":""}>home</li>
     <li className={menu==="menu"?"active":""}>menu</li>
     <li className={menu==="mobile-app"?"active":""}>mobile-app</li>
     <li className={menu==="contact-us"?"active":""}>contact us</li>

      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className='dot'>
            
          </div>
        </div>
      </div>
     
      
    </div>
  )
}

export default Navigation
