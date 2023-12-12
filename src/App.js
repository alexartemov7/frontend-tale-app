  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import { createContext, useState } from 'react'
  import './App.css'
  import Nav from './components/Nav'
  import Footer from './components/Footer'
  import AllStories from './pages/AllStories'
  import ChapterSubmit from './components/AddChapter'
  import ShowChapters from './pages/ChapterPage'
  import About from './pages/About'
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
            <Route path='/chapters/:storyId' element={<ShowChapters />} />
            <Route path="/chapters/:storyId" element={<ChapterSubmit />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
    )
  }

  export default App