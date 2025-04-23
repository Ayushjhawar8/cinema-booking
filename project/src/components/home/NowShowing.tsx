import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CalendarCheck, Star } from 'lucide-react';

const mockMovies = [
  {
    id: '1',
    title: 'Interstellar Journey',
    posterUrl: 'https://images.pexels.com/photos/8892216/pexels-photo-8892216.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 165,
    releaseDate: '2023-11-15',
    rating: 'PG-13',
    genre: ['Sci-Fi', 'Adventure'],
  },
  {
    id: '2',
    title: 'Midnight Symphony',
    posterUrl: 'https://images.pexels.com/photos/7234322/pexels-photo-7234322.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 128,
    releaseDate: '2023-12-01',
    rating: 'PG',
    genre: ['Drama', 'Music'],
  },
  {
    id: '3',
    title: 'The Last Frontier',
    posterUrl: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 152,
    releaseDate: '2023-10-20',
    rating: 'R',
    genre: ['Western', 'Action'],
  },
  {
    id: '4',
    title: 'Urban Legends',
    posterUrl: 'https://images.pexels.com/photos/7991366/pexels-photo-7991366.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 115,
    releaseDate: '2023-09-08',
    rating: 'PG-13',
    genre: ['Thriller', 'Mystery'],
  },
];

const NowShowing = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-4 md:mb-0">Now Showing</h2>
          <Link 
            to="/movies" 
            className="text-primary-700 hover:text-primary-800 transition-colors font-medium"
          >
            View All Movies
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockMovies.map((movie) => (
            <div 
              key={movie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <Link to={`/movies/${movie.id}`} className="block relative aspect-[2/3] overflow-hidden">
                <img 
                  src={movie.posterUrl} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-secondary-500 text-primary-900 px-3 py-1 text-sm font-bold">
                  {movie.rating}
                </div>
              </Link>
              <div className="p-4">
                <h3 className="font-display font-semibold text-lg text-primary-900 mb-2 line-clamp-1">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-neutral-500" />
                    <span>{Math.floor(movie.duration / 60)}h {movie.duration % 60}m</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-secondary-500" />
                    <span>4.8</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-500 mb-4">
                  <CalendarCheck className="h-3 w-3" />
                  <span>Released {new Date(movie.releaseDate).toLocaleDateString()}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.genre.map((g) => (
                    <span 
                      key={g} 
                      className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded"
                    >
                      {g}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/movies/${movie.id}`}
                  className="block w-full bg-primary-800 hover:bg-primary-900 text-white text-center py-2 rounded-md transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NowShowing;