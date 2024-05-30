import './App.css'
import Index from './pages/Index'
import NavBar from './components/NavBar'
import About from './pages/About'
import Show from './pages/Show'
import New from './pages/New'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Index /> } />
        <Route path="/about" element={<About />}/>
        <Route path="/bookmarks/:id" element={ <Show /> } />
        <Route path="/new" element={ <New /> } />
      </Routes>
    </>
  )
}

export default App
