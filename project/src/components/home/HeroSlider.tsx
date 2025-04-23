import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { SliderImage } from '../../types';

// Sample slider data
const sliderData: SliderImage[] = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Interstellar Journey',
    subtitle: 'A thrilling space adventure that transcends time and space',
    link: '/movies/interstellar',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Midnight Symphony',
    subtitle: 'A musical drama that will touch your heart',
    link: '/movies/midnight-symphony',
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'The Last Frontier',
    subtitle: 'An epic western tale of survival and redemption',
    link: '/movies/last-frontier',
  },
];

const HeroSlider = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="h-screen bg-primary-900 flex items-center justify-center">
        <div className="animate-pulse-slow text-white">Loading amazing movies...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="h-full w-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-primary-900/20" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-6 animate-fade-in">
                <div className="max-w-3xl mx-auto md:mx-0">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-200 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={slide.link}
                      className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <Play className="h-5 w-5" />
                      <span>Watch Trailer</span>
                    </Link>
                    <Link
                      to={`${slide.link}#showtimes`}
                      className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Book Tickets</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;