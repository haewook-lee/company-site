import HeroBanner from "@/components/HeroBanner"
import ImageGrid from "@/components/ImageGrid"
import Carousel from "@/components/Carousel"
import HalfBanner from "@/components/HalfBanner"

export default function Home() {
  return (
    <main>
      <div className="w-full bg-black">
        <HeroBanner />
        <ImageGrid />
        <HalfBanner />
      </div>
    </main>
  )
}
