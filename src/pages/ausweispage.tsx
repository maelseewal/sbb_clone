import IdentitiCard from "../components/identitiCard";
import TicketCard from "../components/ticketCard";
import TicketSlider from "../components/ticketSlider";

export default function AusweisPage() {
  return (
    <div className="content">
      <header>
        <h1>Billette & Abos</h1>
        <TicketSlider />
        <IdentitiCard />
        <TicketCard />
      </header>
    </div>
  );
}
