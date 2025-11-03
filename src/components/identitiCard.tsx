import { useState, useRef } from "react";
import qrCode from "../assets/qrcode.png";
import profilePicture from "../assets/profilePicture.png";
import "../App.css";

export default function SwissPassCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const [dragX, setDragX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    let moveX = e.touches[0].clientX - startX.current;

    if (currentPage === 0 && moveX > 0) moveX = 0;
    if (currentPage === 1 && moveX < 0) moveX = 0;

    setDragX(moveX);
  };

  const handleTouchEnd = () => {
    if (!sliderRef.current) return;
    const containerWidth = sliderRef.current.offsetWidth;
    const threshold = containerWidth / 4;

    if (dragX < -threshold && currentPage === 0) {
      setCurrentPage(1);
    } else if (dragX > threshold && currentPage === 1) {
      setCurrentPage(0);
    }

    setDragX(0);
    isDragging.current = false;
  };

  const getTransform = (pageIndex: number) => {
    const baseTranslate = (pageIndex - currentPage) * 100;
    const dragPercent = (dragX / (sliderRef.current?.offsetWidth || 1)) * 100;
    return `translateX(${baseTranslate + dragPercent}%)`;
  };

  return (
    <div className="card-container">
      <div
        ref={sliderRef}
        className="card-slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="card-header">
          <div className="card-header-title">SwissPass</div>
          <div className="card-header-info">
            <p className="name">Seewald</p>
            <p className="name">Maël</p>
            <p className="birth">23.11.2006 M</p>
          </div>
        </div>

        {[0, 1].map((pageIndex) => (
          <div
            key={pageIndex}
            className={`card-page ${pageIndex === 0 ? "page-1" : "page-2"}`}
            style={{
              transform: getTransform(pageIndex),
              transition: isDragging.current
                ? "none"
                : "transform 0.3s ease-out",
            }}
          >
            {pageIndex === 0 ? (
              <div className="page-content row">
                <img className="qr-code" src={qrCode} alt="qrcode" />
                <img
                  className="profile-picture"
                  src={profilePicture}
                  alt="profile"
                />
              </div>
            ) : (
              <div className="page-content column">
                <div className="card-info">
                  <p className="label">Karteninhaber:</p>
                  <p>Maël Seewald</p>
                  <p>Geboren: 23.11.2008</p>
                  <p>Geschlecht: M</p>
                </div>
                <div className="card-footer">
                  <p>SwissPass AG</p>
                  <p>Gültig für öffentliche Verkehrsmittel</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="page-indicators">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`indicator ${currentPage === i ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
