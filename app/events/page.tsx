import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      week: 39,
      date: "March 22, 2026",
      title: "Oxygen Rave Party",
      time: "7:00 AM",
      location: "House Of Pickle, Cadbury Junction, Thane",
      mapLink: "https://share.google/SUsZ4iOpth17oKvju",
      registrationLink: "https://go.playo.app/PLAYOO/HLq1Y",
      distance: "3K, 5K, 10K",
      attendees: "100+",
    },
    {
      week: 37,
      date: "March 08, 2026",
      title: "Sunday Running",
      time: "7:00 AM",
      location: "Joggers Park, Hiranandani Estate, Thane",
      mapLink: "https://share.google/KDZJWXXfo0ylPv01p",
      registrationLink: "",
      distance: "3K, 5K, 10K",
      attendees: "200+",
    },
    {
      week: 36,
      date: "February 01, 2026",
      title: "Sunday Morning Run",
      time: "7:00 AM",
      location: "Flour N Fiene, Hiranandani Meadows",
      mapLink: "https://share.google/ilVdJhobelC9Op19N",
      registrationLink: "",
      distance: "3K, 5K, 10K",
      attendees: "150+",
    },
    {
      week: 35,
      date: "February 22, 2026",
      title: "Electro - Rush",
      time: "7:00 AM",
      location: "Hiranandani Heritage Garden, Thane",
      mapLink: "https://share.google/t5Iy66nll6TUDYakr",
      registrationLink: "",
      distance: "3K, 5K, 10K",
      attendees: "120+",
    },
  ]

  const isEventPast = (dateStr: string) => {
    const eventDate = new Date(dateStr)
    eventDate.setHours(0, 0, 0, 0)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return today > eventDate
  }

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
              Every Sunday at 7:00 AM. Join the movement. Feel the energy.
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
                    <div className="flex items-center gap-3">
                      <p className="font-mono text-sm font-bold opacity-75 group-hover:opacity-100">{event.date}</p>
                      <span className="bg-primary text-white text-[10px] px-2 py-0.5 font-mono font-black group-hover:bg-white group-hover:text-primary transition-colors">
                        WEEK {event.week}
                      </span>
                    </div>
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
                    {event.mapLink ? (
                      <a
                        href={event.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono hover:underline decoration-2 underline-offset-4"
                      >
                        {event.location}
                      </a>
                    ) : (
                      <span className="font-mono">{event.location}</span>
                    )}
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

                {isEventPast(event.date) ? (
                  <button
                    disabled
                    className="mt-6 w-full font-black py-3 border-2 transition-all bg-gray-300 text-gray-600 border-gray-300 cursor-not-allowed group-hover:bg-primary group-hover:text-white group-hover:border-white opacity-50"
                  >
                    REGISTRATIONS CLOSED
                  </button>
                ) : (
                  <a
                    href={event.registrationLink || "#"}
                    target={event.registrationLink ? "_blank" : undefined}
                    rel={event.registrationLink ? "noopener noreferrer" : undefined}
                    className="mt-6 w-full font-black py-3 border-2 transition-all block text-center bg-white text-primary border-white hover:bg-opacity-90 group-hover:bg-primary group-hover:text-white group-hover:border-white"
                  >
                    REGISTER NOW
                  </a>
                )}
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
