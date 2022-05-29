//    File Name: index
//    Component Created at 29 May, 2022 - 14
//
//    =============================================================
//    COMPANY: ( Xpotech )
//
//    Created by Xpotech developers.
//    Copyright © ( 2022 - Current ) Xpotech. All rights reserved.
//    ============================================================


import React from 'react';
import Mobile_Frame from '../../../assets/svg/phone_frame.svg'
import Laptor_Frame from '../../../assets/svg/Group 57.svg'

const ShowDevices = () => {

    // States
          
    // Variables
    
    // Functions
    
    // Life Cycles
    
    // Main Return
    
    return(
        <>
          <div className='showdevices'>
            <div>
              <iframe className='device_website' height={780} width={360} src="https://xpotechs.com" frameborder="0"></iframe>
              <object data={Mobile_Frame} type="image/svg+xml"></object>
            </div>
          </div>
        </>
    )
    
}
ShowDevices.propsType = {
  
}
    
ShowDevices.defaultProps = {
  
}

export default ShowDevices;