/* eslint-disable @next/next/no-img-element */
"use client"
import * as React from "react"

type ImgItems = {
  img: string
  alt: string
  title: string
  text: string
}

const imgItems: ImgItems[] = [
  {
    img: "/handshake.png",
    alt: "handshake",
    title: "title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad inim veniam",
  },
  {
    img: "/handshake.png",
    alt: "handshake",
    title: "title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad inim veniam",
  },
  {
    img: "/handshake.png",
    alt: "handshake",
    title: "title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad inim veniam",
  },
]

export default function ImageGrid() {
  return (
    <div className="block m-auto bg-black min-h-screen w-screen lg:max-w-5xl pt-32">
      {imgItems.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="imgGrid w-full md:w-1/3 block md:inline-block m-auto py-14"
            style={{ animationDelay: `${(index + 1) * 250 + "ms"}` }}
          >
            <div className="uppercase table m-auto text-white text-2xl">
              {item.title}
            </div>
            <img
              className="rounded-full py-6 object-cover w-44 h-auto m-auto"
              src={item.img}
              alt={item.alt}
            ></img>
            <div className="px-10 table m-auto text-white">{item.text}</div>
          </div>
        )
      })}
    </div>
  )
}
