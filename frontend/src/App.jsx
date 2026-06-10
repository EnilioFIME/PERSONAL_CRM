import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  function increaseCounter() {
    setCounter(counter + 1)
  }
  return (
    <div>
      <h1> {counter} </h1>
      <button onClick={increaseCounter}>Click</button>
    </div>
  )
}

export default App
