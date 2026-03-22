import Link from "next/link"

export function SponsorsSection() {
  const sponsorLogos = [
    { name: "WROGN", filename: "wrogn.png", width: "w-20 md:w-24 lg:w-28", link: "https://wrogn.in" },
    { name: "PLAYO", filename: "playo.png", width: "w-40 md:w-56 lg:w-64", link: "https://playo.co" },
    { name: "PROVILAC", filename: "provilac.png", width: "w-36 md:w-48 lg:w-56", link: "https://provilac.com" },
    { name: "RED BULL", filename: "redbull.png", width: "w-24 md:w-32 lg:w-36", link: "https://www.redbull.com" },
    { name: "INHALE", filename: "inhale.png", width: "w-28 md:w-36 lg:w-40", link: "https://inhaleindia.in/" },
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

        <div className="relative overflow-hidden my-16 py-10 border-y-4 border-primary bg-secondary/5">
          {/* Overlay gradients for smooth fade effect at edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee gap-24 min-w-max px-12 items-center">
            {/* Array repeated multiple times to ensure the loop never runs out of content on ultra-wide screens */}
            {[...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos].map((logo, index) => (
              <div key={index} className="flex justify-center items-center w-32 md:w-40 lg:w-48 h-16 md:h-20 lg:h-24 shrink-0">
                <a href={logo.link} target={logo.link === "#" ? "_self" : "_blank"} rel="noopener noreferrer" className="flex items-center justify-center">
                  <img
                    src={`/sponsors/${logo.filename}`}
                    alt={`${logo.name} Logo`}
                    className={`${logo.width} max-w-none object-contain mix-blend-multiply transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer`}
                  />
                </a>
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
