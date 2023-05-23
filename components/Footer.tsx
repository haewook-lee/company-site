"use client"
import * as React from "react"

export default function Footer() {
  return (
    <footer>
      <div className="block bg-black p-28 mt-36">
        <div className="pt-6 block md:inline-block md:w-1/3 text-white">
          <h3 className="px-2 md:px-12 lg:px-16">
            <span className="border-b border-gray-400 py-2">Contacts</span>
          </h3>
          <ul>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
          </ul>
        </div>
        <div className="pt-6 block md:inline-block md:w-1/3 text-white">
          <h3 className="px-2 md:px-12 lg:px-16">
            <span className="border-b border-gray-400 py-2">About Us</span>
          </h3>
          <ul>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
          </ul>
        </div>
        <div className="pt-6 block md:inline-block md:w-1/3 text-white">
          <h3 className="px-2 md:px-12 lg:px-16">
            <span className="border-b border-gray-400 py-2">Talk to Us</span>
          </h3>
          <ul>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
            <li className="py-6 px-2 md:px-12 lg:px-16">Item 1</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
