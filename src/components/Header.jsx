import logo from "../assets/logo.png";
import Navbar from './Navbar'

export default function Header() {
  return (
    <>
      <div className="header-main">
        <img src={logo} className="logo" alt="image" />
        <h2 className="slogan-text">"Movers for the people."</h2>
        <Navbar />
      </div>
    </>
  )
}
