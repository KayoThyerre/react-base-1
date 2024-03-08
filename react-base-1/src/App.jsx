import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'  
import './App.css'
import Text from './components/text-upper-case/text'
import Button from './components/button/button'


const showLabel = (label) => {
  alert(`A label desse botão é ${label}`)
}

function App() {

  return (
    <>
      <Text />
      <Button showLabel={showLabel}/>
    </>
  )
}

export default App
