import React from 'react';
import '../styles/ParkingStatus.css';


function ParkingStatus({ totalSlots, availableSlots, occupiedSlots }) {
  return (
    <div className="parking-status">
      <div className="status-item">
        <h3>Total Slots</h3>
        <p>{totalSlots}</p>
      </div>
      <div className="status-item">
        <h3>Available</h3>
        <p>{availableSlots}</p>
      </div>
      <div className="status-item">
        <h3>Occupied</h3>
        <p>{occupiedSlots}</p>
      </div>
    </div>
  );
}

export default ParkingStatus;