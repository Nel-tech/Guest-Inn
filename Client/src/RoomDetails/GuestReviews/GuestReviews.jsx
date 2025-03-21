import { GuestReview } from '../../Mocks/Data';

function GuestReviews() {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl rounded-xl bg-zinc-800 p-6 md:p-8">
        <h2 className="text-center text-2xl font-bold text-blue-400">
          Guest Reviews
        </h2>
        <div className="mt-6 space-y-4">
          {/* Review Cards */}
          {GuestReview.map((review, index) => (
            <div key={index} className="rounded-lg bg-zinc-700 p-4 shadow-lg">
              <h3 className="text-lg font-semibold text-white">
                {review.name}
              </h3>
              <p className="mt-2 text-sm text-gray-300 md:text-base">
                {review.review}
              </p>
              <span className="mt-2 block text-blue-400">{review.rating}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuestReviews;
