import JoioDoTrigo from "@/components/joio-do-trigo"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O Joio do Trigo | Jhonata Emerick",
  description: "Newsletter semanal sobre Inteligência Artificial, Dados e Tecnologia",
}

export default function JoioDoTrigoPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <JoioDoTrigo />
      <Contact />
      <Footer />
    </main>
  )
}
