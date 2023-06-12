import HeroBanner from "@/components/HeroBanner"
import ImageGrid from "@/components/ImageGrid"
import Carousel from "@/components/Carousel"
import HalfBanner from "@/components/HalfBanner"
import SquareGrid from "@/components/SquareGrid"
import MapGrid from "@/components/Map"

export default function Home() {
  return (
    <main>
      <div className="w-full bg-black">
        <HeroBanner
          color1={"bg-fuchsia-400"}
          color2={"bg-red-400"}
          color3={"bg-yellow-500"}
          title={"Let's Talk"}
          subtitle={" "}
        />
        <MapGrid />
      </div>
    </main>
  )
}
