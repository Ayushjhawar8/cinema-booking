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
  XCircle
} from 'lucide-react';

// Mock movie data
const mockMovies = [
  {
    id: '1',
    title: 'Interstellar Journey',
    genre: ['Sci-Fi', 'Adventure'],
    director: 'Christopher Johnson',
    releaseDate: '2023-11-15',
    duration: 165,
    isActive: true,
  },
  {
    id: '2',
    title: 'Midnight Symphony',
    genre: ['Drama', 'Music'],
    director: 'Sophie Williams',
    releaseDate: '2023-12-01',
    duration: 128,
    isActive: true,
  },
  {
    id: '3',
    title: 'The Last Frontier',
    genre: ['Western', 'Action'],
    director: 'Robert Miller',
    releaseDate: '2023-10-20',
    duration: 152,
    isActive: true,
  },
  {
    id: '4',
    title: 'Urban Legends',
    genre: ['Thriller', 'Mystery'],
    director: 'Emily Davis',
    releaseDate: '2023-09-08',
    duration: 115,
    isActive: false,
  },
  {
    id: '5',
    title: 'Lost in Translation',
    genre: ['Comedy', 'Drama'],
    director: 'Sofia Coppola',
    releaseDate: '2023-08-15',
    duration: 122,
    isActive: true,
  },
];

const ManageMovies = () => {
  const [movies] = useState(mockMovies);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Filter movies based on search term
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.director.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = filteredMovies.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-display font-bold text-primary-900">Manage Movies</h1>
        <button 
          className="bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Movie</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search movies..."
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
              <option value="all">All Movies</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Movies Table */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Title</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Genre</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Director</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Release Date</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Duration</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Status</th>
                <th className="text-left py-4 px-6 text-neutral-500 font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentMovies.map((movie) => (
                <tr key={movie.id} className="border-t border-neutral-100 hover:bg-neutral-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-medium text-primary-900">{movie.title}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-1">
                      {movie.genre.map((g) => (
                        <span 
                          key={g} 
                          className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-neutral-700">{movie.director}</td>
                  <td className="py-4 px-6 text-neutral-700">
                    {new Date(movie.releaseDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 text-neutral-700">
                    {Math.floor(movie.duration / 60)}h {movie.duration % 60}m
                  </td>
                  <td className="py-4 px-6">
                    {movie.isActive ? (
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
            Showing {startIndex + 1} to {Math.min(endIndex, filteredMovies.length)} of {filteredMovies.length} movies
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

export default ManageMovies;