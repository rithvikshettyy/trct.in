import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/trct_logo-bg.png"
      alt="The Run Club Thane Logo"
      width={200}
      height={67}
      className={`object-contain ${className}`}
      style={{ width: "auto", height: "auto" }}
      priority
    />
  )
}
