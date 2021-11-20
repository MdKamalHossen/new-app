import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const userName = ['kamal','jamal','Rahim','Kader'];
  const employeeName = [
    {name:'Kamal',salary:'$1000',about:'My Name is Kamal Hossen, I am a Web designer and Developer, I have Experience around 1 years in Programming Sector'},
    {name:'Jamal',salary:'$2000'},
    {name:'Rahmin',salary:'3000'},
    {name:'Kamal',salary:'4000'},
    {name:'karim',salary:'5000'}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <TotalUser></TotalUser>
      
      <div>
      {
          employeeName.map(emp=><Card employeeName = {emp}></Card>)
      }
     
      </div>
      
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
      <button onMouseMove={handleListner}>Increase</button>
      <button onMouseMove={handleListner1}>Decrease</button>
    </div>
  )
}
function Card(props){
  const styleCard = {
    backgroundColor:'tomato',
    height:'250px',
    width:'250px',
    border:'2px solid light',
    margin:'5px',
    display:'inline-block',
    overflow:'hidden'
  }
  const {name, salary, about} = props.employeeName;
  return(
    <div style={styleCard}>
      <h2>{name}</h2>
      <h5>{salary}</h5>
      <p>{about}</p>
    </div>
  )
}

 function TotalUser(){
   const [users, setUsers] = useState([]);
   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setUsers(data))
   })
   return(
      <div>
        <h2>Dynamic User: {users.length}</h2>
        {
          users.map(userName=><li>{userName.name}</li>)
        }
      </div>
   )
 } 

export default App;
