"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function AnimatedNumber({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [element, setElement] = useState<HTMLSpanElement | null>(null);

  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const prefix = match ? match[1] : "";
  const targetNumber = match ? parseInt(match[2], 10) : parseInt(value, 10) || 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const duration = 2000;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easing * targetNumber));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, hasAnimated, targetNumber]);

  return <span ref={setElement}>{prefix}{count}{suffix}</span>;
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-primary text-primary-foreground overflow-hidden px-4 pt-38 md:pt-40 pb-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Location badge */}
        <div className="inline-block mb-8 px-4 sm:px-6 py-2 border-2 border-white max-w-[95vw]">
          <span className="font-mono text-[10px] sm:text-sm md:text-base tracking-widest font-black">THANE'S BIGGEST RUNNING COMMUNITY</span>
        </div>

        {/* Main heading with glitch effect */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6 tracking-tighter uppercase text-[#F2EFE8]">
          <span className="inline-block hover:glitch transition-all">TRCT.IN</span>
        </h1>

        {/* Tagline */}
        <div className="relative mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-2">
          <span className="text-base sm:text-xl md:text-3xl font-mono font-bold tracking-wider mt-1 opacity-80">NOT A CLUB —</span>
          <span className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none text-white">A CULT.</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto text-base sm:text-lg px-6 lg:px-8 py-6 sm:py-6 font-bold hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#fff] transition-all duration-300 border-2 border-white bg-white text-primary hover:bg-white/90 group"
          >
            JOIN THE MOVEMENT
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base sm:text-lg px-6 lg:px-8 py-6 sm:py-6 font-bold border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 bg-transparent hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#fff]"
          >
            NEXT RUN: SUNDAY 7AM
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-16 sm:mt-20 mb-20 sm:mb-32 max-w-3xl mx-auto w-full px-2 sm:px-0">
          {[
            { number: "2000+", label: "CULT MEMBERS" },
            { number: "40+", label: "EVENTS RUN" },
            { number: "100%", label: "PURE ENERGY" },
          ].map((stat, i) => (
            <div key={i} className="border-2 border-white p-6 md:p-6 hover:bg-white hover:text-primary transition-colors duration-300 group cursor-default">
              <div className="text-4xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">
                <AnimatedNumber value={stat.number} />
              </div>
              <div className="text-xs md:text-sm font-mono tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
