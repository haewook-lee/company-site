import HeroBanner from "@/components/HeroBanner"
import ImageGrid from "@/components/ImageGrid"
import Carousel from "@/components/Carousel"
import HalfBanner from "@/components/HalfBanner"

export default function Home() {
  return (
    <main>
      <div className="w-full bg-black">
        <HeroBanner
          color1={"bg-amber-800"}
          color2={"bg-emerald-600"}
          color3={"bg-teal-300"}
          title={"People First"}
          subtitle={
            "We understand that behind every success there are the people that make it all possible"
          }
        />
        <ImageGrid />
        {/* <Carousel /> */}
        <HalfBanner />
      </div>
    </main>
  )
}
