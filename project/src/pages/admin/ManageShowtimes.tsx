import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash, 
  Filter, 
  Eye,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Film,
  Sofa
} from 'lucide-react';

// Mock showtime data
const mockShowtimes = [
  {
    id: '1',
    movie: 'Interstellar Journey',
    hall: 'Grand IMAX',
    date: '2023-11-28',
    startTime: '14:30',
    endTime: '17:15',
    availableSeats: 180,
    totalSeats: 280,
  },
  {
    id: '2',
    movie: 'Interstellar Journey',
    hall: 'Grand IMAX',
    date: '2023-11-28',
    startTime: '19:00',
    endTime: '21:45',
    availableSeats: 120,
    totalSeats: 280,
  },
  {
    id: '3',
    movie: 'Midnight Symphony',
    hall: 'Silver Screen 1',
    date: '2023-11-28',
    startTime: '16:00',
    endTime: '18:08',
    availableSeats: 160,
    totalSeats: 180,
  },
  {
    id: '4',
    movie: 'The Last Frontier',
    hall: 'VIP Lounge',
    date: '2023-11-29',
    startTime: '20:15',
    endTime: '22:47',
    availableSeats: 42,
    totalSeats: 60,
  },
  {
    id: '5',
    movie: 'Urban Legends',
    hall: 'Silver Screen 2',
    date: '2023-11-29',
    startTime: '18:30',
    endTime: '20:25',
    availableSeats: 175,
    totalSeats: 180,
  },
];

const ManageShowtimes = () => {
  const [showtimes] = useState(mockShowtimes);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedDate, setSelectedDate] = useState('all');

  // Filter showtimes based on search term and date
  const filteredShowtimes = showtimes.filter(showtime => {
    const matchesSearch = 
      showtime.movie.toLowerCase().includes(searchTerm.toLowerCase()) ||
      showtime.hall.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDate = selectedDate === 'all' || showtime.date === selectedDate;
    
    return matchesSearch && matchesDate;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredShowtimes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentShowtimes = filteredShowtimes.slice(startIndex, endIndex);

  // Get unique dates for the filter
  const uniqueDates = Array.from(new Set(showtimes.map(showtime => showtime.date)))
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-display font-bold text-primary-900">Manage Showtimes</h1>
        <button 
          className="bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Showtime</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search showtimes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 transition-colors">
              <Filter className="h-4 w-4 text-neutral-500" />
              <span>Filter</span>
            </button>
            <select 
              className="px-4 py-2 rounded-md border border-neutral-300 bg-white"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="all">All Dates</option>
              {uniqueDates.map(date => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Showtimes Table */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Movie</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Hall</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Date</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Time</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Seat Availability</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentShowtimes.map((showtime) => (
                <tr key={showtime.id} className="border-t border-neutral-100 hover:bg-neutral-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-100 rounded-lg p-2">
                        <Film className="h-5 w-5 text-primary-700" />
                      </div>
                      <span className="font-medium text-primary-900">{showtime.movie}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Sofa className="h-4 w-4 text-neutral-500" />
                      <span className="text-neutral-700">{showtime.hall}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-neutral-500" />
                      <span className="text-neutral-700">
                        {new Date(showtime.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-neutral-500" />
                      <span className="text-neutral-700">{showtime.startTime} - {showtime.endTime}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-neutral-600">
                          {showtime.availableSeats} / {showtime.totalSeats}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {Math.round((showtime.availableSeats / showtime.totalSeats) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            (showtime.availableSeats / showtime.totalSeats) > 0.7
                              ? 'bg-green-500'
                              : (showtime.availableSeats / showtime.totalSeats) > 0.3
                              ? 'bg-orange-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${(showtime.availableSeats / showtime.totalSeats) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button 
                        className="text-neutral-500 hover:text-primary-700 transition-colors p-1"
                        title="View"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button 
                        className="text-neutral-500 hover:text-primary-700 transition-colors p-1"
                        title="Edit"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button 
                        className="text-neutral-500 hover:text-red-700 transition-colors p-1"
                        title="Delete"
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-neutral-100">
          <div className="text-sm text-neutral-600">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredShowtimes.length)} of {filteredShowtimes.length} showtimes
          </div>
          <div className="flex items-center gap-2">
            <button 
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="px-3 py-1 rounded-md bg-primary-700 text-white">{currentPage}</span>
            <button 
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageShowtimes;