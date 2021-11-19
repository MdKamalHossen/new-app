import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const employeeName = [
    {name:'Kamal',salary:'1000'},
    {name:'Jamal',salary:'2000'},
    {name:'Rahmin',salary:'3000'},
    {name:'Kamal',salary:'4000'},
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
        <Card employee = {employeeName[0]}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(30);
  const handleListner = ()=> {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleListner1 = ()=>{
    const newCount = count-1;
    setCount(newCount);
  }
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handleListner}>Increase</button>
      <button onClick={handleListner1}>Decrease</button>
    </div>
  )
}
function Card(props){
  const styleCard = {
    backgroundColor:'tomato',
    height:'250px',
    width:'250px',
    border:'2px solid light',
    margin:'5px'
  }
  console.log(props);
  return(
    <div style={styleCard}>
      <h2>{props.employee.name}</h2>
      <h5></h5>
      <p></p>
    </div>
  )
}

export default App;
