import "../styles/FotoInfo.css";
import Collage from "../assets/Group77.png";

export default function Main() {
  return (
    <div className="container">
      <div className="img-collage">
        <img src={Collage} alt="jeje" />
      </div>
      <div className="info">
        <h3>Online Experiences</h3>
        <p>Join unique interactive activities led by one-of-a-kind host--all without leaving home</p>
      </div>
    </div>
  );
}
