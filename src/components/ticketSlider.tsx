import React, { useState } from "react";
import "../App.css";

const TicketSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"gültig" | "abgelaufen">("gültig");

  return (
    <div className="ticket-slider-container">
      <div className="ticket-slider">
        <button
          className={`tab ${activeTab === "gültig" ? "active" : ""}`}
          onClick={() => setActiveTab("gültig")}
        >
          Gültig
        </button>
        <button
          className={`tab ${activeTab === "abgelaufen" ? "active" : ""}`}
          onClick={() => setActiveTab("abgelaufen")}
        >
          Abgelaufen
        </button>
      </div>
    </div>
  );
};

export default TicketSlider;
