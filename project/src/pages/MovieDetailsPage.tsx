import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Film } from 'lucide-react';

// This is a placeholder component - replace with actual data fetching and UI when available
const MovieDetailsPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  
  // Placeholder movie data - replace with actual API call
  const [movie, setMovie] = useState({
    id: id,
    title: 'Movie Title',
    poster: 'https://via.placeholder.com/500x750',
    releaseDate: '2023',
    duration: '120 min',
    genre: 'Action, Adventure',
    director: 'Director Name',
    cast: 'Actor 1, Actor 2, Actor 3',
    description: 'This is a placeholder description for the movie. Replace this with the actual movie description from your API or database.',
    rating: 4.5,
  });

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    // In a real implementation, fetch movie data here
    // Example: fetchMovieDetails(id).then(data => setMovie(data));
    
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-500">Loading movie details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Movie Poster */}
        <div className="md:col-span-1">
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        {/* Movie Details */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{movie.releaseDate}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>{movie.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Film className="w-5 h-5 mr-2" />
              <span>{movie.genre}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
            <p className="text-gray-700">{movie.description}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Cast & Crew</h2>
            <p className="text-gray-700"><span className="font-medium">Director:</span> {movie.director}</p>
            <p className="text-gray-700"><span className="font-medium">Cast:</span> {movie.cast}</p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Available Showtimes</h2>
            <p className="text-gray-500 mb-4">Select a showtime to book tickets</p>
            
            {/* Placeholder for showtimes - replace with actual data */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map(index => (
                <Link 
                  key={index}
                  to={`/booking/showtime-${index}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md transition duration-300"
                >
                  7:30 PM
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;