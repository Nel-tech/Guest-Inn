import { useState,useEffect} from 'react';
import ContactPage from './contact-page';
import {
  Wifi,
  Clock,
  Coffee,
  MapPin,
  Car,
  Dumbbell,
  Users,
} from 'lucide-react';

import DashboardFooter from './footer';

const roomCategories = [
  'Single Rooms',
  'Shared Rooms',
  'Family Rooms',
  'Premium Rooms',
];

const featuredRooms = [
  {
    name: 'Deluxe Suite',
    price: 120,
    description: 'Cozy, spacious suite with all amenities.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Standard Single',
    price: 80,
    description: 'Comfortable room for solo travelers.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Family Room',
    price: 150,
    description: 'Spacious room for families or groups.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Premium Double',
    price: 130,
    description: 'Luxurious room with a beautiful view.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Deluxe Suite',
    price: 120,
    description: 'Cozy, spacious suite with all amenities.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Standard Single',
    price: 80,
    description: 'Comfortable room for solo travelers.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Family Room',
    price: 150,
    description: 'Spacious room for families or groups.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Premium Double',
    price: 130,
    description: 'Luxurious room with a beautiful view.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Deluxe Suite',
    price: 120,
    description: 'Cozy, spacious suite with all amenities.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Standard Single',
    price: 80,
    description: 'Comfortable room for solo travelers.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Family Room',
    price: 150,
    description: 'Spacious room for families or groups.',
    image: '/assets/roomie.jpg',
  },
  {
    name: 'Premium Double',
    price: 130,
    description: 'Luxurious room with a beautiful view.',
    image: '/assets/roomie.jpg',
  },
];

const testimonials = [
  {
    name: 'Jane Doe',
    rating: 5,
    review:
      'Absolutely loved my stay here! The staff were friendly, and the rooms were immaculate.',
  },
  {
    name: 'Jane Doe',
    rating: 5,
    review:
      'Absolutely loved my stay here! The staff were friendly, and the rooms were immaculate.',
  },
  {
    name: 'John Smith',
    rating: 4,
    review:
      'Great experience overall. The location is perfect, and the breakfast was delicious.',
  },
];

const faqItems = [
  {
    question: 'What is the cancellation policy?',
    answer: 'Cancellations are free up to 24 hours before check-in.',
  },
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is from 2 PM, and check-out is until 11 AM.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept credit cards, debit cards, and cash payments.',
  },
];



const useTabState = (initialTab) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  return { activeTab, setActiveTab };
};

export default function UniversityGuestHouse() {
  const { activeTab, setActiveTab } = useTabState(roomCategories[0]);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header Section */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-400">
            University Guest House
          </div>

          {/* Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <a href="#" className="text-gray-300 hover:text-green-400">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400">
              About Us
            </a>
          
            <a href="#" className="text-gray-300 hover:text-green-400">
              Contact Us
            </a>
          </nav>

          {/* Login Button */}
          <button className="rounded bg-green-400 px-4 py-2 text-black transition duration-300 hover:bg-green-500">
            Login / Sign Up
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center bg-[url('./assets/roomie.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-5xl font-bold text-green-400 md:text-7xl">
            Welcome to University Guest House
          </h1>
          <p className="mb-8 text-xl text-gray-300">
            Experience comfort and convenience like never before.
          </p>
          <button className="rounded bg-green-400 px-6 py-3 text-xl font-semibold text-black shadow-lg transition duration-300 hover:bg-green-500">
            Explore Rooms
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-4xl font-bold text-green-400">
            About the Guest House
          </h2>
          <p className="mb-6 text-xl text-gray-300">
            Our guest house offers a blend of luxury, comfort, and convenience
            with close proximity to campus and major landmarks. Enjoy
            complimentary breakfast, free Wi-Fi, and exceptional hospitality
            during your stay.
          </p>

          <div className="flex justify-center space-x-6">
            <div className="flex h-56 w-56 flex-col justify-center rounded-lg bg-[#27272a]">
              <Wifi className="mx-auto h-20 w-20 text-green-400" />
              <p className="mt-2 text-xl font-semibold text-gray-300">
                Free Wi-Fi
              </p>
            </div>
            <div className="flex h-56 w-56 flex-col justify-center rounded-lg bg-[#27272a]">
              <Clock className="mx-auto h-20 w-20 text-green-400" />
              <p className="mt-2 text-xl font-semibold text-gray-300">
                24/7 Reception
              </p>
            </div>
            <div className="flex h-56 w-56 flex-col justify-center rounded-lg bg-[#27272a]">
              <Coffee className="mx-auto h-20 w-20 text-green-400" />
              <p className="mt-2 text-xl font-semibold text-gray-300">
                Breakfast
              </p>
            </div>
            <div className="flex h-56 w-56 flex-col justify-center rounded-lg bg-[#27272a]">
              <MapPin className="mx-auto h-20 w-20 text-green-400" />
              <p className="mt-2 text-xl font-semibold text-gray-300">
                Near Campus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-green-400">
            Our Rooms
          </h2>
          <div className="mb-6 flex overflow-x-auto pb-2">
            {roomCategories.map((category) => (
              <button
                key={category}
                className={`mr-2 flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  {
                    true: 'bg-green-400 text-black',
                    false: 'bg-zinc-700 text-gray-300',
                  }[activeTab === category]
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredRooms.map((room) => (
              <div
                key={room.name}
                className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg"
              >
                <img
                  src={room.image || './assets/roomie.jpg'}
                  alt={room.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-green-400">
                    {room.name}
                  </h3>
                  <p className="mb-2 text-gray-400">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-green-400">
                      ${room.price}/night
                    </span>
                    <button className="rounded bg-green-400 px-4 py-2 text-black transition duration-300 hover:bg-green-500">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-green-400">
            Facilities & Services
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:max-w-[65rem] lg:grid-cols-4">
              <div className="flex h-56 w-56 flex-col justify-center rounded-lg bg-[#27272a]">
                <Car className="mx-auto h-20 w-20 text-green-400" />
                <p className="mt-2 text-center text-xl font-semibold text-gray-300">
                  Parking
                </p>
              </div>
              <div className="flex h-56 w-56 flex-col justify-center rounded-lg bg-[#27272a]">
                <Dumbbell className="mx-auto h-20 w-20 text-green-400" />
                <p className="mt-2 text-center text-xl font-semibold text-gray-300">
                  Gym
                </p>
              </div>
              <div className="flex h-56 w-56 flex-col justify-center rounded-lg bg-[#27272a]">
                <Users className="mx-auto h-20 w-20 text-green-400" />
                <p className="mt-2 text-center text-xl font-semibold text-gray-300">
                  Meeting Rooms
                </p>
              </div>
              <div className="flex h-56 w-56 flex-col justify-center rounded-lg bg-[#27272a]">
                <Clock className="mx-auto h-20 w-20 text-green-400" />
                <p className="mt-2 text-center text-xl font-semibold text-gray-300">
                  Laundry Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-4xl font-bold text-green-400">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-lg bg-zinc-800 p-6"
              >
                <p className="mb-4 text-gray-300">"{testimonial.review}"</p>
                <div className="font-bold text-green-400">
                  {testimonial.name}
                </div>
                <div className="text-yellow-500">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-green-400">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details key={index} className="rounded bg-zinc-800 p-4">
                <summary className="cursor-pointer text-lg font-semibold text-green-400">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactPage />

      <DashboardFooter />
    </div>
  );
}
