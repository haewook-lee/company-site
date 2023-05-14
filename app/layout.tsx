import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className="justify-between w-screen bg-black h-16 inline-flex px-6 py-auto fixed font-medium top-0">
            <div>
              <h3 className="text-2xl font-medium text-blue-500 m-4">
                EXAMPLE
              </h3>
            </div>
            <div className="hidden pr-2 space-x-8 lg:flex">
              <a href="#" className="text-white m-4">
                About Us
              </a>
              <a href="#" className="text-white m-4">
                Our Work
              </a>
              <a href="#" className="text-white m-4">
                Our Partners
              </a>
              <a href="#" className="text-white m-4">
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex m-4 p-1 justify-end lg:hidden">
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            </div>
          </div>
        </nav>
        {/* <nav className="container flex justify-between px-4 py-8 mx-auto bg-white">
          <div>
            <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
          </div>
          <div className="hidden space-x-8 lg:flex">
            <a href="#">Menu 1</a>
            <a href="#">Menu 2</a>
            <a href="#">Menu 3</a>
            <a href="#">Menu 4</a>
          </div>
          <div className="flex lg:hidden">
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
            </div>
          </div>
        </nav> */}
        {children}
      </body>
    </html>
  )
}
