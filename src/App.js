import logo from './logo.svg';
import './App.css';
import Greet from './Greet.js';
import Icrement from './Increment.js';
import Text from './Text.js';
import Color from './Color.js';
import React,{useState} from 'react';
import Arrayofarr from './Functionarr.js';
function App() {
  const userdetails=[
    {
      name:"kali",
      age:34,
      roll:"develpoer"
    },
    {
      name:"siva",
      age:34,
      roll:"develpoer"
    },
    {
      name:"kumar",
      age:34,
      roll:"develpoer"
    },
    {
      name:"mani",
      age:34,
      roll:"develpoer"
    },
  ]
  let [count,setCount]=useState("Red")
  const teaxtChange=()=>{
    setCount("blue")
  }
  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },
    {
    name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
    }
    
    
    ]

  return (
    <div className="App">
      <p>Value:{count}</p>
      <button onClick={teaxtChange}>Clik</button>
       <Greet userdate={userdetails}/>
       <Icrement />
       <Text />
       <Color />
       <Arrayofarr data={employee}/>
       </div>
  );
}


export default App;
