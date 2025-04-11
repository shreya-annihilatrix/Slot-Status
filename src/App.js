import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ParkingGrid from './components/ParkingGrid';
import ParkingStatus from './components/ParkingStatus';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  const [parkingData, setParkingData] = useState({
    totalSlots: 20,
    availableSlots: 10,
    occupiedSlots: 10
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setParkingData(prevData => {
        const availableSlots = Math.floor(Math.random() * (prevData.totalSlots + 1));
        return {
          ...prevData,
          availableSlots,
          occupiedSlots: prevData.totalSlots - availableSlots
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>Real-Time Car Parking System</h1>
      <ParkingStatus {...parkingData} />
      <div className="parking-container">
        <ParkingGrid availableSlots={parkingData.availableSlots} totalSlots={parkingData.totalSlots} />
      </div>
      <Footer /> {/* Include the Footer here */}
    </div>
  );
}

export default App;
