"use client"
import * as React from "react"
import { SocialIcon } from "react-social-icons"

export default function Footer() {
  return (
    <footer>
      <div className="block bg-black p-16 md:p-28 mt-36">
        <div className="pt-6 block md:inline-block md:w-1/3 text-white align-text-top">
          <h3 className="px-2 text-2xl font-medium text-yellow-500 ">Bantam</h3>
          <SocialIcon
            bgColor="black"
            fgColor="white"
            url="https://instagram.com"
          />
          <SocialIcon
            bgColor="black"
            fgColor="white"
            url="https://facebook.com"
          />
          <SocialIcon
            bgColor="black"
            fgColor="white"
            url="https://twitter.com"
          />
        </div>
        <div className="pt-6 block md:inline-block md:w-1/3 text-white align-text-top">
          <h3 className="px-2 md:px-12 lg:px-16">
            <span className="border-b border-gray-400 py-2">More</span>
          </h3>
          <ul>
            <li className="py-6 px-2 md:px-12 lg:px-16">About Us</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Our Work</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Our Partners</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Contact Us</li>
          </ul>
        </div>
        <div className="pt-6 block md:inline-block md:w-1/3 text-white align-text-top">
          <h3 className="px-2 md:px-12 lg:px-16">
            <span className="border-b border-gray-400 py-2">Contact Us</span>
          </h3>
          <div className="py-6 px-2 md:px-12 lg:px-16">
            489 King St W<br />
            Toronto, ON, Canada
            <br />
            M5V 1K4
            <br />
            +1 (123) 456-7890
          </div>
        </div>
      </div>
    </footer>
  )
}
