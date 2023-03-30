import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteicon from '/programming.png'
import './App.css'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
    </div>
  )
}

export default App
