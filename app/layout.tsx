import "./globals.css"
import { Inter } from "next/font/google"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bantam",
  description: "Company Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "black" }}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
