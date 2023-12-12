import { useContext } from "react";
import { UserContext } from "../App";
export default function Nav() {
  const { userState, setUserState } = useContext(UserContext);

  return (
    <header>
      <ul>
        <li><a href="/" rel="noopener noreferrer">
          <img src="/logo-tt.png" alt="Tale Together" style={{ height: '100px' }} />
        </a></li>
      </ul>
    </header>
  );
}
