/* eslint-disable @next/next/no-img-element */
"use client"
import * as React from "react"

export default function HalfBanner() {
  return (
    <>
      <div
        className="position-relative block w-screen overflow-hidden h-screen bg-black border-white text-white mt-26"
        style={{ position: "relative", zIndex: "0" }}
      >
        <div className="block lg:inline-block bg-black w-screen h-1/2 lg:w-1/2 lg:h-full">
          <div className="h-1/5 md:h-1/3 lg:h-2/5"></div>
          <div className="px-6 lg:px-12 lg:pr-24 heroText text-yellow-500">
            <div className="uppercase text-3xl">Lorem ipsum</div>
            <div className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div
          //   className="block lg:inline-block text-center"
          style={{
            position: "absolute",
            width: "98px",
            height: "auto",
            top: "50%",
            left: "50%",
            // right: 0,
            margin: "auto",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img src="/copy.png" alt="copyright image" />
        </div>
        <div
          className="heroBlocks block lg:inline-block bg-yellow-500 w-screen h-1/2 lg:w-1/2 lg:h-full"
          style={{ animationDelay: "250ms" }}
        >
          <div className="h-1/5 md:h-1/3 lg:h-2/5"></div>
          <div
            className="px-6 lg:px-12 lg:pl-24 heroText text-right"
            style={{ animationDelay: "250ms" }}
          >
            <div className="uppercase text-3xl text-black">Lorem ipsum</div>
            <div className="text-lg text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
