import {
  Wifi,
  Clock,
  Coffee,
  MapPin,
} from 'lucide-react';

function HomeAbout() {
  return (
    <div> <section  className="px-4 py-16 mt-[8rem]">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-blue-400 sm:text-5xl">
            About the Guest House
          </h2>
          <p className="mb-6 text-white mx-auto text-lg max-w-[60rem]  sm:text-xl">
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
</div>
  )
}

export default HomeAbout