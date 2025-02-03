import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { featuredRooms } from "../../Mocks/Data";

function Intro() {
  const { roomId } = useParams();
  const room = featuredRooms.find(
    (room) => room.name.replace(/\s+/g, "-").toLowerCase() === roomId
  );

  if (!room) {
    return <p className="text-center text-red-500">Room not found!</p>;
  }

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="mt-[10rem]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between">
        {/* Room Info */}
        <div className="w-full rounded-xl bg-zinc-800 p-4 shadow-lg lg:w-1/2 lg:p-6">
          <h1 className="text-3xl font-bold text-blue-400 md:text-4xl">
            {room.name}
          </h1>
          <p className="mt-4 text-sm text-gray-300 md:text-base">
            {room.description}
          </p>

         
          <div className="mt-4 space-y-2 text-sm md:text-base text-gray-300">
            <p>
              <strong className="text-blue-400">Bed Type:</strong> {room.bed}
            </p>
            <p>
              <strong className="text-blue-400">Room Size:</strong> {room.size} sqft
            </p>
            <p>
              <strong className="text-blue-400">Rating:</strong> ⭐ {room.rating}/5
            </p>
          </div>

         
          <ul className="mt-6 space-y-2">
            {room.facilities.map((facility, index) => (
              <li key={index} className="flex items-center text-white gap-2 text-sm md:text-base">
                <span className="text-blue-400">✔</span>
                {facility}
              </li>
            ))}
          </ul>

          <div className="mt-6 text-lg font-semibold md:text-xl">
          <span className="text-white"><span className="text-blue-400">${room.price}</span> / night</span>  
          </div>
          <button className="mt-6 w-full rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition-colors hover:bg-blue-600 md:w-auto">
            Book Now
          </button>
        </div>

        {/* Image Slider */}
        <div className="w-full lg:w-1/2">
          <div className="h-full rounded-xl shadow-lg">
            <Slider {...settings} className="h-full">
              <div className="h-full">
                <img
                  src="/assets/roomie.jpg"
                  className="h-[28rem] w-full rounded-xl object-cover object-center"
                  alt="Room 1"
                />
              </div>
              <div className="h-full">
                <img
                  src="/assets/roomie.jpg"
                  className="h-[28rem] w-full rounded-xl object-cover object-center"
                  alt="Room 2"
                />
              </div>
              <div className="h-full">
                <img
                  src="/assets/roomie.jpg"
                  className="h-[28rem] w-full rounded-xl object-cover object-center"
                  alt="Room 3"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
