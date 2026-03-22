import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function VaultPage() {
  const allWeeks = [
    { week: 39, date: "Recent Run", link: "#", thumbnail: "/img1.jpeg" },
    { week: 38, date: "Previous Run", link: "#", thumbnail: "/img2.jpeg" },
    { week: 37, date: "Past Run", link: "https://drive.google.com/drive/folders/1SYAD7filRbC0l1y6c0E6B308ndi4iLNf", thumbnail: "/img1.jpeg" },
    { week: 36, date: "Past Run", link: "#", thumbnail: "/img4.jpeg" },
    { week: 35, date: "Past Run", link: "#", thumbnail: "/img5.jpeg" },
    { week: 34, date: "Past Run", link: "#", thumbnail: "/img6.jpeg" },
    { week: 33, date: "Past Run", link: "#", thumbnail: "" },
    { week: 32, date: "Past Run", link: "#", thumbnail: "" },
    { week: 31, date: "Past Run", link: "#", thumbnail: "" },
    { week: 30, date: "Past Run", link: "#", thumbnail: "" },
    { week: 29, date: "Past Run", link: "#", thumbnail: "" },
    { week: 28, date: "Past Run", link: "#", thumbnail: "" },
    { week: 27, date: "Past Run", link: "#", thumbnail: "" },
    { week: 26, date: "Past Run", link: "#", thumbnail: "" },
    { week: 25, date: "Past Run", link: "#", thumbnail: "" },
    { week: 24, date: "Past Run", link: "#", thumbnail: "" },
    { week: 23, date: "Past Run", link: "#", thumbnail: "" },
    { week: 22, date: "Past Run", link: "#", thumbnail: "" },
    { week: 21, date: "Past Run", link: "#", thumbnail: "" },
    { week: 20, date: "Past Run", link: "#", thumbnail: "" },
    { week: 19, date: "Past Run", link: "#", thumbnail: "" },
    { week: 18, date: "Past Run", link: "#", thumbnail: "" },
    { week: 17, date: "Past Run", link: "#", thumbnail: "" },
    { week: 16, date: "Past Run", link: "#", thumbnail: "" },
    { week: 15, date: "Past Run", link: "#", thumbnail: "" },
    { week: 14, date: "Past Run", link: "#", thumbnail: "" },
    { week: 13, date: "Past Run", link: "#", thumbnail: "" },
    { week: 12, date: "Past Run", link: "#", thumbnail: "" },
    { week: 11, date: "Past Run", link: "#", thumbnail: "" },
    { week: 10, date: "Past Run", link: "#", thumbnail: "" },
    { week: 9, date: "Past Run", link: "#", thumbnail: "" },
    { week: 8, date: "Past Run", link: "#", thumbnail: "" },
    { week: 7, date: "Past Run", link: "#", thumbnail: "" },
    { week: 6, date: "Past Run", link: "#", thumbnail: "" },
    { week: 5, date: "Past Run", link: "#", thumbnail: "" },
    { week: 4, date: "Past Run", link: "#", thumbnail: "" },
    { week: 3, date: "Past Run", link: "#", thumbnail: "" },
    { week: 2, date: "Past Run", link: "#", thumbnail: "" },
    { week: 1, date: "First Run", link: "#", thumbnail: "" },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-10">
      <Header />

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center text-primary font-mono font-bold hover:opacity-80 transition-opacity mb-8 group">
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            BACK TO HOME
          </Link>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 text-primary uppercase text-balance">
            THE VAULT
          </h1>
          <div className="w-16 sm:w-20 h-3 sm:h-4 bg-primary mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono max-w-3xl leading-relaxed">
            Every route. Every run. Every vibe. The complete visual archive from Week 1 to present.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-32">
          {allWeeks.map((item) => (
            <a
              key={item.week}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-4 border-foreground bg-secondary/5 hover:bg-primary hover:border-primary transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000]"
            >
              <div className="aspect-[4/3] w-full bg-foreground/10 flex items-center justify-center relative overflow-hidden border-b-4 border-foreground group-hover:border-primary/50 transition-colors duration-300">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={`Week ${item.week}`} className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <ImageIcon className="w-12 h-12 opacity-20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
                )}
              </div>

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

      <Footer />
    </main>
  )
}
