import Link from "next/link"

export function SponsorsSection() {
  const sponsors = [
    { name: "WROGN", link: "https://wrogn.in" },
    { name: "PLAYO", link: "https://playo.co" },
    { name: "PROVILAC DAIRY", link: "https://provilac.com" },
    { name: "RED BULL", link: "https://www.redbull.com" },
    { name: "INHALE", link: "https://inhaleindia.in/" },
    { name: "FAST & UP", link: "https://www.fastandup.in" },
    { name: "NEUROGUM", link: "#" },
    { name: "DECATHLON", link: "#" },
    { name: "SKYWAY", link: "#" },
    { name: "BREWY", link: "#" },
    { name: "INFINITO WEAR", link: "#" },
    { name: "EVORAH", link: "#" },
    { name: "EVOCUS (HYDRATION IV)", link: "#" },
    { name: "MISFITS", link: "#" },
    { name: "CRUNCH", link: "#" },
    { name: "THREE MORE REPS", link: "#" },
    { name: "AIR GABS", link: "#" },
    { name: "CHICNUTRIX", link: "#" },
    { name: "11:11 ELVN ELVN", link: "#" },
    { name: "BREATHEE", link: "#" },
  ]

  return (
    <section id="sponsors" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-primary mb-4 text-balance">
          OUR SPONSORS &
          <br />
          PARTNERS
        </h2>
        <div className="w-12 h-2 bg-primary mb-12"></div>

        <div className="relative overflow-hidden my-16 py-12 border-y-4 border-primary bg-secondary/5 mb-8">
          {/* Overlay gradients for smooth fade effect at edges */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee gap-16 min-w-max px-12 items-center">
            {/* Array repeated multiple times for seamless loop */}
            {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((logo, index) => (
              <div key={index} className="flex items-center gap-16 shrink-0">
                <a 
                  href={logo.link} 
                  target={logo.link === "#" ? "_self" : "_blank"} 
                  rel="noopener noreferrer" 
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary hover:text-primary transition-colors duration-300 uppercase tracking-tighter whitespace-nowrap"
                >
                  {logo.name}
                </a>
                <span className="text-2xl md:text-3xl lg:text-4xl font-black text-primary italic select-none">/</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/contact" className="block mt-12 p-6 bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#dc2626] cursor-pointer group">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-black text-xl md:text-2xl mb-2 group-hover:underline decoration-2 underline-offset-4">WANT TO PARTNER WITH US?</h3>
              <p className="font-mono text-sm opacity-90">We're always looking for brands that align with our cult energy. Click to collab.</p>
            </div>
            <div className="hidden sm:block text-2xl font-black group-hover:translate-x-2 transition-transform duration-300">→</div>
          </div>
        </Link>
      </div>
    </section>
  )
}
