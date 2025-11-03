import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const TicketSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"gültig" | "abgelaufen">("gültig");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!sliderRef.current) return;
    const tabs = sliderRef.current.querySelectorAll(".tab");
    const activeIndex = activeTab === "gültig" ? 0 : 1;
    const tab = tabs[activeIndex] as HTMLElement;

    const sliderPadding = 6; // das Padding vom .ticket-slider
    setIndicatorStyle({
      width: `${tab.offsetWidth + sliderPadding * 2}px`,
      left: `${tab.offsetLeft - sliderPadding}px`,
      transition:
        "left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    });
  }, [activeTab]);

  return (
    <div className="ticket-slider-container">
      <div className="ticket-slider" ref={sliderRef}>
        <div className="slider-indicator" style={indicatorStyle}></div>
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
