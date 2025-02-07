import ContactPage from './contact-page';
import Footer from '../Components/footer';
import { motion } from 'framer-motion';
import NavBar from '../Components/Navbar';
import {
  Wifi,
  Utensils,
  Car,
  TrendingUp,
  Coffee,
  MapPin,
} from 'lucide-react';

const AboutUs = () => {
  const testimonials = [
    {
      name: 'Musa Ahmed',
      rating: 5,
      review:
        'Absolutely loved my stay here! The staff were friendly, and the rooms were immaculate.',
    },
    {
      name: 'Abdullahi Ojo',
      rating: 5,
      review:
        'Absolutely loved my stay here! The staff were friendly, and the rooms were immaculate.',
    },
    {
      name: 'Okpara Faith',
      rating: 4,
      review:
        'Great experience overall. The location is perfect, and the breakfast was delicious.',
    },
  ];
    return (
      <div>
        <NavBar />
        <div className="min-h-screen bg-zinc-900 text-white">
          {/* Hero Section */}

          <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="container mx-auto mt-12 max-w-6xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 text-center lg:text-left"
                >
                  <h2 className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                    Who We Are
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300 sm:text-xl">
                    Welcome to Bayero University Kano Guest Inn, where comfort
                    meets tradition. Located within the university’s serene
                    grounds, we offer a peaceful retreat for conference guests,
                    researchers, and visitors. With modern amenities and warm
                    hospitality, we ensure a relaxing and memorable stay.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300 sm:text-xl">
                    Whether you're visiting for a conference, a campus tour, or
                    simply seeking a tranquil retreat, our dedicated team
                    ensures your stay is smooth, enjoyable, and truly memorable.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-blue-600"
                  >
                   Book a room
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/assets/roomie.jpg"
                      alt="Elegant Guest Inn Interior"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-30"></div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden">
              <svg
                className="absolute left-0 top-[10%] h-[1000px] w-[1000px] -translate-x-1/2 stroke-blue-300/10 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="grid-pattern"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M0 40V.5H40" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#grid-pattern)"
                />
              </svg>
            </div>
          </section>

          {/* Facilities and Services */}
          <section className="bg-zinc-900 py-16">
            <div className="container mx-auto px-4 md:px-0">
              <h2 className="mb-12 text-center text-3xl font-bold text-blue-400">
                Our Facilities and Services
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Wifi,
                    title: 'Free High-Speed Wi-Fi',
                    desc: 'Stay connected with our fast internet.',
                  },
                  {
                    icon: Utensils,
                    title: 'On-site Dining',
                    desc: 'Enjoy meals at our cozy café.',
                  },
                  {
                    icon: Car,
                    title: 'Complimentary Parking',
                    desc: 'Hassle-free parking for all guests.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Fitness Center',
                    desc: 'Modern gym for your workout routine.',
                  },
                  {
                    icon: Coffee,
                    title: '24/7 Coffee Station',
                    desc: 'Enjoy freshly brewed coffee anytime.',
                  },
                  {
                    icon: MapPin,
                    title: 'Campus Tours',
                    desc: 'Join our daily guided tours.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-zinc-800 p-6 text-center shadow-md"
                  >
                    <div className="mb-4 flex justify-center text-blue-400">
                      <item.icon className="h-12 w-12" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
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
          <ContactPage />
          <Footer />
        </div>
      </div>
    );
};

export default AboutUs;
