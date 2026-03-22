import { Flame, Zap, Heart, Target } from "lucide-react"
import Image from "next/image"

export function CultSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img1.jpeg"
          alt="Cult Section Background"
          fill
          className="object-cover opacity-[15%]"
          sizes="100vw"
          quality={90}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 px-2 sm:px-0">
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 md:mb-6 text-balance">
            WHY IT'S A
            <br />
            <span className="text-primary">CULT</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-mono max-w-3xl mx-auto text-balance">
            Because once you join, you can't stop. The energy is addictive. The community is unmatched. The vibes?
            Immaculate.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Flame,
              title: "HIGH ENERGY",
              description: "No boring runs. Just pure adrenaline and good vibes every Sunday.",
            },
            {
              icon: Zap,
              title: "GEN Z VIBES",
              description: "Run by teens, for teens. We speak your language. We get it.",
            },
            {
              icon: Heart,
              title: "REAL COMMUNITY",
              description: "Not just running partners. These are your people. Your tribe.",
            },
            {
              icon: Target,
              title: "ZERO JUDGMENT",
              description: "First run or hundredth, we all start somewhere. Just show up.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="border-2 border-primary p-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#dc2626] group cursor-default"
            >
              <value.icon className="w-10 h-10 mb-4 text-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
              <h3 className="text-xl font-black mb-3 font-mono group-hover:translate-x-1 transition-transform duration-300">{value.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity duration-300">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial style section */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "I've never felt more alive at 7 AM. This run club changed my life fr.",
              name: "SHUBHAM PATIL, 22",
            },
            {
              quote: "Started as a challenge. Now it's my favorite part of the week. No cap.",
              name: "VATSAL NATHANI, 24",
            },
            {
              quote: "The energy here is INSANE. Best decision I made this year.",
              name: "SNEHA, 19",
            },
          ].map((testimonial, i) => (
            <div key={i} className="bg-primary/10 border-2 border-primary p-6">
              <p className="text-lg font-bold mb-4 leading-relaxed text-balance">"{testimonial.quote}"</p>
              <p className="font-mono text-sm font-bold text-primary">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
