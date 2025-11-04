import nav from "../assets/nav.png"; // Pfad zu deinem QR-Code Bild
import "../App.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
<img src={nav} alt="" />
    </nav>
  );
}
