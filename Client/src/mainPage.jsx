
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

// import DashboardFooter from './footer';
// import NavBar from './Navbar';
import { testimonials,faqItems } from './Mocks/Data';






export default function UniversityGuestHouse() {
 
  
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header Section */}
    {/* <NavBar/> */}

      {/* Hero Section */}
      <section id="home" className="relative flex h-screen items-center justify-center bg-[url('./assets/roomie.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-blue-400 sm:text-6xl md:text-7xl">
            Welcome to University Guest House
          </h1>
          <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
            Experience comfort and convenience like never before.
          </p>
          <button className="rounded bg-blue-400 px-6 py-3 text-xl font-semibold text-black shadow-lg transition duration-300 hover:bg-blue-500">
            Explore Rooms
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-blue-400 sm:text-5xl">
            About the Guest House
          </h2>
          <p className="mb-6 text-lg text-gray-300 sm:text-xl">
            Our guest house offers a blend of luxury, comfort, and convenience
            with close proximity to campus and major landmarks. Enjoy
            complimentary breakfast, free Wi-Fi, and exceptional hospitality
            during your stay.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex h-56 flex-col items-center justify-center rounded-lg bg-[#27272a]">
              <Wifi className="h-20 w-20 text-blue-400" />
              <p className="mt-2 text-xl font-semibold text-gray-300">
                Free Wi-Fi
              </p>
            </div>
            <div className="flex h-56 flex-col items-center justify-center rounded-lg bg-[#27272a]">
              <Clock className="h-20 w-20 text-blue-400" />
              <p className="mt-2 text-xl font-semibold text-gray-300">
                24/7 Reception
              </p>
            </div>
            <div className="flex h-56 flex-col items-center justify-center rounded-lg bg-[#27272a]">
              <Coffee className="h-20 w-20 text-blue-400" />
              <p className="mt-2 text-xl font-semibold text-gray-300">
                Breakfast
              </p>
            </div>
            <div className="flex h-56 flex-col items-center justify-center rounded-lg bg-[#27272a]">
              <MapPin className="h-20 w-20 text-blue-400" />
              <p className="mt-2 text-xl font-semibold text-gray-300">
                Near Campus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Categories */}
     

      {/* Facilities Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-4xl font-bold text-blue-400 sm:text-5xl">
            Facilities & Services
          </h2>
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-[65rem] lg:grid-cols-4">
            <div className="flex h-56 flex-col items-center justify-center rounded-lg bg-[#27272a]">
              <Car className="h-20 w-20 text-blue-400" />
              <p className="mt-2 text-center text-xl font-semibold text-gray-300">
                Parking
              </p>
            </div>
            <div className="flex h-56 flex-col items-center justify-center rounded-lg bg-[#27272a]">
              <Dumbbell className="h-20 w-20 text-blue-400" />
              <p className="mt-2 text-center text-xl font-semibold text-gray-300">
                Gym
              </p>
            </div>
            <div className="flex h-56 flex-col items-center justify-center rounded-lg bg-[#27272a]">
              <Users className="h-20 w-20 text-blue-400" />
              <p className="mt-2 text-center text-xl font-semibold text-gray-300">
                Meeting Rooms
              </p>
            </div>
            <div className="flex h-56 flex-col items-center justify-center rounded-lg bg-[#27272a]">
              <Clock className="h-20 w-20 text-blue-400" />
              <p className="mt-2 text-center text-xl font-semibold text-gray-300">
                Laundry Services
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-blue-400 sm:text-4xl">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-lg bg-zinc-800 p-6 shadow-lg"
              >
                <p className="mb-4 text-gray-300">{testimonial.review}</p>
                <div className="font-bold text-blue-400">
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
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-400 sm:text-4xl">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details
                key={index}
                className="rounded bg-zinc-800 p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
              >
                <summary className="cursor-pointer text-lg font-semibold text-blue-400">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactPage />
      {/* <DashboardFooter/> */}
    </div>
  );
}