import { useState } from 'react'
import LandingComp from './components/LandingComp'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <LandingComp/>
    </>
  )
}

export default App
