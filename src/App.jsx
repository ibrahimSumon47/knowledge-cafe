import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Blog from './component/Blog/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App md:mx-80">
      <Header></Header>
      <Blog />
    </div>
  )
}

export default App
