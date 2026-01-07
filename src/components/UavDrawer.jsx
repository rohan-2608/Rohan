import { useState } from "react";
import DroneList from "./DroneList";
import TelemetryPopup from "./TelemetryPopup";
import ConnectorLine from "./ConnectorLine";
import "./UavDrawer.css";

export default function UavDrawer({ uavs, setFocusedUavId }) {
  const [activeDrone, setActiveDrone] = useState(null);
  const [anchorRect, setAnchorRect] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`uav-drawer ${collapsed ? "collapsed" : ""}`}>
      
      {/* HEADER (like casualty panel) */}
      <div className="uav-drawer-header">
  <span>UAVs</span>
</div>
      <button
  className={`uav-collapse-handle ${collapsed ? "collapsed" : ""}`}
  onClick={() => setCollapsed(!collapsed)}
>
  ▶
</button>


      {/* CONTENT */}
      <div className="uav-drawer-content">
        <DroneList
          drones={uavs}
          onHover={(drone) => setFocusedUavId(drone.id)}
          onLeave={() => setFocusedUavId(null)}
          onSelect={(drone, rect) => {
            setActiveDrone(drone);
            setAnchorRect(rect);
            setFocusedUavId(drone.id);
          }}
        />
      </div>

      {/* TELEMETRY */}
      {activeDrone && (
        <>
          {anchorRect && <ConnectorLine anchor={anchorRect} />}
          <TelemetryPopup
            drone={activeDrone}
            anchor={anchorRect}
            onClose={() => {
              setActiveDrone(null);
              setAnchorRect(null);
              setFocusedUavId(null);
            }}
          />
        </>
      )}
    </div>
  );
}
