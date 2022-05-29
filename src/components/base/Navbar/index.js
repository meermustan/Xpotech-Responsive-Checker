//    File Name: index
//    Component Created at 29 May, 2022 - 11
//
//    =============================================================
//    COMPANY: ( Xpotech )
//
//    Created by Xpotech developers.
//    Copyright © ( 2022 - Current ) Xpotech. All rights reserved.
//    ============================================================


import React from 'react';
import navbar_link_icon from '../../../assets/svg/navbar-link.svg';
import navbar_shopping_bag_icon from '../../../assets/svg/navbar-shopping-bag.svg'

const Navbar = () => {

    // States
          
    // Variables
    
    // Functions
    
    // Life Cycles
    
    // Main Return
    
    return(
        <>
          <div className='navbar'>
            <div className="navbar__title">Proj # Carchaze</div>
            <div className="navbar__links">
                <a href="" className="navbar__link-visit"><object data={navbar_link_icon} type="image/svg+xml"></object> Link</a>
                <a href="" className="navbar__link-order"><object data={navbar_shopping_bag_icon} type="image/svg+xml"></object> Order Now</a>
            </div>
          </div>
        </>
    )
    
}
Navbar.propsType = {
  
}
    
Navbar.defaultProps = {
  
}

export default Navbar;
