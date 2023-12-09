import { useContext } from "react"
import { UserContext } from "../App"

export default function Nav() {
  const {userState, setUserState} = useContext(UserContext)
    return (

      <header>
        <ul>
          <li><a href="/" rel="noopener noreferrer">Tale Together</a></li>
          <li><a href="/" rel="noopener noreferrer">All Stories</a></li>
          <li><a href="/about" rel="noopener noreferrer">About</a></li>
          <li><a href="/login" rel="noopener noreferrer">Login</a></li>
          <li><a href="/signup" rel="noopener noreferrer">Sign up</a></li>
        </ul>
      </header>
    )
  }