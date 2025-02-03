// // import NavBar from './Navbar';
// import DashboardFooter from './Pages/Components/footer';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const RoomPage = () => {
//  const settings = {
//    dots: false, 
//    arrows: false,
//    autoplay: true, 
//    autoplaySpeed: 3000, 
//    infinite: true,
//    speed: 500,
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    adaptiveHeight: true,
//  };

//   return (
//     <div className="min-h-screen">
//       {/* <NavBar /> */}

//       {/* Main Content */}
//       <div className="container mx-auto px-4 pt-20 lg:pt-24">
//         {/* Room Info and Slider Section */}
//         <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between">
//           {/* Room Info */}
//           <div className="w-full rounded-xl bg-zinc-800 p-4 shadow-lg lg:w-1/2 lg:p-6">
//             <h1 className="text-3xl font-bold text-emerald-400 md:text-4xl">
//               Deluxe Suite
//             </h1>
//             <p className="mt-4 text-sm text-gray-300 md:text-base">
//               Experience the ultimate luxury in our Deluxe Suite. This room
//               offers a spacious king-size bed, modern amenities, and stunning
//               views of the city skyline. Perfect for a relaxing getaway or a
//               business trip.
//             </p>
//             <ul className="mt-6 space-y-2">
//               <li className="flex items-center gap-2 text-sm md:text-base">
//                 <span className="text-emerald-400">✔</span>
//                 Laundry
//               </li>
//               <li className="flex items-center gap-2 text-sm md:text-base">
//                 <span className="text-emerald-400">✔</span>
//                 Air Conditioning
//               </li>
//               <li className="flex items-center gap-2 text-sm md:text-base">
//                 <span className="text-emerald-400">✔</span>
//                 En-suite Bathroom with Bathtub
//               </li>
//               <li className="flex items-center gap-2 text-sm md:text-base">
//                 <span className="text-emerald-400">✔</span>
//                 24/7 Room Service
//               </li>
//             </ul>
//             <div className="mt-6 text-lg font-semibold md:text-xl">
//               <span className="text-emerald-400">$250</span> / night
//             </div>
//             <button className="mt-6 w-full rounded-lg bg-emerald-500 px-6 py-3 text-white shadow-lg transition-colors hover:bg-emerald-600 md:w-auto">
//               Book Now
//             </button>
//           </div>

//           {/* Image Slider */}
//           <div className="w-full lg:w-1/2">
//             <div className="h-full rounded-xl shadow-lg">
//               <Slider {...settings} className="h-full">
//                 <div className="h-full">
//                   <img
//                     src="/assets/roomie.jpg"
//                     className="h-[28rem] w-full rounded-xl object-cover object-center"
//                     alt="Room 1"
//                   />
//                 </div>
//                 <div className="h-full">
//                   <img
//                     src="/assets/roomie.jpg"
//                     className="h-[28rem] w-full rounded-xl object-cover object-center"
//                     alt="Room 2"
//                   />
//                 </div>
//                 <div className="h-full">
//                   <img
//                     src="/assets/roomie.jpg"
//                     className="h-[28rem] w-full rounded-xl object-cover object-center"
//                     alt="Room 3"
//                   />
//                 </div>
//               </Slider>
//             </div>
//           </div>
//         </div>

//         {/* Reviews and Booking Section */}
//         <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:justify-between">
//           {/* Reviews Section */}
//           <div className="w-full rounded-xl bg-zinc-800 p-4 lg:w-3/5 lg:p-6">
//             <h2 className="text-2xl font-bold text-emerald-400">
//               Guest Reviews
//             </h2>
//             <div className="mt-6 space-y-4">
//               {/* Review Cards */}
//               {[
//                 {
//                   name: 'Jane Doe',
//                   review:
//                     'Absolutely loved my stay here! The service was top-notch.',
//                   rating: '★★★★★',
//                 },
//                 {
//                   name: 'John Smith',
//                   review:
//                     'Great room and excellent amenities. Will definitely return.',
//                   rating: '★★★★☆',
//                 },
//                 {
//                   name: 'Emily Brown',
//                   review:
//                     'The views were stunning, and the staff were very accommodating.',
//                   rating: '★★★★★',
//                 },
//               ].map((review, index) => (
//                 <div
//                   key={index}
//                   className="rounded-lg bg-zinc-700 p-4 shadow-lg"
//                 >
//                   <h3 className="text-lg font-semibold text-white">
//                     {review.name}
//                   </h3>
//                   <p className="mt-2 text-sm text-gray-300 md:text-base">
//                     {review.review}
//                   </p>
//                   <span className="mt-2 block text-emerald-400">
//                     {review.rating}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Booking Form */}
//           {/* <div className="w-full lg:w-1/3">
//             <div className="rounded-xl bg-zinc-800 p-4 shadow-lg lg:p-6">
//               <h2 className="text-2xl font-bold text-emerald-400">
//                 Book Your Stay
//               </h2>
//               <form className="mt-6 space-y-4">
//                 {/* Form Fields */}
//                 {[
//                   {
//                     id: 'checkin',
//                     label: 'Check-in Date',
//                     type: 'date',
//                   },
//                   {
//                     id: 'checkout',
//                     label: 'Check-out Date',
//                     type: 'date',
//                   },
//                 ].map((field) => (
//                   <div key={field.id}>
//                     <label
//                       htmlFor={field.id}
//                       className="block text-sm text-gray-300 md:text-base"
//                     >
//                       {field.label}
//                     </label>
//                     <input
//                       type={field.type}
//                       id={field.id}
//                       className="mt-1 w-full rounded-lg bg-zinc-700 p-3 text-white focus:ring-2 focus:ring-emerald-500"
//                     />
//                   </div>
//                 ))}

//                 {/* Guests Select */}
//                 <div>
//                   <label
//                     htmlFor="guests"
//                     className="block text-sm text-gray-300 md:text-base"
//                   >
//                     Number of Guests
//                   </label>
//                   <select
//                     id="guests"
//                     className="mt-1 w-full rounded-lg bg-zinc-700 p-3 text-white focus:ring-2 focus:ring-emerald-500"
//                   >
//                     {[1, 2, 3, 4, '5+'].map((num) => (
//                       <option key={num} value={num}>
//                         {num} Guest{num !== 1 ? 's' : ''}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <button
//                   type="submit"
//                   className="mt-6 w-full rounded-lg bg-emerald-500 py-3 text-white shadow-lg transition-colors hover:bg-emerald-600"
//                 >
//                   Confirm Booking
//                 </button>
//               </form>
//             </div>
//           </div> */}
//         </div>
//       </div>

//       <div className="mt-12">
//         <DashboardFooter />
//       </div>
//     </div>
//   );
// };

// export default RoomPage;
