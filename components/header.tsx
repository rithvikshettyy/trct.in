"use client"

import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b-2 border-white">
      <nav className="w-full px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="relative w-[230px] h-[90px] md:w-[280px] md:h-[75px]">
            <Logo className="absolute left-0 top-1/2 -translate-y-1/2 mt-2 scale-[0.7] md:scale-[0.75] origin-left" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/events" className="text-white font-mono text-sm relative group py-1">
            EVENTS
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
          <Link href="/about" className="text-white font-mono text-sm relative group py-1">
            ABOUT
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
          <Link href="/contact" className="text-white font-mono text-sm relative group py-1">
            COLLAB
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
          <a
            href="https://chat.whatsapp.com/GlZwMFVjvU2EZ9kNnVzuCI?mode=wwt&utm_source=igios&utm_campaign=wa_communities_url_xma&source_surface=25&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcXBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnmBoH1VPrrkVMSq2Mr6IMIJ3JmvXw0UHk1d9iQwaHYg-jDDhGgEQaWU0sXDc_aem_Wbsg3hXzAeD68ZUcS7DiyA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              variant="secondary"
              className="font-bold border-2 border-white bg-white text-primary hover:bg-white/90 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#fff] transition-all duration-300"
            >
              JOIN THE CULT
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-primary border-t-2 border-white transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-6 py-8 space-y-6">
          <Link
            href="/events"
            className="block text-white font-mono text-xl font-black hover:translate-x-2 transition-transform py-2 border-b border-white/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            EVENTS
          </Link>
          <Link
            href="/about"
            className="block text-white font-mono text-xl font-black hover:translate-x-2 transition-transform py-2 border-b border-white/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="block text-white font-mono text-xl font-black hover:translate-x-2 transition-transform py-2 border-b border-white/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            COLLAB
          </Link>
          <a
            href="https://chat.whatsapp.com/GlZwMFVjvU2EZ9kNnVzuCI?mode=wwt&utm_source=igios&utm_campaign=wa_communities_url_xma&source_surface=25&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcXBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnmBoH1VPrrkVMSq2Mr6IMIJ3JmvXw0UHk1d9iQwaHYg-jDDhGgEQaWU0sXDc_aem_Wbsg3hXzAeD68ZUcS7DiyA"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block pt-4"
          >
            <Button
              size="lg"
              variant="secondary"
              className="w-full font-black text-lg border-2 border-white bg-white text-primary hover:bg-white/90 py-6"
            >
              JOIN THE CULT
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
