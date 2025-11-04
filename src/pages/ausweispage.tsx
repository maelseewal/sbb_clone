import IdentitiCard from "../components/identitiCard";
import TicketCard from "../components/ticketCard";
import TicketSlider from "../components/ticketSlider";

export default function AusweisPage() {
  return (
    <div className="app-container">
      <main>
        <div className="header">
          <h1>Billette & Abos</h1>
          <TicketSlider />
          <IdentitiCard />
        </div>
        <div className="scrollView">
          <TicketCard />
        </div>
      </main>
    </div>
  );
}
