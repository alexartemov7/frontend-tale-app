import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AllStories from './pages/AllStories'


export const UserContext = createContext()

function App() {
  const [userState, setUserState] = useState({})
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userState, setUserState }}>
        <Nav />
        <Routes>
          <Route path='/' element={<AllStories />} />
        </Routes>
        <Footer />
      </UserContext.Provider>

    </BrowserRouter>
  )
}

export default App