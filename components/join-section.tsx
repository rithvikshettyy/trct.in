"use client"

import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle } from "lucide-react"

export function JoinSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-balance leading-none">
          READY TO
          <br />
          JOIN THE CULT?
        </h2>

        <p className="text-xl md:text-2xl mb-12 font-mono text-balance opacity-90">
          No registration fees. No BS. Just show up this Sunday.
          <br />
          First run is always the hardest. After that? You're hooked.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full max-w-2xl mx-auto">
          <a href="https://chat.whatsapp.com/E1WKR6AZV6wIDAZJOqO6Kk" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base sm:text-lg px-6 lg:px-8 py-6 font-bold hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#fff] transition-all duration-300 bg-white text-primary border-2 border-white hover:bg-white/90 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              JOIN WHATSAPP GROUP
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base sm:text-lg px-6 lg:px-8 py-6 font-bold border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 bg-transparent hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#fff] group"
          >
            <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            FOLLOW ON INSTAGRAM
          </Button>
        </div>

        {/* FAQ style info */}
        <div className="border-2 border-white p-8 md:p-12 text-left">
          <h3 className="text-3xl font-black mb-6 font-mono">FIRST TIME? HERE'S WHAT TO KNOW:</h3>
          <ul className="space-y-4 text-lg">
            {[
              "📍 Join the WhatsApp group for weekly meet point updates",
              "👟 Wear comfortable running shoes (duh)",
              "💧 Bring water and good energy",
              "📱 Tag us in your stories @therunclubthane",
              "🚫 Leave your excuses at home",
              "✨ Come ready to make friends and memories",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 p-2 -m-2 rounded-lg hover:bg-white/5 cursor-default">
                <span className="font-mono font-bold min-w-[2ch]">{i + 1}.</span>
                <span className="leading-relaxed opacity-90 transition-opacity">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Final push */}
        <div className="mt-12">
          <p className="text-2xl md:text-4xl font-black">SEE YOU THIS SUNDAY. 7AM. DON'T BE LATE.</p>
        </div>
      </div>
    </section>
  )
}
