import React, { Component } from 'react'
import "./Body.css"

export default class Body extends Component {
  render() {
    return (
      < >
      <div className='bodycontent'> 
          <div className="Bsidebar">
              <ul>
                <li>
                    <i class="fa fa-home"></i>
                    <span>  Home</span>
                </li>
                <li>

                </li>
               
                <li>
                    <img src="./Images/shorts1.jpg" Alt="Youtube Shorts" width="30px" height="30px"/>
                    <span> Shorts</span>

                </li>
                <li>
                  
                </li>
                <li>
                <i class="fa fa-youtube"></i>
                <span> Subscriptions</span>

                </li>
                <li>
                  
                 </li>
                <li>
                  <i class="fa  fa-book"></i>
                   <span> Library</span>
                </li>
                <li>
                  
                </li>
                <li> 
                  <i class="fa fa-history"></i>
                  <span> History  </span>
                  
                </li>
                <li>
                  
               </li>
               <li>
                  <i class="fa fa-clock-o"></i>
                  <span>  Watch Later</span>
              </li>
                <li>
                  
                </li>
                <li>
                <i class='fa fa-thumbs-up'></i>
                <span>Liked videos</span>
                <li>

                </li>

                </li>
                <li>
                <i class="fa  fa-scissors"></i>
                  <span>You clips</span>
                </li>
                <li>
                
                </li>
              <li>
                <span>Subscriptions</span>
              </li>
              <li>
              </li>
              <li>
              <img src="./Images/yubi.jpg" Alt="Yubi" width="30px" height="30px"/>
              <span>  Yubi</span>
              </li>
              <li></li>
              <li>
              <img src="./Images/vired.jpg" Alt="Herovired" width="30px" height="30px"/>
              <span>  Herovired</span>
              </li>
              <li></li>
              <li>
              <i class="fa fa-plus-circle"></i>
                <span> Browse Channels</span>
              </li>
              <li>
              </li>
              <li>
                <span>Explore</span>
              </li>
              <li>

              </li>
              <li>
                  <i class="fa fa-fire"> </i>
                  <span>  Trending</span>
                </li>
                <li>
                  
                </li>
                <li>
                  <i class="fa fa-music" > </i>
                  <span>  Music</span>
                </li>
                <li>
                  
                </li>
              
              <li>
              <img src="./Images/clapper.png" Alt="Movies" width="30px" height="30px"/>
              <span>  Movies</span>
              </li>
              <li></li>
              <li>
              <img src="./Images/live.jpg" Alt="Live" width="30px" height="30px"/>
              <span> Live</span>
              </li>
              <li></li>
              </ul>
          </div>

          <div className="Bsubheader">
            <div>All</div>
            <div>Mixes</div>
            <div>Music</div>
            <div>Java Script </div>
            <div>Ruby</div>
            <div>Live</div>
            <div>Yoga</div>
            <div>Python</div>
            <div>Gaming</div>
            <div>Motivation</div>
            <div>News</div>
            <div>Mantars</div>
            <div>Thoughts</div>
            <div>AI</div>

        </div>
        <div className='Bcontainer'>
        <div className="Bvcontainer">
        <div className='dispvideo'>
              <iframe  src="https://www.youtube.com/embed/gH_RYRwVrVM" title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='dispvideo'>
              <iframe  src="https://www.youtube.com/embed/Ke90Tje7VS0" title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
             
        <div className='dispvideo'>
             <iframe src="https://www.youtube.com/embed/PkZNo7MFNFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
        </div>  
        
              
        </div>
        <div className='Bvcontainer'>
             <div className='dispvideo'>
              <iframe src="https://www.youtube.com/embed/w7ejDZ8SWv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
             <div className='dispvideo'>
                 <iframe  src="https://www.youtube.com/embed/BwncH56j9WQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
             </div>
             <div className='dispvideo'>
               <iframe  src="https://www.youtube.com/embed/zK6sFEA7Yr4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
           
        </div>
        <div className='Bvcontainer'>
        <div className='dispvideo'>
            <iframe  src="https://www.youtube.com/embed/RL9Z0hvwmyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='dispvideo'>
            <iframe  src="https://www.youtube.com/embed/F6b0h3sN16k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='dispvideo'>
            <iframe   src="https://www.youtube.com/embed/xucm6_BQPJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
        </div>
      

      </div>
   
        
       
      </ >
    )
  }
}
