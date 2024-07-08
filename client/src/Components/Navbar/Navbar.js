import "./NavbarStyle.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   <nav>
    <h1>WorkoutBuddy</h1>
    <div className="auth">
        <Link to="/">Sign Up</Link>
        <Link to="/">Login</Link>
    </div>
   </nav>
  )
}

export default Navbar