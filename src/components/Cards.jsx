import "../styles/Cards.css";
import Bike from "../assets/bike.png";
import Natation from "../assets/natation.png";
import Wedding from "../assets/wedding.png";
import { AiFillStar } from "react-icons/ai";

export default function Cards() {
  return (
    <div className="cards-row">
      <div className="card">
        <div className="state">SOLD OUT</div>
        <div className="card-image">
          <img src={Natation} alt="Just" />
        </div>
        <div className="card-info">
          <div className="rating">
            <AiFillStar />
            <div className="rating-number">
              5.0 <span>(6) USA</span>
            </div>
          </div>
          <div className="title">Life lessons with Katie Zaferes</div>
          <div className="price">
            {" "}
            <strong>From $136</strong>/person
          </div>
        </div>
      </div>
      <div className="card">
        <div className="state">ONLINE</div>
        <div className="card-image">
          <img src={Wedding} alt="Just" />
        </div>
        <div className="card-info">
          <div className="rating">
            <AiFillStar />
            <div className="rating-number">
              5.0 <span>(30) USA</span>
            </div>
          </div>
          <div className="title">Learn wedding photography</div>
          <div className="price">
            {" "}
            <strong>From $125</strong>/ person
          </div>
        </div>
      </div>
      <div className="card">
        <div className="state">ONLINE</div>
        <div className="card-image">
          <img src={Bike} alt="Just" />
        </div>
        <div className="card-info">
          <div className="rating">
            <AiFillStar />
            <div className="rating-number">
              4.8 <span>(2) USA</span>
            </div>
          </div>
          <div className="title">Group Mountain Biking</div>
          <div className="price">
            {" "}
            <strong>From $50</strong>/ person
          </div>
        </div>
      </div>
    </div>
  );
}
