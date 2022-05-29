//    File Name: Sidebar
//    Component Created at 28 May, 2022 - 11
//
//    =============================================================
//    COMPANY: ( Xpotech )
//
//    Created by Xpotech developers.
//    Copyright © ( 2022 - Current ) Xpotech. All rights reserved.
//    ============================================================


import React from 'react';
// Import Images
import Header_Image from '../../../assets/images/sidebar-header.png'
import Mobile_Icon from '../../../assets/images/sidebar-mobile-icon.png'
import Expand_Arrow from '../../../assets/images/sidebar-section-arrow.png'
// Import SVG
import Toggle_Arrow from '../../../assets/svg/toggle-bar.svg'
import Xpotech_Logo from '../../../assets/svg/Xpotech_Logo.svg'

const Sidebar = () => {

    // States
          
    // Variables
    
    // Functions
    
    // Life Cycles
    
    // Main Return
    
    return(
        <>
          <div>
                <div className="sidebar">
                    <div className='sidebar__heading'>
                        <img className="sidebar__heading-image" src={Header_Image} alt="Mobile-Tablet"/>
                        <div className="sidebar__heading">
                            <h3 className="sidebar__heading-text">Devices</h3>
                        </div>
                    </div>
        
                    <div className="sidebar__section">
        
                        <div className="sidebar__section-heading-outbox">
                            <div className="sidebar__section-heading-text">MOBILE</div>
                            <div className="sidebar__section-heading-arrow"><img src={Expand_Arrow} alt=""/></div>
                        </div>
        
                        <div className="sidebar__section-content">
                            <img src={Mobile_Icon} alt=""/>
                            <p>IPhone XS Max</p>
                            <small className="sidebar__section-content-info">414 x 896 px</small>
                        </div>
                    
                    </div>
                    
                    <div className="sidebar__section">
        
                        <div className="sidebar__section-heading-outbox">
                            <div className="sidebar__section-heading-text">Tablet</div>
                            <div className="sidebar__section-heading-arrow"><img src={Expand_Arrow} alt=""/></div>
                        </div>
                    
                    </div>
                    
                    <div className="sidebar__section">
        
                        <div className="sidebar__section-heading-outbox">
                            <div className="sidebar__section-heading-text">Desktop</div>
                            <div className="sidebar__section-heading-arrow"><img src={Expand_Arrow} alt=""/></div>
                        </div>
        
                    </div>
                    
                    
                    
                    <div className="sidebar__ending">
                        <hr/>
                        <img className="sidebar__ending-toggle" src={Toggle_Arrow} alt="" srcset=""/>
                    </div>
                </div>
            </div>
        </>
    )
    
}
Sidebar.propsType = {
  
}
    
Sidebar.defaultProps = {
  
}

export default Sidebar;