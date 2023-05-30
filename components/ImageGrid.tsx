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

export default function ImageGrid() {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    // triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className="block m-auto bg-black min-h-screen w-screen pt-32 my-36"
    >
      {imgItems.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={`${
              inView ? "imgGrid opacity-1" : "opacity-0"
            } w-full md:w-1/3 block md:inline-block m-auto py-14 align-text-top`}
            // style={{ animationDelay: `${(index + 1) * 250 + "ms"}` }}
          >
            <div
              className={`uppercase table m-auto text-white text-2xl xl:text-4xl`}
            >
              {item.title}
            </div>
            <img
              className="rounded-full py-6 object-cover w-44 xl:w-64 h-auto m-auto"
              src={item.img}
              alt={item.alt}
            ></img>
            <div className="px-10 table m-auto text-white xl:text-2xl">
              {item.text}
            </div>
          </div>
        )
      })}
    </div>
  )
}
