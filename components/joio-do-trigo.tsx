"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Mail, Users, BarChart2, Clock, ExternalLink, CheckCircle, Calendar } from "lucide-react"

export default function JoioDoTrigo() {
  return (
    <section id="joio-do-trigo" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
      <div className="absolute inset-0 bg-[url('/binary-bg-light.png')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with logo and title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-50 mb-4">
            <Mail className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">O Joio do Trigo</h1>
          <p className="text-xl text-primary-600 font-medium max-w-2xl">
            Separando o essencial do ruído no mundo da Inteligência Artificial e Dados
          </p>
        </div>

        {/* Hero section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Uma newsletter para quem quer ir além do hype da IA
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Toda quinta-feira, entregamos análises profundas sobre o mercado de IA, tendências emergentes e insights
                práticos para profissionais e líderes que querem se manter à frente no mundo dos dados.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Análises exclusivas sobre o mercado de IA</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Cases práticos e aplicações reais de dados</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Conteúdo direto e sem enrolação</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/placeholder.svg?key=newsletter-hero"
                alt="O Joio do Trigo Newsletter"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column - Newsletter preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?key=newsletter-preview"
                  alt="Newsletter O Joio do Trigo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="bg-primary-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    Última edição
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2">
                    Como a IA está transformando o mercado financeiro em 2023
                  </h3>
                  <p className="text-white/80 text-sm mt-1">Enviada em 28 de abril de 2023</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  "Nesta edição, analisamos como os algoritmos de IA estão revolucionando análises de risco, detecção de
                  fraudes e atendimento ao cliente no setor financeiro..."
                </p>
                <Link
                  href="https://www.ojoiodotrigo.com.br/edicoes"
                  target="_blank"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Ler edição completa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Previous editions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary-600" />
                Edições anteriores
              </h3>

              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-800">O futuro do trabalho com IA generativa</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">21 de abril de 2023</span>
                    <Link href="#" className="text-sm text-primary-600 hover:text-primary-700">
                      Ler
                    </Link>
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-800">5 cases de sucesso em Data Science</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">14 de abril de 2023</span>
                    <Link href="#" className="text-sm text-primary-600 hover:text-primary-700">
                      Ler
                    </Link>
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-800">Regulamentação de IA: o que esperar?</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">7 de abril de 2023</span>
                    <Link href="#" className="text-sm text-primary-600 hover:text-primary-700">
                      Ler
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">Como implementar IA em pequenas empresas</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">31 de março de 2023</span>
                    <Link href="#" className="text-sm text-primary-600 hover:text-primary-700">
                      Ler
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full border-primary-600 text-primary-600 hover:bg-primary-50"
                  asChild
                >
                  <Link href="https://www.ojoiodotrigo.com.br/edicoes" target="_blank">
                    Ver todas as edições
                  </Link>
                </Button>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary-600" />O que dizem nossos leitores
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 italic mb-3">
                    "A newsletter que mais me ajuda a entender o que realmente importa no mundo da IA. Conteúdo direto e
                    relevante para quem toma decisões."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-800">Marcelo Silva</p>
                      <p className="text-sm text-gray-500">CTO, TechBrasil</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 italic mb-3">
                    "Jhonata tem o dom de transformar temas complexos em insights acionáveis. Leitura obrigatória toda
                    quinta-feira."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-800">Ana Ferreira</p>
                      <p className="text-sm text-gray-500">Head de Inovação, Banco Digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Subscription and stats */}
          <div className="lg:col-span-7 space-y-8">
            {/* Subscription form */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Assine agora</h3>
                  <p className="text-white/90 mb-4">
                    Junte-se a mais de 1.800 profissionais que recebem semanalmente insights valiosos sobre IA e dados.
                  </p>
                  <div className="flex items-center space-x-2 text-white/80 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Enviada toda quinta-feira • Cancelamento a qualquer momento</span>
                  </div>
                </div>

                <div className="md:flex-1">
                  <form className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      className="bg-white border-transparent focus:border-white"
                    />
                    <Button type="submit" className="w-full bg-white text-primary-700 hover:bg-gray-100">
                      Assinar Newsletter
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Newsletter stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 mb-4 mx-auto">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-800">1.874+</p>
                  <p className="text-gray-600 text-sm">Assinantes ativos</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 mb-4 mx-auto">
                  <BarChart2 className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-800">42%</p>
                  <p className="text-gray-600 text-sm">Taxa de abertura</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 mb-4 mx-auto">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-800">Quinta</p>
                  <p className="text-gray-600 text-sm">Enviada semanalmente</p>
                </div>
              </div>
            </div>

            {/* Newsletter description */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Por que assinar O Joio do Trigo?</h3>

              <p className="text-gray-600 mb-6">
                Uma newsletter semanal que traz análises profundas sobre o mercado de IA, tendências emergentes e
                insights práticos para profissionais e líderes que querem se manter à frente no mundo dos dados e da
                inteligência artificial.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mt-1">
                    <BarChart2 className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-800">Análises de mercado</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Tendências, oportunidades e desafios no setor de IA e dados
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mt-1">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-800">Comunidade exclusiva</h4>
                    <p className="text-sm text-gray-600 mt-1">Acesso a uma rede de profissionais e entusiastas de IA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Audience demographics */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary-600" />
                Perfil dos assinantes
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">Fundadores</span>
                      <span className="font-medium">4,7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: "4.7%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">CEOs</span>
                      <span className="font-medium">4,6%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: "4.6%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">Cofundadores</span>
                      <span className="font-medium">3,6%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: "3.6%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">Membros do conselho</span>
                      <span className="font-medium">1,6%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: "1.6%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">Engenheiros de software</span>
                      <span className="font-medium">1,3%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: "1.3%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">Tomadores de decisão</span>
                      <span className="font-medium">15%+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Topics covered section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Temas abordados na newsletter</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-600"
                >
                  <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                  <path d="M21.18 8.02A10 10 0 0 0 12 2v10h10a10.01 10.01 0 0 0-.82-3.98Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Análise de Dados</h3>
              <p className="text-gray-600">
                Técnicas avançadas de análise e visualização de dados para extrair insights valiosos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-600"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10v2H7z" />
                  <path d="M7 11h10v2H7z" />
                  <path d="M7 15h4v2H7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Machine Learning</h3>
              <p className="text-gray-600">
                Aplicações práticas de algoritmos de ML e como implementá-los em seu negócio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-600"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 15v4h16a2 2 0 0 0 0-4H3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">IA Generativa</h3>
              <p className="text-gray-600">
                Tendências e aplicações de modelos como GPT, DALL-E e outros sistemas generativos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-600"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M13 5v2" />
                  <path d="M13 17v2" />
                  <path d="M13 11v2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Ética em IA</h3>
              <p className="text-gray-600">
                Discussões sobre responsabilidade, viés e transparência no desenvolvimento de IA.
              </p>
            </div>
          </div>
        </div>

        {/* Footer with link to website */}
        <div className="mt-12 text-center">
          <Link
            href="https://www.ojoiodotrigo.com.br"
            target="_blank"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            Visitar o site oficial de O Joio do Trigo
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
