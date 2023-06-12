import HeroBanner from "@/components/HeroBanner"
import ImageGrid from "@/components/ImageGrid"
import Carousel from "@/components/Carousel"
import HalfBanner from "@/components/HalfBanner"
import SquareGrid from "@/components/SquareGrid"

export default function Home() {
  return (
    <main>
      <div className="w-full bg-black">
        <HeroBanner
          color1={"bg-blue-700"}
          color2={"bg-violet-500"}
          color3={"bg-fuchsia-400"}
          title={"Our Partners"}
          subtitle={
            "We work with our partners to collaborate and deliver the best possible. We live to serve"
          }
        />
        <ImageGrid />
        <SquareGrid />
      </div>
    </main>
  )
}
