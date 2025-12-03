import Contact from "@/components/contact"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vamos Conversar | Jhonata Emerick",
  description: "Entre em contato com Jhonata Emerick para palestras, consultorias ou parcerias",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Contact />
      <Footer />
    </main>
  )
}
