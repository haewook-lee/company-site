import Image from "next/image"
import HeroBanner from "@/components/HeroBanner"
import ImageGrid from "@/components/ImageGrid"
import Carousel from "@/components/Carousel"

export default function Home() {
  return (
    <main>
      <div className="w-full bg-black">
        <HeroBanner />
        <ImageGrid />
        {/* <Carousel /> */}
      </div>
    </main>
  )
}
