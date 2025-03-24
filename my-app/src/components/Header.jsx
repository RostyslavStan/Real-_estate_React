import { Link } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/addproperty" className="nav-link">Add Property</Link>
        <Link to="/myproperties" className="nav-link">My Property</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
}
