import { Playfair_Display, Dancing_Script } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['800'] })
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400'] })

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center text-[#F2EFE8] ${className}`}>
      <div className="relative">
        <span 
          className={`${dancing.className} absolute -top-5 -left-10 text-3xl z-10 -rotate-[15deg]`}
        >
          The
        </span>
        <div className="flex items-end">
          <span className={`${playfair.className} text-6xl leading-none tracking-tight`}>
            Run
          </span>
          <span 
            className={`${dancing.className} text-3xl -ml-2 mb-2 z-10 -rotate-[10deg]`}
          >
            club
          </span>
        </div>
      </div>
      <div className={`${playfair.className} text-6xl leading-none tracking-tight -mt-2`}>
        Thane
      </div>
    </div>
  )
}
