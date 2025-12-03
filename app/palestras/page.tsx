import Speaking from "@/components/speaking"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Palestras | Jhonata Emerick",
  description: "Palestras transformadoras sobre Inteligência Artificial, Inovação e Empreendedorismo",
}

export default function SpeakingPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Speaking />
      <Footer />
    </main>
  )
}
