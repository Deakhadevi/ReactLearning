import React, { Component } from 'react'
import "./Header.css"
export default class Header extends Component {
  render() {
    return (
      <>
            <div className="Header">
            <div Class="Headerleft">
              <i class="fa ">&#xf0c9;</i>
              <img src="./Images/ylogo.png" Alt="Youtubelogo" />
            </div  >
               <div className="Hcenter">
               <div class="Hsearch">
                 < input className='HsearchInput' type="text" placeholder="Search" value="" />
                 
                  <i class="fa fa-search"></i> 
                  <i class="fa fa-microphone"  ></i>
                  </div>        
               </div>  
               <div>
              <div className="Headerright">
              <i class="fa fa-plus"  ></i>
              <i class="fa fa-bell"  ></i>
              <i class="fa fa-user-circle-o"></i>
         
              </div>

               </div>

              
           </div>
           </>
    );
  }
}
