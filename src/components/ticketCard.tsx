import { ChevronRight } from 'lucide-react';
import handyNoTiketsPicture from "../assets/handyNoTiketsPicture.png";
import '../App.css';

const TicketCard = () => {
    return (
        <div className="ticket-container">
            <div className="ticket-wrapper">

                {/* Aktuell keine gültigen Billette Card */}
                <div className="no-tickets-card">
                    <div className="no-tickets-content">
                        <img
                            src={handyNoTiketsPicture}
                            alt="Keine Tickets"
                            className="no-tickets-image"
                        />   
                        <p className="no-tickets-text">
                            Sie haben aktuell keine gültigen Billette.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h2 className="section-title">
                        Abonnemente auf Ihrem SwissPass
                    </h2>

                    <button className="abo-button">
                        <span className="abo-button-text">Halbtax</span>
                        <ChevronRight className="chevron-icon" size={28} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Manuell erfasste Abonnemente */}
                <div className="section">
                    <h2 className="section-title">
                        Manuell erfasste Abonnemente
                    </h2>

                    <button className="add-abo-button">
                        <span className="add-abo-text">Abonnement erfassen</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TicketCard;