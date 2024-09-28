import haynesBros from "../assets/haynes-bros.jpeg";
import dolleyIcon from "../assets/dolley-icon.png";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <img src={logo} className="logo" alt="image" />
      <h1 className="slogan-text">"Movers for the people."</h1>
      <img src={dolleyIcon} className="dolley-icon" />
    </>
  );
}
