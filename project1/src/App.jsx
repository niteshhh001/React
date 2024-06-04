import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // use of useState hook
   let [counter,setCounter]=useState(15)

   //let counter=15
   const addValue=()=>{
   // console.log("value added",Math.random())
    counter= counter+1;
    setCounter(counter)
   
   }
   const decValue=()=>{
    if(counter<=0){
      return
    }
    setCounter(counter-1);
   }
   const mulValue=()=>{
    setCounter(counter *2)
   }
   const DivideValue=()=>{
    setCounter(counter /2)
   }
  return (
    <>
    
    <h1>Nitesh aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}>Add value: {counter}</button>
     <br />
    <button 
    onClick={decValue}>Decrease value: {counter}</button>
    <button
    onClick={mulValue}>Multiply Value: {counter}  
    </button>
    <button
    onClick={DivideValue}>Divide Value: {counter}  
    </button>
    <p><footer>the current value of counter is : {counter}</footer></p>

    </>
  )
}

export default App
