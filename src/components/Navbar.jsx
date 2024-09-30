import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <ul>
        <Link to="/Introduction">
            <li>Introduction</li>
        </Link>
        <Link to="/Photos">
                <li>Photos</li>
            </Link>
            <Link to="/Reviews">
                <li>Reviews</li>
            </Link>
            <Link to="/Quote">
                <li>Get a Quote</li>
            </Link>
        </ul>
      </div>
    </>
  )
}
