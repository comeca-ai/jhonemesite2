import Book from "@/components/book"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Econometria com EViews | Jhonata Emerick",
  description: "Guia essencial de conceitos e aplicações em econometria utilizando o software EViews",
}

export default function BookPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Book />
      <Contact />
      <Footer />
    </main>
  )
}
