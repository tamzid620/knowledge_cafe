import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteicon from '/programming.png'
import './App.css'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
    </div>
  )
}

export default App
