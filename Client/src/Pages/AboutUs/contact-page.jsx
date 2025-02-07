import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div
      id="contact"
      className="mx-auto max-w-7xl bg-zinc-900 px-4 py-12 text-white sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">
          CONTACT <span className="text-blue-400">US</span>
        </h1>
      </div>

      {/* Map Section */}

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Information Section */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-blue-400">
              INFORMATION
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-blue-400" />
                <div>
                  <h3 className="mb-1 font-medium text-white">ADDRESS</h3>
                  <p className="text-gray-400">
                    Along University Clinic Road, BUK old campus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-blue-400" />
                <div>
                  <h3 className="mb-1 font-medium text-white">PHONE / FAX</h3>
                  <p className="text-gray-400">
                    International Calls: +234 8162298937
                  </p>
                  <p className="text-gray-400">National Calls: +234 8106417117</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-blue-400" />
                <div>
                  <h3 className="mb-1 font-medium text-white">E-MAIL</h3>
                  <p className="text-gray-400">bukguesthouseltd@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight text-blue-400">
              If you have any questions, don't hesitate to contact us.
            </h2>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="mb-6 text-xl font-semibold text-blue-400">
            GET IN TOUCH
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded border border-zinc-700 bg-zinc-800 p-3 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-[#32cd32]"
              required
            />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded border border-zinc-700 bg-zinc-800 p-3 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-[#32cd32]"
              required
            />
            <textarea
              placeholder="Enter your message"
              className="min-h-[150px] w-full resize-y rounded border border-zinc-700 bg-zinc-800 p-3 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-[#32cd32]"
              required
            />
            <p className="text-sm text-gray-400">* All fields are mandatory</p>
            <button
              type="submit"
              className="rounded bg-blue-600 px-8 py-3 text-white transition-colors duration-200 hover:bg-blue-800"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
