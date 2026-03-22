interface MarqueeProps {
  text: string
  direction?: "normal" | "reverse"
}

export function Marquee({ text, direction = "normal" }: MarqueeProps) {
  const marqueeText = `${text} · `.repeat(20)

  return (
    <div className="bg-secondary text-secondary-foreground py-6 overflow-hidden border-y-4 border-primary">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animationDirection: direction === "reverse" ? "reverse" : "normal",
        }}
      >
        <span className="text-2xl md:text-4xl font-black tracking-wider px-4">{marqueeText}</span>
        <span className="text-2xl md:text-4xl font-black tracking-wider px-4">{marqueeText}</span>
      </div>
    </div>
  )
}
