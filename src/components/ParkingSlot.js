import React, { useState, useEffect } from 'react';
import '../styles/ParkingSlot.css';

function ParkingSlot({ areaNumber, isOccupied }) {
    const [vehicleCount, setVehicleCount] = useState({
        total: 0,
        bikes: 0,
        cars: 0
    });

    useEffect(() => {
        const updateVehicleCounts = () => {
            const bikes = Math.floor(Math.random() * 5);
            const cars = Math.floor(Math.random() * 5);
            const total = bikes + cars;

            setVehicleCount({
                total: total,
                bikes: bikes,
                cars: cars
            });
        };

        const interval = setInterval(updateVehicleCounts, 5000);
        updateVehicleCounts();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`parking-slot ${isOccupied ? 'occupied' : 'available'}`}>
            <div className="vehicle-count-container">
                <div className="count-details">
                    <p>Total Vehicles: {vehicleCount.total}</p>
                    <p>Bikes: {vehicleCount.bikes}</p>
                    <p>Cars: {vehicleCount.cars}</p>
                </div>
            </div>
            
            <h3 className="parking-area-title">Parking Area {areaNumber}</h3>
            
            <div className="vehicles-container">
                <div className="vehicle-group">
                    <div className={`vehicle car ${isOccupied ? 'occupied-vehicle' : 'available-vehicle'}`}>
                        {isOccupied ? '🚘' : '🚙'}
                    </div>
                    <div className={`vehicle bike ${isOccupied ? 'occupied-vehicle' : 'available-vehicle'}`}>
                        {isOccupied ? '🏍️' : '🛵'}
                    </div>
                </div>
            </div>
            
            <p className={`status ${isOccupied ? 'occupied' : 'available'}`}>
                {isOccupied ? 'Occupied' : 'Available'}
            </p>
        </div>
    );
}

export default ParkingSlot;