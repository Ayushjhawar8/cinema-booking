import React from 'react';
import { 
  UsersRound, 
  Ticket, 
  Film, 
  Calendar, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  BarChart4
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock data for dashboard
  const stats = [
    { 
      title: 'Total Bookings', 
      value: '1,284', 
      change: '+12.5%', 
      isPositive: true,
      icon: <Ticket className="h-7 w-7 text-primary-700" /> 
    },
    { 
      title: 'Revenue', 
      value: '$24,389', 
      change: '+18.2%', 
      isPositive: true,
      icon: <DollarSign className="h-7 w-7 text-secondary-600" /> 
    },
    { 
      title: 'Active Movies', 
      value: '24', 
      change: '+4', 
      isPositive: true,
      icon: <Film className="h-7 w-7 text-accent-600" /> 
    },
    { 
      title: 'New Users', 
      value: '92', 
      change: '-2.4%', 
      isPositive: false,
      icon: <Users className="h-7 w-7 text-primary-700" /> 
    },
  ];

  // Mock data for upcoming premiers
  const upcomingPremiers = [
    { id: 1, title: 'Cosmic Odyssey', date: '2023-12-15', sales: 245 },
    { id: 2, title: 'Midnight in Paris', date: '2023-12-22', sales: 189 },
    { id: 3, title: 'The Lost Kingdom', date: '2023-12-29', sales: 210 },
  ];

  // Mock data for recent bookings
  const recentBookings = [
    { id: 'B001', user: 'John Smith', movie: 'Interstellar Journey', amount: '$42', status: 'completed', date: '2023-11-28' },
    { id: 'B002', user: 'Emma Johnson', movie: 'Midnight Symphony', amount: '$36', status: 'completed', date: '2023-11-28' },
    { id: 'B003', user: 'Michael Brown', movie: 'The Last Frontier', amount: '$54', status: 'completed', date: '2023-11-27' },
    { id: 'B004', user: 'Sarah Wilson', movie: 'Urban Legends', amount: '$42', status: 'cancelled', date: '2023-11-27' },
    { id: 'B005', user: 'David Taylor', movie: 'Interstellar Journey', amount: '$42', status: 'pending', date: '2023-11-26' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-primary-900 mb-2">Dashboard</h1>
        <p className="text-neutral-600">Welcome back to the admin dashboard.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-neutral-500 text-sm mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-primary-900">{stat.value}</h3>
              </div>
              <div className="bg-primary-50 p-3 rounded-lg">
                {stat.icon}
              </div>
            </div>
            <div className={`flex items-center mt-4 text-sm ${
              stat.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.isPositive ? 
                <TrendingUp className="h-4 w-4 mr-1" /> : 
                <TrendingDown className="h-4 w-4 mr-1" />
              }
              <span>{stat.change} from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2 border border-neutral-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-semibold text-primary-900">Revenue Overview</h3>
            <select className="text-sm border border-neutral-300 rounded-md px-3 py-1.5">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <div className="aspect-[16/9] bg-neutral-50 rounded-lg flex items-center justify-center">
            <BarChart4 className="h-24 w-24 text-neutral-300" />
            <span className="ml-4 text-neutral-500">Revenue chart visualization</span>
          </div>
        </div>

        {/* Upcoming Premiers */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
          <h3 className="font-display font-semibold text-primary-900 mb-4">Upcoming Premiers</h3>
          <div className="space-y-4">
            {upcomingPremiers.map((movie) => (
              <div key={movie.id} className="flex items-center border-b border-neutral-100 pb-4">
                <div className="bg-primary-100 rounded-lg p-3 mr-3">
                  <Calendar className="h-5 w-5 text-primary-700" />
                </div>
                <div className="flex-1">
                  <p className="text-primary-900 font-medium">{movie.title}</p>
                  <p className="text-neutral-500 text-sm">
                    {new Date(movie.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="bg-secondary-100 rounded-lg px-3 py-1">
                  <span className="text-secondary-800 text-sm font-medium">{movie.sales} pre-sales</span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-primary-700 hover:text-primary-800 transition-colors text-sm font-medium">
            View All Upcoming Movies
          </button>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display font-semibold text-primary-900">Recent Bookings</h3>
          <button className="text-primary-700 hover:text-primary-800 transition-colors text-sm font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-left">
              <tr className="border-b border-neutral-200">
                <th className="pb-3 text-neutral-500 font-medium text-sm">Booking ID</th>
                <th className="pb-3 text-neutral-500 font-medium text-sm">User</th>
                <th className="pb-3 text-neutral-500 font-medium text-sm">Movie</th>
                <th className="pb-3 text-neutral-500 font-medium text-sm">Amount</th>
                <th className="pb-3 text-neutral-500 font-medium text-sm">Status</th>
                <th className="pb-3 text-neutral-500 font-medium text-sm">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                  <td className="py-4 text-primary-900 font-medium">{booking.id}</td>
                  <td className="py-4 text-neutral-800">{booking.user}</td>
                  <td className="py-4 text-neutral-800">{booking.movie}</td>
                  <td className="py-4 text-neutral-800">{booking.amount}</td>
                  <td className="py-4">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      booking.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      booking.status === 'pending' ? 'bg-blue-100 text-blue-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 text-neutral-500 text-sm">{booking.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;