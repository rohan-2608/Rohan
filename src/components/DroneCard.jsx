export default function DroneCard({ drone, onHover, onLeave, onSelect }) {
  return (
    <div
      className="drone-card"
      style={{
        "--idColor": drone.idColor,
        borderLeft: `6px solid ${drone.idColor}`,
        boxShadow: `0 0 10px ${drone.idColor}55`,
      }}
      onMouseEnter={() => onHover(drone)}   // ✅ zoom
      onMouseLeave={onLeave}                // ✅ clear zoom
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        onSelect(drone, rect);              // ✅ telemetry
      }}
    >
      <div className="drone-id">{drone.id}</div>
      <div className="status-slice">
        STATUS: {drone.status}
      </div>
    </div>
  );
}
