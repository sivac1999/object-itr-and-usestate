import { Component } from "react";

class Color extends Component{
    constructor(){
        super()
        this.state={
          make:"yamaha",
          model:"R15",
          color:"blue",
        }
    }
    colorChange(){
        this.setState({
            make:"yamaha",
            model:"R15",
            color:"Red",
            
        })
        
    }
    
        
    
    render(){
        return(
            <div className="text"> 
            <p className="para">Text Change</p>
            <h2>{this.state.color}</h2>
            <button onClick={()=>this.colorChange()}>Color </button>
            
            </div>
        )
    }
}
export default Color