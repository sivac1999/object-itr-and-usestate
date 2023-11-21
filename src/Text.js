import { Component } from "react";


class Text extends Component{
    constructor(){
        super()
        this.state={
           message:"",
        }
    }
    changeNumberincrement(){
        this.setState({
            message:"Hello siva",
        })
        
    }
    changeNumberdescrment(){
        this.setState({
            message:"Welcome Kaliyamma"
        })
        
    }
    render(){
        return(
            <div className="text"> 
            <h1>Text Change</h1>
            <h2>{this.state.message}</h2>
            <button onClick={()=>this.changeNumberincrement()}>Clik Me</button>
            <button onClick={()=>this.changeNumberdescrment()}>Clik Me</button>
            </div>
        )
    }
}
export default Text