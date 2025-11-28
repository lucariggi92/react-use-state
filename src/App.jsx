import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import AppBtn from './components/AppBtn'
import AppCard from './components/AppCard'
import AppMain from './components/AppMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <AppMain/>   
    </>
  )
}

export default App
