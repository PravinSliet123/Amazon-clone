import React, { useState } from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider/Stateprovider';
import { auth } from '../../firebase';



function Header() {

  const [{basket,user}, dispatch] = useStateValue()
  const authControl= ()=>{
        if(user)
        {
          auth.signOut();
        }
  }
 
  document.title = "Your Checkout page is here"
  return (
    <div className='Header'>
      <NavLink to="/"> <img className='Header__logo' src="https://images-na.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg" alt="" /></NavLink>
      <div className="Header__location">
        <span className="Header__locationOne">
          Hello
        </span>
        <div className="Header__locations">
          <LocationOnIcon className='Header__location' />
          <h3>Select Your Location</h3>
        </div>

      </div>
      <div className="Header__search">
        <input className='Header__searchInput' type="text" />
        <SearchIcon className='Header__searchIcon' />
      </div>
      <div className="Header__nav">
      <NavLink to={user?"/":"/login"}>
        <div onClick={authControl} className="Header__options">
          <span className="Header__optionLineOne">
            {user?`Hey! ${user.email.slice(0,3)}`:"Hey! Guest"}
          </span>
   
        <span style={{
          textDecoration:"none",
          color:"white"

        }} className="Header__optionLineTwo">
           {user?'Sign-Out':'Sign-In'}
          </span>
     
        </div>
        </NavLink>
        <div className="Header__options">
          <span className="Header__optionLineOne">
            Return
          </span>
          <span className="Header__optionLineTwo">
            &Orders
          </span>
        </div>
        <div className="Header__options">
          <span className="Header__optionLineOne">
            Your
          </span>
          <span className="Header__optionLineTwo">
            Prime
          </span>
        </div>
        <div style={{
          cursor:"pointer"
        }}  className="Header__optiionBascket">
          <NavLink to= "/checkout">
            <ShoppingBasketIcon className='Header__optiionBascketIcon' />
          <span className=' Header__optionLineTwo Header__optionCount'>{basket?.length}</span>
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default Header