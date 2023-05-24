/* eslint-disable @next/next/no-img-element */
"use client"
import * as React from "react"
import { useInView } from "react-intersection-observer"

export default function HalfBanner() {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    // triggerOnce: true,
  })

  return (
    <>
      <div
        ref={ref}
        className="position-relative block w-screen overflow-hidden h-screen bg-black border-white text-white my-36"
        // position relative is important for the absolute positioned icon in the middle
        style={{ position: "relative", zIndex: "0" }}
      >
        <div className="block lg:inline-block bg-black w-screen h-1/2 lg:w-1/2 lg:h-full">
          <div className="h-1/5 md:h-1/3 lg:h-2/5"></div>
          <div
            className={`${
              inView ? "heroText opacity-1" : "opacity-0"
            } px-6 lg:px-12 lg:pr-24 text-yellow-500`}
          >
            <div className="uppercase text-3xl">Embrace Change</div>
            <div className="text-lg">
              Adapt, Innovate, and Succeed to embrace change in a dynamic
              landscape
            </div>
          </div>
        </div>
        <div
          //   className="block lg:inline-block text-center"
          className={`${inView ? "heroText opacity-1" : "opacity-0"}`}
          style={{
            position: "absolute",
            width: "98px",
            height: "auto",
            top: "50%",
            left: "50%",
            // right: 0,
            margin: "auto",
            transform: "translate(-50%, -50%)",
            zIndex: "10",
          }}
        >
          <img src="/copy.png" alt="copyright image" />
        </div>
        <div
          className={`${
            inView ? "heroText opacity-1" : "opacity-0"
          } block lg:inline-block bg-yellow-500 w-screen h-1/2 lg:w-1/2 lg:h-full`}
          //   style={{ animationDelay: "250ms" }}
        >
          <div className="h-1/5 md:h-1/3 lg:h-2/5"></div>
          <div
            className={`${
              inView ? "heroText opacity-1" : "opacity-0"
            } px-6 lg:px-12 lg:pl-24 text-right`}
          >
            <div className="uppercase text-3xl text-black">Core Values</div>
            <div className="text-lg text-black">
              Sustain the core values of your business and uphold the pillars of
              your integrity
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
