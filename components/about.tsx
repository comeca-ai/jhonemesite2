import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Twitter, BookOpen, Mail, ExternalLink } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-medium mb-2">Sobre</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            O <span className="text-amber-500">Visionário Pragmático</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combinando a visão de futuro com o realismo dos resultados — a voz da razão na sala cheia de hype.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column with image and social links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/jhonata-speaking.jpeg"
                alt="Jhonata Emerick palestrando sobre Inteligência Artificial e Saúde"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-white text-xl font-medium">Palestra sobre Inteligência Artificial e Saúde</h3>
                <p className="text-white/90 text-sm mt-1">Em parceria com MIT, Hospital Sírio-Libanês e Biozeus</p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 mb-2">Conecte-se comigo</h4>

              <Link
                href="https://www.linkedin.com/in/jhonataemerick/"
                target="_blank"
                className="flex items-center space-x-3 text-slate-700 hover:text-amber-600 transition-colors group"
              >
                <div className="bg-slate-800 text-white p-2 rounded-full group-hover:bg-amber-500 transition-colors">
                  <Linkedin size={20} />
                </div>
                <span>linkedin.com/in/jhonataemerick</span>
              </Link>

              <Link
                href="https://twitter.com/jhonataemck"
                target="_blank"
                className="flex items-center space-x-3 text-slate-700 hover:text-amber-600 transition-colors group"
              >
                <div className="bg-slate-800 text-white p-2 rounded-full group-hover:bg-amber-500 transition-colors">
                  <Twitter size={20} />
                </div>
                <span>twitter.com/jhonataemck</span>
              </Link>

              <Link
                href="https://www.instagram.com/jhonataemck/"
                target="_blank"
                className="flex items-center space-x-3 text-slate-700 hover:text-amber-600 transition-colors group"
              >
                <div className="bg-slate-800 text-white p-2 rounded-full group-hover:bg-amber-500 transition-colors">
                  <Instagram size={20} />
                </div>
                <span>instagram.com/jhonataemck</span>
              </Link>

              <Link
                href="/livro"
                className="flex items-center space-x-3 text-slate-700 hover:text-amber-600 transition-colors group"
              >
                <div className="bg-slate-800 text-white p-2 rounded-full group-hover:bg-amber-500 transition-colors">
                  <BookOpen size={20} />
                </div>
                <span>Conheça meu livro</span>
              </Link>

              <Link
                href="/joio-do-trigo"
                className="flex items-center space-x-3 text-slate-700 hover:text-amber-600 transition-colors group"
              >
                <div className="bg-amber-500 text-slate-900 p-2 rounded-full group-hover:bg-amber-600 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium">O Joio do Trigo Newsletter</span>
              </Link>
            </div>
          </div>

          {/* Right column with text content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                  Founder & CEO Datarisk
                </span>
                <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                  Presidente ABRIA
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                Transformando dados em <span className="text-amber-500">vantagem competitiva</span>
              </h3>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600">
              <p>
                Sou Jhonata Emerick, o estrategista que separa o sinal do ruído na Inteligência Artificial. Com PhD em
                Engenharia da Computação pela Poli-USP e uma trajetória que inclui um exit bem-sucedido para o iFood,
                trago uma perspectiva única: a do cientista que também é empresário.
              </p>

              <p>
                Diferente de futuristas teóricos, combino rigor acadêmico com experiência real de quem construiu,
                escalou e vendeu empresas de tecnologia. Na Datarisk, já entregamos mais de 500 soluções de IA para
                clientes como Banco Safra, Bradesco e hospitais de referência em toda a América Latina.
              </p>

              <p>
                Como presidente da ABRIA (Associação Brasileira de IA), estou no centro das discussões regulatórias e
                éticas que moldam o futuro da tecnologia no Brasil. E através da newsletter{" "}
                <Link
                  href="/joio-do-trigo"
                  className="text-amber-600 hover:text-amber-700 no-underline font-semibold inline-flex items-center gap-1"
                >
                  O Joio do Trigo
                  <ExternalLink className="h-3 w-3" />
                </Link>
                , ajudo líderes a navegarem o caos de novidades com curadoria de alta qualidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3">Formação de Elite</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span className="text-slate-600">PhD Engenharia da Computação - Poli-USP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span className="text-slate-600">Mestrado em Finanças Quantitativas - FGV</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span className="text-slate-600">Engenharia Aeronáutica - EESC-USP</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h4 className="font-bold text-slate-800 mb-3">Marcos de Execução</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span className="text-slate-600">Exit bem-sucedido: Rapiddo → iFood (2018)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span className="text-slate-600">+500 projetos de IA entregues na LATAM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span className="text-slate-600">
                      Autor:{" "}
                      <Link href="/livro" className="text-amber-600 hover:text-amber-700 font-medium">
                        "Econometria com EViews"
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
