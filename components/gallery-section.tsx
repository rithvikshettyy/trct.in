import { ArrowRight, ImageIcon } from "lucide-react"
import Link from "next/link"

export function GallerySection() {
  // Mock data for the last 6 weeks (from week 39 down to 34)
  const recentWeeks = [
    { week: 39, date: "Recent Run", link: "#", thumbnail: "/img1.jpeg" },
    { week: 38, date: "Previous Run", link: "#", thumbnail: "/img2.jpeg" },
    { week: 37, date: "Past Run", link: "https://drive.google.com/drive/folders/1SYAD7filRbC0l1y6c0E6B308ndi4iLNf", thumbnail: "/img1.jpeg" },
    { week: 36, date: "Past Run", link: "#", thumbnail: "/img4.jpeg" },
    { week: 35, date: "Past Run", link: "#", thumbnail: "/img5.jpeg" },
    { week: 34, date: "Past Run", link: "#", thumbnail: "/img6.jpeg" },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 bg-white text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 px-2 sm:px-0">
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 text-balance text-primary uppercase">
              THE VAULT
            </h2>
            <div className="w-12 h-3 bg-primary mb-6"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono">
              Relive the energy. Week by week.
            </p>
          </div>
          <Link
            href="/vault"
            className="group flex items-center font-mono font-bold text-sm md:text-base border-b-2 border-primary pb-1 hover:text-primary transition-colors"
          >
            VIEW ENTIRE GOOGLE DRIVE
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recentWeeks.map((item) => (
            <a
              key={item.week}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-4 border-foreground bg-secondary/5 hover:bg-primary hover:border-primary transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000]"
            >
              {/* Thumbnail Area */}
              <div className="aspect-[4/3] w-full bg-foreground/10 flex items-center justify-center relative overflow-hidden border-b-4 border-foreground group-hover:border-primary/50 transition-colors duration-300">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={`Week ${item.week}`} className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <ImageIcon className="w-12 h-12 opacity-20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
                )}
              </div>

              {/* Title & Info */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    WEEK {item.week}
                  </h3>
                  <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <ArrowRight className="w-5 h-5 md:-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                <p className="font-mono text-sm opacity-70 mt-2 group-hover:text-white transition-colors duration-300">
                  [ GOOGLE DRIVE FOLDER ]
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
