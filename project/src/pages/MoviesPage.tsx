import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  // This is a placeholder component for the movies page
  // In a real implementation, we would fetch movies from an API
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching movies data
    setTimeout(() => {
      setMovies([
        { id: 1, title: 'Sample Movie 1', poster: '/placeholder.jpg', rating: 4.5 },
        { id: 2, title: 'Sample Movie 2', poster: '/placeholder.jpg', rating: 3.8 },
        { id: 3, title: 'Sample Movie 3', poster: '/placeholder.jpg', rating: 4.2 }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Now Showing</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">Loading movies...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(movie => (
            <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{movie.rating}/5</span>
                </div>
                <Link 
                  to={`/movies/${movie.id}`} 
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;