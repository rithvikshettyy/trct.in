import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      date: "April 14, 2026",
      title: "Speed Work Session",
      time: "6:00 AM",
      location: "Thane Sports Complex",
      distance: "8K",
      attendees: "100+",
      isPast: false,
    },
    {
      date: "April 21, 2026",
      title: "Community Long Run",
      time: "6:00 AM",
      location: "Thane Waterfront Park",
      distance: "12K+",
      attendees: "200+",
      isPast: false,
    },
    {
      date: "Dec 02, 2025",
      title: "High Energy Group Run",
      time: "6:00 AM",
      location: "Thane Lake Circuit",
      distance: "10K",
      attendees: "150+",
      isPast: true,
    },
    {
      date: "Nov 25, 2025",
      title: "Sunday Sunrise Run",
      time: "6:00 AM",
      location: "Thane Waterfront Park",
      distance: "5K - 10K",
      attendees: "120+",
      isPast: true,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 px-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-black text-primary mb-4 text-balance">
              EVENT
              <br />
              CALENDAR
            </h1>
            <div className="w-12 h-3 bg-primary mb-6"></div>
            <p className="font-mono text-lg text-gray-700">
              Every Sunday at 6:00 AM. Join the movement. Feel the energy.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="border-4 border-primary p-8 hover:bg-primary hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className="font-mono text-sm font-bold opacity-75 group-hover:opacity-100">{event.date}</p>
                    <h3 className="text-2xl md:text-3xl font-black mt-2 text-balance">{event.title}</h3>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span className="font-mono">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span className="font-mono">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span className="font-mono">{event.distance}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <span className="font-mono">{event.attendees}</span>
                  </div>
                </div>

                <button 
                  disabled={event.isPast}
                  className={`mt-6 w-full font-black py-3 border-2 transition-all ${
                    event.isPast 
                      ? "bg-gray-300 text-gray-600 border-gray-300 cursor-not-allowed group-hover:bg-primary group-hover:text-white group-hover:border-white opacity-50"
                      : "bg-white text-primary border-white hover:bg-opacity-90 group-hover:bg-primary group-hover:text-white group-hover:border-white"
                  }`}
                >
                  {event.isPast ? "REGISTRATIONS CLOSED" : "REGISTER NOW"}
                </button>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-primary text-white p-8 border-4 border-white">
            <h2 className="text-2xl font-black mb-2">WHAT TO EXPECT</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6 font-mono">
              <div>
                <p className="font-black text-lg mb-2">VIBE</p>
                <p>High energy, supportive community running experience</p>
              </div>
              <div>
                <p className="font-black text-lg mb-2">PACE</p>
                <p>All fitness levels welcome - we have multiple pace groups</p>
              </div>
              <div>
                <p className="font-black text-lg mb-2">AFTER RUN</p>
                <p>Community hangout, energy drinks, and networking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
