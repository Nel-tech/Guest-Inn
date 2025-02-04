
import { useState } from "react"
import { Calendar, User, Mail, Phone, Home, FileText, ChevronDown } from "lucide-react"

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    requests: "",
  })

  const roomOptions = ["Single Rooms", "Shared Rooms", "Family Rooms", "Premium Rooms", "Suites"]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Reservation Data:", formData)
    alert("Reservation Submitted!")
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <Home className="inline-block text-blue-600 mb-2" size={40} />
        <h2 className="text-3xl font-bold text-gray-800">Book Your Stay</h2>
        <p className="text-gray-600">Fill out the form below to reserve your room</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>
        </div>
        <div className="relative">
          <Phone className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>
        <div className="relative">
          <Home className="absolute top-3 left-3 text-gray-400" size={20} />
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
            required
          >
            <option value="">Select Room Type</option>
            {roomOptions.map((room, index) => (
              <option key={index} value={room}>
                {room}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute top-3 right-3 text-gray-400 pointer-events-none" size={20} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Calendar className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="relative">
            <Calendar className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>
        </div>
        <div className="relative">
          <FileText className="absolute top-3 left-3 text-gray-400" size={20} />
          <textarea
            name="requests"
            placeholder="Additional Requests (Optional)"
            value={formData.requests}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Reserve Now
        </button>
      </form>
    </div>
  )
}

export default ReservationForm

