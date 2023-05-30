"use client"
import * as React from "react"
import { useInView } from "react-intersection-observer"

type BannerInfo = {
  color1?: string
  color2?: string
  color3?: string
  title?: string
  subtitle?: string
}

export default function HeroBanner(bannerInfo?: BannerInfo) {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  })

  return (
    <>
      <div
        ref={ref}
        className="w-screen h-screen bg-black border-white text-white mt-26"
      >
        <div className="float-left bg-black w-2/5 h-full z-20">
          <div className="h-1/5 md:h-1/3 lg:2/5"></div>
          <div className="px-3 md:px-6 lg:px-12 heroText">
            <div className="uppercase text-3xl xl:text-5xl">
              {bannerInfo?.title ? bannerInfo.title : "Are You Ready?"}
            </div>
            <div className="text-lg xl:text-2xl">
              {bannerInfo?.subtitle
                ? bannerInfo.subtitle
                : "Harness the power of innovation to drive your business forward in the evolving digital space"}
            </div>
          </div>
        </div>
        <div
          className={`${
            inView ? "heroBlocks1 opacity-1" : "opacity-0"
          } float-left ${
            bannerInfo?.color1 ? bannerInfo.color1 : "bg-yellow-500"
          } w-1/5 h-full`}
          // style={{ animationDelay: "250ms" }}
        ></div>
        <div
          className={`${
            inView ? "heroBlocks2 opacity-1" : "opacity-0"
          } float-left ${
            bannerInfo?.color1 ? bannerInfo.color2 : "bg-orange-600"
          } w-1/5 h-full`}
          // style={{ animationDelay: "500ms" }}
        ></div>
        <div
          className={`${
            inView ? "heroBlocks3 opacity-1" : "opacity-0"
          } float-left ${
            bannerInfo?.color1 ? bannerInfo.color3 : "bg-amber-800"
          } w-1/5 h-full`}
          // style={{ animationDelay: "750ms" }}
        ></div>
      </div>
    </>
  )
}
