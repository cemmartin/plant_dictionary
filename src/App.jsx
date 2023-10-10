import { useState } from 'react'
import './App.css'
import PlantContainer from './Containers/PlantContainer'

function App() {
  return (
    <>
      <h1>Plant Dictionary</h1>
      <PlantContainer/> {/* inserts everything from plantContainer */}
    </>
  )
}

export default App
