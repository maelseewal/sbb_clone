import qrCode from "../assets/qrcode.png";
import profilePicture from "../assets/profilePicture.png";

export default function IdentitiCard() {
  return (
    <div className="identiti-card-container">
      <div className="identiti-card-top-section">
        <p className="name">Seewald</p>
        <p className="name">Maël</p>
        <p>23.11.2008 M</p>
      </div>
      <div className="identiti-card-bottom-section">
        <div className="left-cell">
          <img className="images" src={qrCode} alt="qrcode" />
        </div>
        <div className="right-cell">
          <img className="profile-picture" src={profilePicture} alt="profile" />
        </div>
      </div>
    </div>
  );
}
