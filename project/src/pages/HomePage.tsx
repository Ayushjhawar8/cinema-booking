import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import NowShowing from '../components/home/NowShowing';
import { ArrowRight, Film, Calendar, CreditCard, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />
      
      {/* Now Showing Movies */}
      <NowShowing />
      
      {/* How to Book */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">How to Book Tickets</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Booking movie tickets with CineWorld is simple and convenient. Follow these easy steps to secure your perfect movie experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg text-center transition-all hover:shadow-lg">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Film className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-primary-900">Choose a Movie</h3>
              <p className="text-neutral-600 mb-4">
                Browse our selection of the latest movies and pick the one you want to watch.
              </p>
              <div className="w-8 h-1 bg-secondary-500 mx-auto"></div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg text-center transition-all hover:shadow-lg">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-primary-900">Select Showtime</h3>
              <p className="text-neutral-600 mb-4">
                Choose your preferred date and time from the available showtimes.
              </p>
              <div className="w-8 h-1 bg-secondary-500 mx-auto"></div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg text-center transition-all hover:shadow-lg">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Ticket className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-primary-900">Pick Your Seats</h3>
              <p className="text-neutral-600 mb-4">
                Choose your preferred seats from our interactive seating plan.
              </p>
              <div className="w-8 h-1 bg-secondary-500 mx-auto"></div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg text-center transition-all hover:shadow-lg">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-primary-900">Complete Payment</h3>
              <p className="text-neutral-600 mb-4">
                Make a secure payment and receive your e-ticket instantly.
              </p>
              <div className="w-8 h-1 bg-secondary-500 mx-auto"></div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/movies" 
              className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white px-6 py-3 rounded-md transition-colors font-medium"
            >
              <span>Browse Movies</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Cinema Experience */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 leading-tight">
                Experience Cinema Like Never Before
              </h2>
              <p className="text-neutral-300 mb-8">
                Our state-of-the-art cinema halls feature the latest in audio-visual technology, 
                comfortable seating, and immersive environments to make your movie experience 
                truly memorable.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary-500 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Dolby Atmos Sound</h3>
                    <p className="text-neutral-400 text-sm">
                      Immersive audio technology that places sounds anywhere in the room, including overhead.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary-500 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">4K Laser Projection</h3>
                    <p className="text-neutral-400 text-sm">
                      Crystal clear images with vibrant colors and exceptional contrast.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary-500 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Premium Recliners</h3>
                    <p className="text-neutral-400 text-sm">
                      Ultra-comfortable seating with ample legroom and power recline.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary-500 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Gourmet Concessions</h3>
                    <p className="text-neutral-400 text-sm">
                      Premium food and beverage options beyond traditional popcorn and soda.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:order-first">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7991379/pexels-photo-7991379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Premium Cinema Experience" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;