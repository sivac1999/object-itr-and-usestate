import { Component } from "react"

class Greet extends Component{
    render(){
        const {userdate}=this.props;
        const storevalue=userdate.map((e)=>{
            return(
                <tr>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.roll}</td>
                </tr>
            )

        
        })
        return(
           <table>
              <thead>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Wolk</th>
              </thead>
              <tbody>
                  {storevalue}
              </tbody>
              
           </table>
        )

        
    }
}
export default Greet