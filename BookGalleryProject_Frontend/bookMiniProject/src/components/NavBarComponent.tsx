import { Link } from "react-router-dom";

export default function NavBarComponent() {
  return (
   <>

   <nav className="navbar navbar-expand-lg navbar-light bg-secondary">

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Gallery</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/booklist">Book List</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/create">Create Book</Link>
      </li>
      
    </ul>
  </div>
</nav>
   
   </>
  )
}
