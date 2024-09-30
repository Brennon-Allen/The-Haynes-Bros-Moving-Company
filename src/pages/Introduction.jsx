import { Link } from "react-router-dom";
import haynesBros from "../assets/haynes-bros.jpeg";
import dolleyIcon from "../assets/dolley-icon.png";

export default function Introduction() {
  return (
    <div className="introduction-main">
      <img className="haynes-bros" src={haynesBros} />
      <h1>MOVERS FOR THE PEOPLE IN AUSTIN, TEXAS</h1>
      <p>
        The Haynes Bro's Moving Company is a local family owned business in
        Austin Texas. Raymond and Deyonne Haynes began packing, loading and
        unloading 18 wheelers for other moving companies and have four years
        experience prior to starting our own company in 2015. We have moved
        countless families around the great state of Texas for five years. The
        Haynes Bro's are available to handle your moving needs. From just one
        item, to full sized home or office moves. We come equipped with an
        enclosed box truck, furniture pads and of course talented movers to get
        the job done right. Our rates start at $135 an hour with a 3 hour
        minimum and a $120 travel fee!
      </p>
      <p>Contact us now to book your move!</p>
        <h5>Raymond Haynes</h5>
        <p>Cell phone: (512)701-0966</p>
        <p>Email: raymondhaynes100@gmail.com</p>
        <h5>Deyonne Haynes</h5>
        <p>Cell phone: (512) 902-5453</p>
        <p>Email: haynesbrothers2015@gmail.com</p>
      <Link to="/MovingGallery">
        <button>Get a Quote</button>
      </Link>
      <img src={dolleyIcon} className="dolley-icon" />
    </div>
  );
}
