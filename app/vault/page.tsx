import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { allWeeks } from "@/lib/vault-data"

export default function VaultPage() {

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
                  <Image
                    src={item.thumbnail}
                    alt={`Week ${item.week}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
