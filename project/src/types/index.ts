export interface Movie {
  _id?: string;
  title: string;
  description: string;
  releaseDate: string;
  duration: number; // in minutes
  genre: string[];
  rating: string;
  director: string;
  cast: string[];
  posterUrl: string;
  bannerUrl: string;
  trailerUrl: string;
  isActive: boolean;
}

export interface CinemaHall {
  _id?: string;
  name: string;
  totalSeats: number;
  rows: number;
  seatsPerRow: number;
  seatMap: SeatMap;
}

export interface SeatMap {
  [row: string]: {
    [seat: number]: {
      type: 'regular' | 'premium' | 'vip' | 'disabled';
      isAvailable: boolean;
    };
  };
}

export interface Showtime {
  _id?: string;
  movieId: string;
  hallId: string;
  startTime: string;
  endTime: string;
  date: string;
  price: {
    regular: number;
    premium: number;
    vip: number;
  };
}

export interface Booking {
  _id?: string;
  userId: string;
  showtimeId: string;
  seats: {
    row: string;
    seatNumber: number;
    type: 'regular' | 'premium' | 'vip';
  }[];
  totalAmount: number;
  bookingDate: string;
  status: 'confirmed' | 'cancelled' | 'pending';
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  phone?: string;
  bookings?: string[];
}

export interface SliderImage {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  link: string;
}