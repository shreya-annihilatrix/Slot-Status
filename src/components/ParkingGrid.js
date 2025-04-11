import React from 'react';
import ParkingSlot from './ParkingSlot';
import '../styles/ParkingGrid.css';

function ParkingGrid({ availableSlots, totalSlots }) {
  return (
    <div className="parking-grid">
      {Array.from({ length: totalSlots }, (_, index) => (
        <ParkingSlot key={index} areaNumber={index + 1} isOccupied={index >= availableSlots} />
      ))}
    </div>
  );
}

export default ParkingGrid;
