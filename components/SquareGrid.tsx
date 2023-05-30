/* eslint-disable @next/next/no-img-element */
"use client"
import * as React from "react"
import { useInView } from "react-intersection-observer"

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
    title: "Connect",
    text: "Unleash the power of personalized consumer connections",
  },
  {
    img: "/tree.png",
    alt: "tree",
    title: "Plan",
    text: "Unlock the true potential of your business with thoughtful planning",
  },
  {
    img: "/jump.png",
    alt: "jump",
    title: "Grow",
    text: "Accelerate your success through sustainable growth initiatives",
  },
]

export default function SquareGrid() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className="block m-auto bg-black min-h-screen w-screen my-36 px-4"
    >
      {imgItems.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={`${
              inView ? "imgGrid opacity-1" : "opacity-0"
            } squareGrid w-full md:w-1/3 border-black border-4 block md:table-cell m-auto py-48 text-align-top bg-cover bg-center max-h-3/4`}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div
              className={`uppercase table m-auto text-black text-2xl xl:text-4xl`}
            >
              {item.title}
            </div>
            <div className="px-10 table m-auto text-black xl:text-2xl">
              {item.text}
            </div>
          </div>
        )
      })}
    </div>
  )
}
