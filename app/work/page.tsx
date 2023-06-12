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
          color1={"bg-teal-300"}
          color2={"bg-cyan-400"}
          color3={"bg-blue-700"}
          title={"Product Quality"}
          subtitle={
            "Our work is a reflection of our commitment to quality. You deserve the absolute best"
          }
        />
        <SquareGrid />
      </div>
    </main>
  )
}
