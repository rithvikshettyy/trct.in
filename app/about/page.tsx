import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Zap, Users, Flame } from "lucide-react"

export default function AboutPage() {
  const founders = [
    {
      name: "Tanish Jain",
      role: "Co-Founder & Vision Lead",
      bio: "The mastermind behind the cult. Tanish believes in building communities that inspire and transform. His passion for running is only matched by his energy for bringing people together.",
      specialty: "Community Building",
    },
    {
      name: "Shradda Mahale",
      role: "Co-Founder & Culture Lead",
      bio: "The heartbeat of the Run Club. Shradda's infectious energy and dedication to creating an inclusive running culture makes every run unforgettable.",
      specialty: "Culture & Inclusivity",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-black text-primary mb-4 text-balance">
              NOT JUST A
              <br />
              CLUB
            </h1>
            <div className="w-12 h-3 bg-primary mb-6"></div>
            <p className="text-xl font-mono text-gray-700 max-w-2xl">
              A CULT. Born from passion. Built by Gen Z. For Gen Z. The Run Club Thane isn't about running faster—it's
              about running together.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="border-4 border-primary p-8">
              <h2 className="text-4xl font-black text-primary mb-4">THE STORY</h2>
              <p className="font-mono text-gray-700 mb-4">
                In 2024, two teenagers with a passion for running decided to create something different. No corporate
                structure. No membership fees. Just pure energy.
              </p>
              <p className="font-mono text-gray-700 mb-4">
                What started as a small group of friends running at sunrise has grown into a movement of 500+ runners
                who believe in community, consistency, and cult energy.
              </p>
              <p className="font-mono text-gray-700">
                Every Sunday at 6 AM, we gather. Not because we have to. Because we WANT to. Because we believe that
                running together is more powerful than running alone.
              </p>
            </div>

            <div className="bg-primary text-white p-8 border-4 border-white">
              <h2 className="text-4xl font-black mb-6">OUR VALUES</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Zap className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p className="font-black text-lg mb-1">ENERGY</p>
                    <p className="font-mono text-sm">High-octane, infectious, unstoppable</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p className="font-black text-lg mb-1">COMMUNITY</p>
                    <p className="font-mono text-sm">All paces, all levels, all people welcome</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Flame className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p className="font-black text-lg mb-1">CONSISTENCY</p>
                    <p className="font-mono text-sm">Every Sunday. Rain or shine. Always here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-16">
            <h2 className="text-5xl font-black text-primary mb-12 text-balance">
              MEET THE
              <br />
              ARCHITECTS
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="border-4 border-primary p-8 hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <p className="text-sm font-mono font-bold opacity-70 group-hover:opacity-100">
                      {founder.specialty}
                    </p>
                    <h3 className="text-3xl font-black mt-2">{founder.name}</h3>
                    <p className="text-lg font-mono mt-1 font-bold">{founder.role}</p>
                  </div>

                  <p className="font-mono text-sm leading-relaxed">{founder.bio}</p>

                  <div className="mt-6 pt-6 border-t-2 border-current border-opacity-20">
                    <p className="text-sm font-mono font-bold">EXPERTISE</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 bg-primary text-white p-8 md:p-12 border-4 border-white mb-16">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black">500+</p>
              <p className="font-mono text-sm mt-2">Active Members</p>
            </div>
            <div className="text-center border-l-2 border-r-2 border-white px-4">
              <p className="text-4xl md:text-5xl font-black">52</p>
              <p className="font-mono text-sm mt-2">Events Hosted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black">5K+</p>
              <p className="font-mono text-sm mt-2">Miles Run</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-4 border-primary p-8 text-center">
            <h3 className="text-2xl font-black text-primary mb-2">GET IN TOUCH</h3>
            <p className="text-lg font-mono text-gray-700">therunclubthane@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
