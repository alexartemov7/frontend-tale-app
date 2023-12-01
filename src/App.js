import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AllStories from './pages/AllStories'
import StoryChaptersById from './components/ChaptersByStoryId'

export const UserContext = createContext()

function App() {
  const [userState, setUserState] = useState({})
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userState, setUserState }}>
        <Nav />
        <Routes>
          <Route path='/' element={<AllStories />} />
          <Route path='/story/chapters' element={<StoryChaptersById storyId="6568afb71d6b816ea517da00"/>} />

        </Routes>
        <Footer />
      </UserContext.Provider>

    </BrowserRouter>
  )
}

export default App