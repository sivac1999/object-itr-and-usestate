import { Component, useState } from "react";


class Icrement extends Component{
    constructor(){
        super()
        this.state={
            count:0,
        }
    }
    changeNumberincrement(){
        this.setState({
            count:this.state.count+1,
        })
        
    }
    changeNumberdescrment(){
        this.setState({
            count:this.state.count>0?this.state.count-1:0,
        })
        
    }
    render(){
        return(
            <div className="increment-div">
            <p>Incrment or decrment</p>
            <h2>{this.state.count}</h2>
            <button onClick={()=>this.changeNumberincrement()}>Increment</button>
            <button onClick={()=>this.changeNumberdescrment()}>Decrement</button>
            </div>
        )
    }
}
export default Icrement