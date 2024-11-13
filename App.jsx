import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  let [reduceCounter, setRedudeCounter] = useState()
   
  // let counter = 5
  const addValue = () => {
    // console.log("clicked",counter);
    // counter = counter + 1
    setCounter(counter + 1);
  }

  const removeValue =() => {
    // console.log("clicked",reduceCounter);
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Priya and React</h1>
    <h2>Counter value : {counter}</h2>

    <button id='addbtn' onClick={addValue}>Add value</button>
    <br/>
    <button id='rembtn' onClick={removeValue}>Remove value</button>
      
    </>
  )
}

export default App
