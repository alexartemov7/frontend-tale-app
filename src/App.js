  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import { createContext, useState } from 'react'
  import './App.css'
  import Nav from './components/Nav'
  import Footer from './components/Footer'
  import AllStories from './pages/AllStories'
  import ChapterDetails from './components/ChapterDetails'
  import ChapterSubmit from './components/AddChapter'

  export const UserContext = createContext()

  function App() {
    const [userState, setUserState] = useState({})
    return (
      <BrowserRouter>
      <UserContext.Provider value={{ userState, setUserState }}>
        <Nav />
        <div className="main-container">
          <Routes>
            <Route path='/' element={<AllStories />} />
            <Route path='/chapters/:storyId' element={<ChapterDetails />} />
            <Route path="/chapters/:storyId" element={<ChapterSubmit />} />
          </Routes>
        </div>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
    )
  }

  export default App