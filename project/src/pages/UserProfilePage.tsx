import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Ticket, User, Calendar, Clock, Film } from 'lucide-react';

const UserProfilePage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('bookings');
  const [loading, setLoading] = useState(true);

  // Mock bookings data - replace with actual API calls
  const [bookings] = useState([
    {
      id: 1,
      movie: 'Interstellar Journey',
      date: '2024-03-20',
      time: '19:30',
      seats: ['A1', 'A2'],
      hall: 'Grand IMAX',
      status: 'confirmed'
    },
    {
      id: 2,
      movie: 'Midnight Symphony',
      date: '2024-03-25',
      time: '20:00',
      seats: ['B5', 'B6'],
      hall: 'Silver Screen 1',
      status: 'upcoming'
    }
  ]);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary-100 rounded-full p-4">
              <User className="h-8 w-8 text-primary-700" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-900">{user?.name}</h1>
              <p className="text-neutral-600">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'bookings'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'settings'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                Account Settings
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'bookings' ? (
              <div className="space-y-4">
                {bookings.map(booking => (
                  <div 
                    key={booking.id}
                    className="border rounded-lg p-4 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-primary-900">
                          {booking.movie}
                        </h3>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center text-neutral-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{new Date(booking.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-neutral-600">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{booking.time}</span>
                          </div>
                          <div className="flex items-center text-neutral-600">
                            <Film className="h-4 w-4 mr-2" />
                            <span>{booking.hall}</span>
                          </div>
                          <div className="flex items-center text-neutral-600">
                            <Ticket className="h-4 w-4 mr-2" />
                            <span>Seats: {booking.seats.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                      <span 
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-primary-900 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm py-2 px-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm py-2 px-3"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-primary-900 mb-4">Change Password</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm py-2 px-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm py-2 px-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm py-2 px-3"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;