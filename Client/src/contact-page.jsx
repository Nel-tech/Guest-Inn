import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div id="contact" className="mx-auto max-w-7xl bg-zinc-900 px-4 py-12 text-white sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">
          CONTACT <span className="text-[#32cd32]">US</span>
        </h1>
      </div>

      {/* Map Section */}
      

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Information Section */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-[#32cd32]">
              INFORMATION
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-[#32cd32]" />
                <div>
                  <h3 className="mb-1 font-medium text-white">ADDRESS</h3>
                  <p className="text-gray-400">
                    Plot 1415 Adetokunbo Ademola Street, PMB 12724, Victoria
                    Island, Lagos Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-[#32cd32]" />
                <div>
                  <h3 className="mb-1 font-medium text-white">PHONE / FAX</h3>
                  <p className="text-gray-400">
                    International Calls: +234 701 2727700
                  </p>
                  <p className="text-gray-400">National Calls: 0701 2727700</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-[#32cd32]" />
                <div>
                  <h3 className="mb-1 font-medium text-white">E-MAIL</h3>
                  <p className="text-gray-400">sales@eko-hotels.com</p>
                  <p className="text-gray-400">reservation@eko-hotels.com</p>
                  <p className="text-gray-400">banquet@eko-hotels.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight text-[#32cd32]">
              If you have any questions, don't hesitate to contact us.
            </h2>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="mb-6 text-xl font-semibold text-[#32cd32]">
            GET IN TOUCH
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded border border-zinc-700 bg-zinc-800 p-3 text-white focus:border-[#32cd32] focus:outline-none focus:ring-2 focus:ring-[#32cd32]"
              required
            />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded border border-zinc-700 bg-zinc-800 p-3 text-white focus:border-[#32cd32] focus:outline-none focus:ring-2 focus:ring-[#32cd32]"
              required
            />
            <textarea
              placeholder="Enter your message"
              className="min-h-[150px] w-full resize-y rounded border border-zinc-700 bg-zinc-800 p-3 text-white focus:border-[#32cd32] focus:outline-none focus:ring-2 focus:ring-[#32cd32]"
              required
            />
            <p className="text-sm text-gray-400">* All fields are mandatory</p>
            <button
              type="submit"
              className="rounded bg-[#32cd32] px-8 py-3 text-white transition-colors duration-200 hover:bg-[#28b528]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
