"use client"
import * as React from "react"

export default function HeroBanner() {
  return (
    <>
      <div className="w-screen h-screen bg-black border-white text-white mt-26">
        <div className="float-left bg-black w-2/5 h-full z-20">
          <div className="h-1/4 md:h-2/5"></div>
          <div className="px-6 md:px-12 heroText">
            <div className="uppercase text-3xl">Lorem ipsum</div>
            <div className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div
          className="heroBlocks float-left bg-yellow-500 w-1/5 h-full"
          style={{ animationDelay: "250ms" }}
        ></div>
        <div
          className="heroBlocks float-left bg-orange-600 w-1/5 h-full"
          style={{ animationDelay: "500ms" }}
        ></div>
        <div
          className="heroBlocks float-left bg-amber-800 w-1/5 h-full"
          style={{ animationDelay: "750ms" }}
        ></div>
      </div>
    </>
  )
}
