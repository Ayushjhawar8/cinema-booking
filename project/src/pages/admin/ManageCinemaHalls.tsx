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
  CheckCircle,
  XCircle,
  Sofa
} from 'lucide-react';

// Mock cinema hall data
const mockCinemaHalls = [
  {
    id: '1',
    name: 'Grand IMAX',
    totalSeats: 280,
    type: 'IMAX',
    isActive: true,
  },
  {
    id: '2',
    name: 'Silver Screen 1',
    totalSeats: 180,
    type: 'Standard',
    isActive: true,
  },
  {
    id: '3',
    name: 'Silver Screen 2',
    totalSeats: 180,
    type: 'Standard',
    isActive: true,
  },
  {
    id: '4',
    name: 'VIP Lounge',
    totalSeats: 60,
    type: 'Premium',
    isActive: true,
  },
  {
    id: '5',
    name: 'Digital Theater 1',
    totalSeats: 150,
    type: '3D',
    isActive: false,
  },
];

const ManageCinemaHalls = () => {
  const [cinemaHalls] = useState(mockCinemaHalls);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Filter cinema halls based on search term
  const filteredHalls = cinemaHalls.filter(hall => 
    hall.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hall.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredHalls.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHalls = filteredHalls.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-display font-bold text-primary-900">Manage Cinema Halls</h1>
        <button 
          className="bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Hall</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search cinema halls..."
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
            <select className="px-4 py-2 rounded-md border border-neutral-300 bg-white">
              <option value="all">All Types</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="imax">IMAX</option>
              <option value="3d">3D</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cinema Halls Table */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Hall Name</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Type</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Total Seats</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Status</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentHalls.map((hall) => (
                <tr key={hall.id} className="border-t border-neutral-100 hover:bg-neutral-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-100 rounded-lg p-2">
                        <Sofa className="h-5 w-5 text-primary-700" />
                      </div>
                      <span className="font-medium text-primary-900">{hall.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span 
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        hall.type === 'IMAX' ? 'bg-purple-100 text-purple-700' :
                        hall.type === 'Premium' ? 'bg-secondary-100 text-secondary-700' :
                        hall.type === '3D' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}
                    >
                      {hall.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-neutral-700">{hall.totalSeats} seats</td>
                  <td className="py-4 px-6">
                    {hall.isActive ? (
                      <span className="inline-flex items-center gap-1 text-green-700 bg-green-100 px-2 py-1 rounded text-sm">
                        <CheckCircle className="h-4 w-4" />
                        <span>Active</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-red-700 bg-red-100 px-2 py-1 rounded text-sm">
                        <XCircle className="h-4 w-4" />
                        <span>Inactive</span>
                      </span>
                    )}
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
            Showing {startIndex + 1} to {Math.min(endIndex, filteredHalls.length)} of {filteredHalls.length} cinema halls
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

export default ManageCinemaHalls;