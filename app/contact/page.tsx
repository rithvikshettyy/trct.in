"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Instagram } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collaborationType: "sponsorship",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({
      name: "",
      email: "",
      phone: "",
      collaborationType: "sponsorship",
      message: "",
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-black text-primary mb-4 text-balance">
              LET'S
              <br />
              COLLABORATE
            </h1>
            <div className="w-12 h-3 bg-primary mb-6"></div>
            <p className="text-xl font-mono text-gray-700 max-w-2xl">
              Whether you want to sponsor us, collaborate, or just want to chat about running cult energy—we're all
              ears.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-primary mb-8">DIRECT CONTACT</h2>

              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-6 h-6 text-primary" />
                    <p className="font-black text-gray-900">EMAIL</p>
                  </div>
                  <a href="mailto:therunclubthane@gmail.com" className="font-mono text-primary hover:underline text-lg">
                    therunclubthane@gmail.com
                  </a>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    <p className="font-black text-gray-900">LOCATION</p>
                  </div>
                  <p className="font-mono text-gray-700">Thane, Maharashtra, India</p>
                  <p className="font-mono text-sm text-gray-600 mt-1">Every Sunday, 7:00 AM</p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Instagram className="w-6 h-6 text-primary" />
                    <p className="font-black text-gray-900">SOCIAL</p>
                  </div>
                  <p className="font-mono text-gray-700">@therunclubthane</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-primary text-white p-8 border-4 border-white">
                <h3 className="font-black text-lg mb-4">COLLABORATION TYPES</h3>
                <ul className="space-y-2 font-mono text-sm">
                  <li className="flex items-center gap-2">
                    <span className="font-black">›</span> Sponsorship & Partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-black">›</span> Brand Collaborations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-black">›</span> Event Hosting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-black">›</span> Media & Content
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-black">›</span> Community Initiatives
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-3xl font-black text-primary mb-8">SEND US A MESSAGE</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-black text-gray-900 mb-2">YOUR NAME *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                    placeholder="Tell us your name"
                  />
                </div>

                <div>
                  <label className="block font-black text-gray-900 mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-black text-gray-900 mb-2">PHONE</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block font-black text-gray-900 mb-2">COLLABORATION TYPE *</label>
                  <select
                    name="collaborationType"
                    value={formData.collaborationType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary font-mono bg-white"
                  >
                    <option value="sponsorship">Sponsorship</option>
                    <option value="partnership">Partnership</option>
                    <option value="event">Event Hosting</option>
                    <option value="media">Media & Content</option>
                    <option value="community">Community Initiative</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-black text-gray-900 mb-2">MESSAGE *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary font-mono resize-none"
                    placeholder="Tell us about your collaboration idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-black py-4 text-lg hover:bg-opacity-90 transition-all border-2 border-primary"
                >
                  SEND MESSAGE
                </button>

                {submitted && (
                  <div className="bg-primary text-white p-4 border-2 border-primary font-mono text-sm">
                    Thanks for reaching out! We'll get back to you ASAP. Cult energy incoming!
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white border-4 border-primary p-12">
            <h2 className="text-4xl font-black text-primary mb-8">FREQUENTLY ASKED</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-black text-lg text-gray-900 mb-2">How can we sponsor The Run Club Thane?</h3>
                <p className="font-mono text-gray-700">
                  We work with brands that align with our cult values. Reach out via the form above with your
                  sponsorship proposal, and we'll discuss partnership opportunities.
                </p>
              </div>
              <div>
                <h3 className="font-black text-lg text-gray-900 mb-2">What are collaboration opportunities?</h3>
                <p className="font-mono text-gray-700">
                  From content creation to event hosting, from product launches to community initiatives—if it fits our
                  vibe, let's make it happen.
                </p>
              </div>
              <div>
                <h3 className="font-black text-lg text-gray-900 mb-2">How quickly will you respond?</h3>
                <p className="font-mono text-gray-700">
                  We typically respond within 48 hours. We're committed to building genuine partnerships, not just
                  transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
