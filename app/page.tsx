import HeroBanner from "@/components/HeroBanner"
import ImageGrid from "@/components/ImageGrid"
import HalfBanner from "@/components/HalfBanner"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <main>
      <div className="w-full bg-black">
        <HeroBanner />
        <ImageGrid />
        <HalfBanner />
        <ContactForm />
      </div>
    </main>
  )
}
