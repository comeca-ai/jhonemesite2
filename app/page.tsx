import Hero from "@/components/hero"
import JourneyTimeline from "@/components/journey-timeline"
import About from "@/components/about"
import MediaAppearances from "@/components/media-appearances"
import Companies from "@/components/companies"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <JourneyTimeline />
      <About />
      <MediaAppearances />
      <Companies />
      <Footer />
    </main>
  )
}
