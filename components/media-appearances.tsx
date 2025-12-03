"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ChevronRight, Play, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MediaAppearances() {
  const [activeCategory, setActiveCategory] = useState("featured")

  const featuredMedia = [
    {
      logo: "/forbes-logo.png",
      image: "/jhonata-forbes.png",
      title: "10 dicas para quem sonha em trabalhar com inteligência artificial",
      source: "Forbes",
      description:
        "Brasil já é o país que mais contrata profissionais do setor do mundo, segundo estudo recente da Universidade de Stanford.",
      link: "https://forbes.com.br/carreira/2021/07/10-dicas-para-quem-sonha-em-trabalhar-com-inteligência-artificial/",
      date: "Julho 2021",
    },
    {
      logo: "/exame-logo.png",
      image: "/jhonata-exame.png",
      title: "Decisões precisam ser baseadas em dados estruturados e que reflitam a realidade do negócio",
      source: "Exame",
      description:
        "Entrevista para a matéria 'Integrar para entregar' sobre como a integração de dados é crucial para uma boa experiência do usuário.",
      link: "https://exame.com/revista-exame/integrar-para-entregar/",
      date: "Março 2022",
    },
  ]

  const videoInterviews = [
    {
      logo: "/cnbc-logo.png",
      image: "/cnbc-times-interview.png",
      title: "Aumento da inadimplência entre apostadores online: o que está acontecendo?",
      source: "CNBC/Times Brasil",
      description:
        "Análise sobre o crescimento da inadimplência no setor de apostas online, onde dados de IA monitoraram apostadores e indicam inadimplência de 42%.",
      link: "https://www.youtube.com/watch?v=WBGsQPTcixY",
      date: "Setembro 2022",
    },
    {
      logo: "/safra-logo.png",
      image: "/safra-tech-thursday.png",
      title: "Tech Thursday Safra | Datarisk",
      source: "Safra",
      description:
        "Entrevista sobre modelos preditivos e análises de dados para otimizar a tomada de decisão em diferentes setores e formatos de negócio.",
      link: "https://www.youtube.com/watch?v=vZ_iSzsc4dU",
      date: "Novembro 2022",
    },
  ]

  const columnistRoles = [
    {
      publication: "Startups.com.br",
      logo: "/startups-com-br-logo.png",
      title: "Colunista em Startups.com.br",
      description: "Artigos sobre inovação e empreendedorismo em IA",
      link: "#",
      articles: [
        { title: "Como a IA está transformando startups brasileiras", date: "Maio 2023" },
        { title: "Captação de investimentos para startups de IA", date: "Março 2023" },
      ],
    },
    {
      publication: "Febraban Tech",
      logo: "/febraban-tech-logo.png",
      title: "Colunista em Febraban Tech",
      description: "Artigos sobre tecnologia no setor financeiro",
      link: "#",
      articles: [
        { title: "O futuro dos bancos com IA generativa", date: "Junho 2023" },
        { title: "Segurança de dados no setor financeiro", date: "Abril 2023" },
      ],
    },
    {
      publication: "MIT Technology Review",
      logo: "/mit-technology-review-logo.png",
      title: "Colaborador em MIT Technology Review",
      description: "Artigos sobre o futuro da inteligência artificial",
      link: "#",
      articles: [
        { title: "Regulamentação de IA: desafios globais", date: "Julho 2023" },
        { title: "O impacto da IA na economia global", date: "Maio 2023" },
      ],
    },
  ]

  const articles = [
    {
      publication: "Valor Econômico",
      logo: "/valor-economico-logo.png",
      title: "A revolução silenciosa dos dados nas empresas brasileiras",
      date: "Agosto 2022",
      link: "#",
    },
    {
      publication: "InfoMoney",
      logo: "/infomoney-logo.png",
      title: "Como a IA está transformando o mercado financeiro",
      date: "Outubro 2022",
      link: "#",
    },
    {
      publication: "Época Negócios",
      logo: "/epoca-negocios-logo.png",
      title: "Empresas que usam IA têm 32% mais produtividade, aponta estudo",
      date: "Janeiro 2023",
      link: "#",
    },
    {
      publication: "Folha de São Paulo",
      logo: "/placeholder.svg?height=80&width=120&query=Folha%20de%20São%20Paulo%20logo",
      title: "Inteligência artificial: oportunidade ou ameaça para o mercado de trabalho?",
      date: "Março 2023",
      link: "#",
    },
  ]

  const stats = [
    { number: "+60", text: "Artigos publicados" },
    { number: "22", text: "Veículos diferentes" },
    { number: "3", text: "Colunas fixas" },
    { number: "1.4M+", text: "Pessoas impactadas" },
  ]

  return (
    <section id="media" className="py-24 bg-white">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Na Imprensa</h2>
          <p className="text-xl text-gray-600">
            Contribuições, entrevistas e análises em veículos de comunicação nacionais e internacionais
          </p>
        </div>

        {/* Media categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            onClick={() => setActiveCategory("featured")}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeCategory === "featured"
                ? "bg-primary-600 text-white shadow-md hover:bg-primary-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
            }`}
          >
            Destaques
          </Button>

          <Button
            onClick={() => setActiveCategory("videos")}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeCategory === "videos"
                ? "bg-primary-600 text-white shadow-md hover:bg-primary-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
            }`}
          >
            Entrevistas em Vídeo
          </Button>

          <Button
            onClick={() => setActiveCategory("columnist")}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeCategory === "columnist"
                ? "bg-primary-600 text-white shadow-md hover:bg-primary-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
            }`}
          >
            Colunista
          </Button>

          <Button
            onClick={() => setActiveCategory("articles")}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeCategory === "articles"
                ? "bg-primary-600 text-white shadow-md hover:bg-primary-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
            }`}
          >
            Artigos
          </Button>

          <Button
            onClick={() => setActiveCategory("stats")}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeCategory === "stats"
                ? "bg-primary-600 text-white shadow-md hover:bg-primary-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
            }`}
          >
            Presença na Mídia
          </Button>
        </div>

        {/* Featured media */}
        {activeCategory === "featured" && (
          <div className="space-y-16">
            {featuredMedia.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div
                  className={`relative h-[300px] rounded-xl overflow-hidden shadow-lg ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>

                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="h-10 relative w-24 mr-4">
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={item.source}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>

                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium text-sm transition-colors shadow-sm"
                  >
                    Ler matéria completa
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-12">
              <Button
                onClick={() => setActiveCategory("articles")}
                className="px-6 py-2.5 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-full font-medium shadow-sm transition-colors"
              >
                Ver mais publicações <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Video interviews */}
        {activeCategory === "videos" && (
          <div className="space-y-16">
            {videoInterviews.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div
                  className={`relative h-[300px] rounded-xl overflow-hidden shadow-lg group ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />

                  {/* YouTube play button overlay */}
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block absolute inset-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play fill="white" className="w-8 h-8 md:w-10 md:h-10 ml-1 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>

                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="h-10 relative w-24 mr-4">
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={item.source}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>

                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium text-sm transition-colors shadow-sm"
                  >
                    Assistir entrevista
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Columnist roles */}
        {activeCategory === "columnist" && (
          <div className="space-y-12">
            {columnistRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="p-8 bg-gray-50">
                    <div className="h-12 mb-4 relative">
                      <Image
                        src={role.logo || "/placeholder.svg"}
                        alt={role.publication}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{role.title}</h3>
                    <p className="text-gray-600 mb-4">{role.description}</p>
                    <Link
                      href={role.link}
                      className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-colors shadow-sm"
                    >
                      Ver todos os artigos
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Artigos recentes</h4>
                    <div className="space-y-4">
                      {role.articles.map((article, idx) => (
                        <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                          <h5 className="font-medium text-gray-800">{article.title}</h5>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm text-gray-500">{article.date}</span>
                            <Link
                              href="#"
                              className="text-sm text-primary-600 hover:text-primary-700 font-medium hover:underline"
                            >
                              Ler artigo
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Articles */}
        {activeCategory === "articles" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {articles.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-8 relative w-24">
                        <Image
                          src={article.logo || "/placeholder.svg"}
                          alt={article.publication}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{article.title}</h3>
                    <Link
                      href={article.link}
                      className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-colors shadow-sm"
                    >
                      Ler artigo
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                asChild
                className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-sm transition-colors"
              >
                <Link href="#">
                  Ver todos os artigos
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Media Stats */}
        {activeCategory === "stats" && (
          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Presença na Mídia</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 mb-4">
                      <BarChart2 className="h-6 w-6 text-primary-600" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-3">{stat.number}</p>
                    <p className="text-gray-700 font-medium">{stat.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Jhonata Emerick é uma voz respeitada no cenário de tecnologia e inteligência artificial, contribuindo
                  regularmente com análises e insights em diversos veículos de comunicação.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Principais Veículos</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Forbes Brasil</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Exame</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>CNBC/Times Brasil</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Valor Econômico</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>InfoMoney</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Temas Abordados</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Inteligência Artificial</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Análise de Dados</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Transformação Digital</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Empreendedorismo</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Inovação Tecnológica</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Formatos</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Entrevistas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Artigos de Opinião</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Participação em Podcasts</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Webinars</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    <span>Painéis de Discussão</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
