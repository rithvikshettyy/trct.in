import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { EventsSection } from "@/components/events-section"
import { CultSection } from "@/components/cult-section"
import { GallerySection } from "@/components/gallery-section"
import { JoinSection } from "@/components/join-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee text="EVERY SUNDAY · 7AM · THANE" />
      <EventsSection />
      <Marquee text="RUN WITH US · JOIN THE MOVEMENT · FEEL THE ENERGY" direction="reverse" />
      <CultSection />
      <GallerySection />
      <SponsorsSection />
      <JoinSection />
      <Footer />
    </main>
  )
}
