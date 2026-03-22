import { Calendar, Clock, MapPin, Users } from "lucide-react"

export function EventsSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 px-2 sm:px-0 text-center sm:text-left">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 text-balance">
            EVERY SUNDAY.
            <br />
            <span className="text-primary">NO EXCUSES.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono">We run. We vibe. We conquer.</p>
        </div>

        {/* Event details grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: Calendar,
              title: "WHEN",
              detail: "Every Sunday Morning",
              subdetail: "Rain or shine, we show up",
            },
            {
              icon: Clock,
              title: "TIME",
              detail: "6:00 AM Sharp",
              subdetail: "Early birds get the endorphins",
            },
            {
              icon: MapPin,
              title: "WHERE",
              detail: "Thane City",
              subdetail: "Meet point shared on WhatsApp",
            },
            {
              icon: Users,
              title: "WHO",
              detail: "Gen Z Runners",
              subdetail: "Teens running the show",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border-4 border-foreground p-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] group"
            >
              <item.icon className="w-12 h-12 mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
              <h3 className="text-sm font-mono font-bold mb-2 tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">{item.title}</h3>
              <p className="text-3xl font-black mb-2 group-hover:translate-x-1 transition-transform duration-300">{item.detail}</p>
              <p className="text-sm opacity-70 group-hover:opacity-90">{item.subdetail}</p>
            </div>
          ))}
        </div>

        {/* Route info */}
        <div className="bg-accent border-4 border-primary p-6 sm:p-8 md:p-12">
          <h3 className="text-3xl lg:text-5xl font-black mb-4 sm:mb-6 text-accent-foreground text-balance">
            THE ROUTE CHANGES.
            <br />
            THE ENERGY DOESN'T.
          </h3>
          <p className="text-lg md:text-xl text-accent-foreground/80 mb-6">
            We explore different routes every week—from peaceful trails to urban streets. 5K to 10K runs. Beginner
            friendly, but we don't slow down for excuses.
          </p>
          <div className="flex flex-wrap gap-3">
            {["5K RUNS", "10K ROUTES", "TRAIL RUNNING", "STREET SPRINTS", "HILL TRAINING"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-primary text-primary-foreground font-mono text-sm font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
