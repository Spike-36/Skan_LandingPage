import "./globals.css"
import Link from "next/link"
import { ReactNode } from "react"

export const metadata = {
  title: "Pete Milligan – Portfolio",
  description: "I build lean prototypes and legal tech products.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <nav className="p-4 border-b bg-gray-50 text-sm font-medium text-black">
          <div className="max-w-4xl mx-auto flex gap-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
