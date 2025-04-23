import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, CreditCard } from 'lucide-react';

const BookingPage = () => {
  const { showtimeId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // Mock data - replace with actual API calls
  const [showtime] = useState({
    id: showtimeId,
    movie: 'Interstellar Journey',
    hall: 'Grand IMAX',
    date: '2024-03-20',
    time: '19:30',
    price: {
      regular: 12,
      premium: 15,
      vip: 20
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSeatClick = (seat: string) => {
    setSelectedSeats(prev => 
      prev.includes(seat) 
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const handleBooking = () => {
    // Implement booking logic here
    console.log('Booking seats:', selectedSeats);
    navigate('/profile');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-700"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{showtime.movie}</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary-700" />
              <span>{new Date(showtime.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary-700" />
              <span>{showtime.time}</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-primary-700" />
              <span>From ${showtime.price.regular}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Your Seats</h2>
            <div className="bg-neutral-100 p-6 rounded-lg">
              {/* Screen */}
              <div className="w-full h-4 bg-neutral-300 rounded mb-8 text-center text-sm text-neutral-600">
                Screen
              </div>
              
              {/* Seating Layout */}
              <div className="grid grid-cols-8 gap-2 max-w-2xl mx-auto">
                {Array.from({ length: 40 }, (_, i) => {
                  const seat = `${String.fromCharCode(65 + Math.floor(i / 8))}${(i % 8) + 1}`;
                  const isSelected = selectedSeats.includes(seat);
                  
                  return (
                    <button
                      key={seat}
                      onClick={() => handleSeatClick(seat)}
                      className={`
                        p-2 rounded transition-colors
                        ${isSelected 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-white hover:bg-primary-100'}
                      `}
                    >
                      {seat}
                    </button>
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded mr-2"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded mr-2"></div>
                  <span>Selected</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-neutral-400 rounded mr-2"></div>
                  <span>Taken</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Selected Seats</span>
                <span>{selectedSeats.join(', ') || 'None'}</span>
              </div>
              <div className="flex justify-between">
                <span>Price per Ticket</span>
                <span>${showtime.price.regular}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Amount</span>
                <span>${selectedSeats.length * showtime.price.regular}</span>
              </div>
            </div>
            
            <button
              onClick={handleBooking}
              disabled={selectedSeats.length === 0}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold
                disabled:bg-neutral-300 disabled:cursor-not-allowed
                hover:bg-primary-700 transition-colors"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;