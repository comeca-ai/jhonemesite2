import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section id="newsletter" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Newsletter</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Fique por dentro das novidades</h3>
            <p className="text-xl text-primary-600 font-medium">Receba atualizações sobre IA, dados e tecnologia</p>

            <div className="space-y-4 text-gray-600">
              <p>
                Assine nossa newsletter para receber conteúdo exclusivo sobre as últimas tendências em inteligência
                artificial, análise de dados e tecnologia.
              </p>
            </div>

            <form className="space-y-4 pt-4">
              <Input type="email" placeholder="Seu melhor e-mail" className="bg-white border-gray-200" />
              <Button className="w-full bg-primary-600 hover:bg-primary-700">Assinar Newsletter</Button>
            </form>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?key=inmn7" alt="Newsletter" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
