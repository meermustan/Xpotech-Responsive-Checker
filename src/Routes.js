//    File Name: Routes
//    Component Created at 28 May, 2022 - 11
//
//    =============================================================
//    COMPANY: ( Xpotech )
//
//    Created by Xpotech developers.
//    Copyright © ( 2022 - Current ) Xpotech. All rights reserved.
//    ============================================================

import React from 'react';
import Home from './pages/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Routes = () => {

    // States
          
    // Variables
    
    // Functions
    
    // Life Cycles
    
    // Main Return
    
    return(
      <div className='Routes'>
        <Router>
                <Switch>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
        </Router>
      
      </div>
    )
    
}
Routes.propsType = {
  
}
    
Routes.defaultProps = {
  
}

export default Routes;