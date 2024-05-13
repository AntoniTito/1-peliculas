import { useState } from 'react'
import { MyRoutes } from './routers/routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    <header>
      <h1 className='title'>🎬 Películas</h1>
    </header>
    <MyRoutes/>
    </div>
  )
}

export default App
