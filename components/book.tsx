import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, BookOpen, Download, ShoppingCart } from "lucide-react"

export default function Book() {
  return (
    <section id="book" className="section-padding bg-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">Econometria com EViews</h1>
        <p className="text-xl text-primary-600 font-medium text-center mb-16">
          GUIA ESSENCIAL DE CONCEITOS E APLICAÇÕES
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg bg-white p-6 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[320px] mx-auto">
              <Image
                src="/econometria-eviews-book.jpeg"
                alt="Livro Econometria com Eviews"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={star <= 4.6 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    size={24}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">4,6</span>
              <span className="text-gray-500">(32 avaliações)</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Sobre o livro</h2>
              <p className="text-lg text-gray-600">
                O guia essencial e inédito para estudantes e profissionais que desejam dominar a econometria e aplicar
                seus conhecimentos em análises econômicas e financeiras com eficiência e precisão.
              </p>

              <p className="text-lg text-gray-600">
                Escrito por Bruno Buscariolli e Jhonata Emerick, este livro é uma referência para quem busca entender e
                aplicar conceitos econométricos utilizando o software Eviews.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Detalhes</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-1">Editora</h3>
                  <p>Saint Paul Editora</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-1">Idioma</h3>
                  <p>Português</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-1">ISBN</h3>
                  <p>8580040728</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-1">Páginas</h3>
                  <p>320</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 flex items-center gap-2 py-6">
                <Link
                  href="https://www.amazon.com.br/Econometria-EViews-Essencial-Conceitos-Aplica%C3%A7%C3%B5es/dp/8580040728"
                  target="_blank"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Comprar o livro
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 flex items-center gap-2 py-6"
              >
                <Link href="#sample-chapter">
                  <BookOpen className="h-5 w-5" />
                  Ler amostra
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Para quem é este livro?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span>Estudantes de economia, finanças e áreas correlatas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span>Profissionais que trabalham com análise de dados econômicos</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span>Pesquisadores que precisam aplicar métodos econométricos</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span>Analistas de mercado financeiro</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">O que você vai aprender</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span>Fundamentos de econometria aplicada</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span>Como utilizar o software EViews de forma eficiente</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span>Modelos de regressão linear e não-linear</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span>Análise de séries temporais e previsão</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Sobre os autores</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-bold">Bruno Buscariolli</p>
                  <p className="text-gray-600 text-sm">
                    Economista com vasta experiência em análise de dados e econometria aplicada.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 overflow-hidden rounded-full mr-3 flex-shrink-0 relative">
                  <Image src="/jhoneme.jpeg" alt="Jhonata Emerick" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold">Jhonata Emerick</p>
                  <p className="text-gray-600 text-sm">
                    Especialista em inteligência artificial aplicada a negócios e fundador da Datarisk, com doutorado em
                    Engenharia da Computação pela Poli-USP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="sample-chapter" className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Amostra do livro</h2>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Capítulo 1: Introdução à Econometria</h3>
            <p className="text-gray-600 mb-4">
              A econometria é uma disciplina que combina economia, matemática e estatística para analisar dados
              econômicos. Neste capítulo, apresentamos os conceitos fundamentais da econometria e sua importância para a
              análise econômica moderna.
            </p>
            <p className="text-gray-600 mb-4">
              Ao longo deste livro, você aprenderá como aplicar esses conceitos utilizando o software EViews, uma
              ferramenta poderosa para análise econométrica.
            </p>
            <div className="flex justify-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 font-medium"
              >
                <Link href="#">
                  <Download className="h-5 w-5" />
                  Baixar amostra completa (PDF)
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
