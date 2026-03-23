import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-[-55px]">
              <Logo className="scale-[1.2] origin-left -ml-14" />
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Not a club. A cult.
              <br />
              Run by Gen Z. For Gen Z.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold mb-4 text-sm">QUICK LINKS</h4>
            <ul className="space-y-4 text-sm mt-4">
              {['Join WhatsApp', 'Instagram', 'Upcoming Events', 'Gallery'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="group flex items-center hover:text-primary transition-colors duration-300 w-fit">
                    <span className="max-w-0 opacity-0 group-hover:max-w-[24px] group-hover:opacity-100 group-hover:mr-2 text-primary transition-all duration-300 overflow-hidden break-normal">
                      &rarr;
                    </span>
                    <span className="relative">
                      {link}
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-bold mb-4 text-sm">GET IN TOUCH</h4>
            <p className="text-sm mb-3 hover:translate-x-2 transition-transform duration-300 cursor-default">📧 hello@therunclubthane.com</p>
            <p className="text-sm mb-3 hover:translate-x-2 transition-transform duration-300 cursor-default">📍 Thane, Maharashtra</p>
            <p className="text-sm hover:translate-x-2 transition-transform duration-300 cursor-default">⏰ Every Sunday, 7:00 AM</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs sm:text-sm font-mono text-left">© 2026 THE RUN CLUB THANE. ALL RIGHTS RESERVED.</p>
          <p className="text-xs sm:text-sm opacity-70 text-left">BUILT WITH PURE ENERGY</p>
        </div>

        {/* Large watermark */}
        <div className="mt-12 text-center overflow-hidden group cursor-default">
          <p className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black opacity-5 select-none tracking-tighter whitespace-nowrap transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-10">NOT A CULT</p>
        </div>
      </div>
    </footer>
  )
}
