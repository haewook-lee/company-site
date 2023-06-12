"use client"
import * as React from "react"

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false)
  return (
    <nav>
      <div
        className="m-0 p-1 justify-between w-screen bg-black inline-flex fixed font-medium top-0"
        style={{ zIndex: "99" }}
      >
        <div>
          <h3 className="text-2xl font-medium text-yellow-500 m-4">
            <a href="/">Bantam</a>
          </h3>
        </div>
        <div className="hidden pr-2 space-x-8 lg:flex">
          <a
            href="/about"
            className="hover:animate-pulse uppercase text-white m-4 border-b border-gray-400"
          >
            About Us
          </a>
          <a
            href="/work"
            className="hover:animate-pulse uppercase text-white m-4 border-b border-gray-400"
          >
            Our Work
          </a>
          <a
            href="/partners"
            className="hover:animate-pulse uppercase text-white m-4 border-b border-gray-400"
          >
            Our Partners
          </a>
          <a
            href="/contact"
            className="hover:animate-pulse uppercase text-white m-4 border-b border-gray-400"
          >
            Contact Us
          </a>
        </div>
        <div className="flex m-4 p-1 justify-end lg:hidden">
          <div
            className="space-y-2 fixed"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
          </div>
          <div
            className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
            onClick={() => setIsNavOpen(false)}
          >
            <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="/about"
                  className="text-white m-4"
                  onClick={() => setIsNavOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#"
                  className="text-white m-4"
                  onClick={() => setIsNavOpen(false)}
                >
                  Our Work
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#"
                  className="text-white m-4"
                  onClick={() => setIsNavOpen(false)}
                >
                  Our Partners
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#"
                  className="text-white m-4"
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
