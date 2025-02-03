import { useState } from 'react';
import { featuredRooms } from '../../../Mocks/Data';
import { Link } from 'react-router-dom';
const roomCategories = [
  'All',
  'Single Rooms',
  'Shared Rooms',
  'Family Rooms',
  'Premium Rooms',
  'Suites',
];



function Explore() {
  const [activeTab, setActiveTab] = useState('All');

  // Filter rooms based on selected category
  const filteredRooms = activeTab === 'All' 
    ? featuredRooms 
    : featuredRooms.filter((room) => room.name === activeTab);

  return (
    <div>
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-4xl font-bold text-blue-400 sm:text-5xl">
            Our Rooms
          </h2>

          {/* Category Filter */}
          <div className="mb-6 flex flex-wrap gap-2 sm:justify-center">
            {roomCategories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === category
                    ? 'bg-blue-400 text-black'
                    : 'bg-zinc-700 text-gray-300'
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>

         
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <div key={index} className=" mx-auto overflow-hidden rounded-lg bg-zinc-800 shadow-lg">
                  <img
                    src={room.image || './assets/roomie.jpg'}
                    alt={room.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-semibold text-blue-400">{room.name}</h3>
                    <p className="mb-2 text-gray-400">{room.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-400">${room.price}/night</span>
                      <Link
                to={`/room-details/${room.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                View Details
              </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">No rooms found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
