import Image from "next/image"
import HeroBanner from "@/components/HeroBanner"
import ImageGrid from "@/components/ImageGrid"
import Carousel from "@/components/Carousel"
import HalfBanner from "@/components/HalfBanner"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <div className="w-full bg-black">
        <HeroBanner />
        <ImageGrid />
        {/* <Carousel /> */}
        <HalfBanner />
        <Footer />
      </div>
    </main>
  )
}
