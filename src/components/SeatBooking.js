import React, { useState } from 'react';
import './SeatBooking.css';

const SeatBooking = ({ movie, onClose }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleBooking = () => {
    alert(`Booked seats: ${selectedSeats.join(', ')} for ${movie.title}`);
    onClose();
  };

  return (
    <div className="seat-booking">
      <h2>Booking for {movie.title}</h2>
      <div className="seats">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={`seat ${selectedSeats.includes(i) ? 'selected' : ''}`}
            onClick={() => toggleSeat(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <button onClick={handleBooking} disabled={selectedSeats.length === 0}>
        Confirm Booking
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SeatBooking;
