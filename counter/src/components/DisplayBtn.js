import React, { Component } from 'react'

export default class DisplayBtn extends Component {
    constructor(props){
        super(props)
        this.state ={
          num:0
        }
    }
    
    IncreaseCount=()=>{
      console.log("I am in increment Counter")
      this.setState({
      num:this.state.num+1
      })
      
      }
  DecreaseCount=()=>{
      console.log("I am Decrement Counter")
      this.setState({
      num:this.state.num-1

      })
          
      }
     

    componentDidMount=()=>{
        console.log("I am in componentDidmount")
        this.setState({
            num:30
        })
          
      }
      componentupdate=()=>{
        console.log("I am inside Component update")
      }
      componentWillUnmount=()=>{
        console.log("I am inside the component willunmount")
      
      }
   

     render =() => {
      return (
      <>
        <p><p>Number: {this.state.num}</p></p>
       <div> 
             <button type='button' onClick={this.IncreaseCount()}>Increment + </button>     
             <button type="button" onClick={this.DecreaseCount()}>Decrement - </button> 
          
    
      </div>
        </>
      
    )
  }
}
 
