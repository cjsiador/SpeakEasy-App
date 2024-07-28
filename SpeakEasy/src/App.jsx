import { useState } from 'react'
import LandingComp from './components/LandingComp'
import NavBar from './components/NavBar'
import TranslationComp from './components/TranslationComp'
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      {/* <LandingComp/> */}
      <TranslationComp />
    </>
  )
}

export default App