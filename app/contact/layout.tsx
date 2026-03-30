import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Whether you want to sponsor us, collaborate, or just chat about running cult energy; we're all ears.",
  openGraph: {
    title: "Contact Us | The Run Club Thane",
    description: "Whether you want to sponsor us, collaborate, or just chat about running cult energy; we're all ears.",
    url: "https://trct.in/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
