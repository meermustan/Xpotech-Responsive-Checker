//    File Name: index
//    Component Created at 28 May, 2022 - 11
//
//    =============================================================
//    COMPANY: ( Xpotech )
//
//    Created by Xpotech developers.
//    Copyright © ( 2022 - Current ) Xpotech. All rights reserved.
//    ============================================================


import React from 'react';
import Sidebar from '../../components/base/Sidebar';
import Navbar from '../../components/base/Navbar';
import ShowDevices from '../../components/base/ShowDevices';

const Home = () => {

    // States
          
    // Variables
    
    // Functions
    
    // Life Cycles
    
    // Main Return
    
    return(
        <>  
            <div className="home">
                <Sidebar />
                <div>
                    <Navbar />
                    <ShowDevices />
                </div>
            </div>
        </>
    )
    
}
Home.propsType = {
  
}
    
Home.defaultProps = {
  
}

export default Home;