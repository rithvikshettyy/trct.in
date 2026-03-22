export function SponsorsSection() {
  const sponsorLogos = [
    { name: "WROGN", filename: "wrogn.png" },
    { name: "PLAYO", filename: "playo.png" },
    { name: "PROVILAC", filename: "provilac.png" },
    { name: "RED BULL", filename: "redbull.png" },
    { name: "FAST&UP", filename: "fastandup.png" },
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
              <img
                key={index}
                src={`/sponsors/${logo.filename}`}
                alt={`${logo.name} Logo`}
                className="h-16 md:h-24 lg:h-28 w-auto object-contain transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:-translate-y-1 cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-colors duration-300">
          <h3 className="font-black text-xl md:text-2xl mb-2">WANT TO PARTNER WITH US?</h3>
          <p className="font-mono text-sm">We're always looking for brands that align with our cult energy.</p>
        </div>
      </div>
    </section>
  )
}
