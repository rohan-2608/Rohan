import DroneCard from "./DroneCard";

export default function DroneList({ drones, onHover, onLeave, onSelect }) {
  return (
    <div className="drone-list">
      {drones.map((drone) => (
        <DroneCard
          key={drone.id}
          drone={drone}
          onHover={onHover}
          onLeave={onLeave}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
