/* eslint-disable @next/next/no-img-element */
"use client"
import * as React from "react"

export default function ImageGrid() {
  return (
    <div className="block m-auto bg-black min-h-screen w-screen lg:max-w-5xl pt-32">
      <div
        className="imgGrid w-full md:w-1/3 block md:inline-block m-auto py-14"
        style={{ animationDelay: "250ms" }}
      >
        <div className="uppercase table m-auto text-white text-2xl">title</div>
        <img
          className="rounded-full py-6 object-cover w-44 h-auto m-auto"
          src="/handshake.png"
          alt="handshake"
        ></img>
        <div className="px-10 table m-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
      </div>
      <div
        className="imgGrid w-full md:w-1/3 block md:inline-block m-auto py-14"
        style={{ animationDelay: "500ms" }}
      >
        <div className="uppercase table m-auto text-white text-2xl">title</div>
        <img
          className="rounded-full py-6 object-cover w-44 h-auto m-auto"
          src="/handshake.png"
          alt="handshake"
        ></img>
        <div className="px-10 table m-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
      </div>
      <div
        className="imgGrid w-full md:w-1/3 block md:inline-block m-auto py-14"
        style={{ animationDelay: "750ms" }}
      >
        <div className="uppercase table m-auto text-white text-2xl">title</div>
        <img
          className="rounded-full py-6 object-cover w-44 h-auto m-auto"
          src="/handshake.png"
          alt="handshake"
        ></img>
        <div className="px-10 table m-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
      </div>
    </div>
  )
}
