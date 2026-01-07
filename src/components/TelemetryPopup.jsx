import { useEffect, useRef } from "react";

export default function TelemetryPopup({ drone, anchor, onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const top = anchor
    ? anchor.top + window.scrollY + anchor.height / 2 - 80
    : 140;

  const left = anchor ? anchor.right + 80 : 320;

  return (
    <div
      ref={popupRef}
      className="telemetry-popup"
      onClick={(e) => e.stopPropagation()}
      style={{
        position: "absolute",
        top,
        left,
        zIndex: 1000,
      }}
    >
      <h3>{drone.id} Telemetry</h3>
      <p>Speed: {drone.speed} m/s</p>
      <p>Lat: {drone.lat.toFixed(6)}</p>
      <p>Lng: {drone.lng.toFixed(6)}</p>

      <p>Battery: {drone.battery}%</p>
      <p>Status: {drone.status}</p>
    </div>
  );
}
