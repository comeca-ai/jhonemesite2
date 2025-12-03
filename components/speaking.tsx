"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Users, Clock, MapPin, ArrowRight, CheckCircle, Play } from "lucide-react"

export default function Speaking() {
  const [activeTab, setActiveTab] = useState<number>(0)

  const talks = [
    {
      title: "Do Potencial à Prática: Como a Inteligência Artificial Constrói Valor",
      subtitle: "Transformando conceitos em resultados tangíveis",
      description:
        "Nesta palestra, você aprenderá métodos poderosos que conectam a IA a oportunidades reais e tangíveis, transformando desafios em possibilidades concretas para indivíduos e empresas. Prepare-se para explorar o potencial da IA de maneira clara e aplicável ao seu contexto.",
      image: "/ai-business-conference.png",
      benefits: [
        "Entenda como implementar IA com foco em resultados",
        "Descubra métodos práticos para avaliar o ROI de projetos de IA",
        "Aprenda a identificar oportunidades de aplicação em seu negócio",
        "Conheça cases reais de sucesso em diferentes setores",
      ],
      audience: "Executivos, gestores, líderes de inovação e profissionais de tecnologia",
      duration: "45-60 minutos",
      format: "Presencial ou online",
    },
    {
      title: "O Poder da Ousadia",
      subtitle: "Uma jornada de superação e inovação",
      description:
        "Em uma palestra envolvente e inspiradora, Jhonata Emerick compartilha sua notável jornada de vida, desde os desafios iniciais até a construção do maior aplicativo de logística urbana da América Latina. Descubra como ele se tornou um dos mais destacados empreendedores em inteligência artificial e uma referência para influenciar tomadores de decisão.",
      image: "/inspirational-speech.png",
      benefits: [
        "Inspire-se com uma história real de superação e sucesso",
        "Descubra como transformar adversidades em oportunidades",
        "Aprenda estratégias para desenvolver uma mentalidade inovadora",
        "Entenda como a ousadia pode ser um diferencial competitivo",
      ],
      audience: "Empreendedores, estudantes, profissionais em transição de carreira e equipes corporativas",
      duration: "45-60 minutos",
      format: "Presencial ou online",
    },
  ]

  const testimonials = [
    {
      quote:
        "A palestra do Jhonata transformou nossa visão sobre IA. Conseguimos implementar três projetos com ROI mensurável em menos de seis meses.",
      author: "Maria Silva",
      position: "CTO, TechBrasil",
      company: "TechBrasil",
    },
    {
      quote:
        "Clareza, profundidade e aplicabilidade. A apresentação sobre IA foi um divisor de águas para nossa estratégia de inovação.",
      author: "Carlos Mendes",
      position: "Diretor de Inovação",
      company: "Hospital Albert Einstein",
    },
    {
      quote:
        "O Jhonata tem o dom de transformar conceitos complexos em insights acionáveis. Nossa equipe saiu da palestra com um plano de ação claro.",
      author: "Ana Ferreira",
      position: "Head de Transformação Digital",
      company: "Raízen",
    },
  ]

  const pastEvents = [
    {
      name: "AI Summit Brasil",
      location: "São Paulo, SP",
      date: "Outubro 2022",
      audience: "1.200+ participantes",
      image: "/tech-conference-audience.png",
    },
    {
      name: "Fórum de Inovação em Saúde",
      location: "Rio de Janeiro, RJ",
      date: "Maio 2022",
      audience: "800+ participantes",
      image: "/healthcare-innovation-forum.png",
    },
    {
      name: "Congresso Nacional de Tecnologia",
      location: "Brasília, DF",
      date: "Agosto 2022",
      audience: "1.500+ participantes",
      image: "/technology-congress.png",
    },
  ]

  return (
    <section id="speaking" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="absolute inset-0 bg-[url('/binary-bg-light.png')] bg-cover bg-center opacity-[0.03]"></div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-slate-200/40 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-100/50 rounded-full opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-block bg-amber-100 px-4 py-2 rounded-full">
              <span className="text-amber-700 font-medium">Palestras Transformadoras</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Inspirando <span className="text-amber-500">ações</span> e transformando{" "}
              <span className="text-amber-500">resultados</span>
            </h2>

            <p className="text-xl text-slate-600">
              Jhonata Emerick é reconhecido por suas palestras dinâmicas que combinam rigor científico, experiência
              prática e uma abordagem orientada a resultados mensuráveis.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <Link href="/vamos-conversar">
                  Contratar Palestra
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-slate-800 bg-white text-slate-800 hover:bg-slate-50 px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-lg"
              >
                <a href="#talk-details">Ver palestras disponíveis</a>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/jhonata-speaking.jpeg"
              alt="Jhonata Emerick palestrando"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
              <div className="flex items-center mb-3">
                <div className="bg-red-600 p-2 rounded-full mr-3">
                  <Play fill="white" className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">Assista um trecho</span>
              </div>
              <h3 className="text-white text-xl font-bold">Palestra no AI Summit Brasil</h3>
              <p className="text-white/80 text-sm mt-1">São Paulo, Outubro 2022</p>
            </div>
          </div>
        </div>

        {/* Talk details section */}
        <div id="talk-details" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Palestras Disponíveis</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Escolha entre temas inspiradores e estratégicos, personalizados para diferentes públicos e objetivos
            </p>
          </div>

          <div className="flex justify-center mb-8 overflow-x-auto pb-2 -mx-4 px-4">
            <div className="inline-flex bg-slate-100 p-1 rounded-full">
              {talks.map((talk, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeTab === index
                      ? "bg-amber-500 text-slate-900 font-semibold shadow-md"
                      : "text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {talk.title.split(":")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active talk details */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src={talks[activeTab].image || "/placeholder.svg"}
                  alt={talks[activeTab].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 lg:p-10 space-y-6">
                <div>
                  <h4 className="text-amber-600 font-medium mb-2">{talks[activeTab].subtitle}</h4>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{talks[activeTab].title}</h3>
                  <p className="text-slate-600">{talks[activeTab].description}</p>
                </div>

                <div>
                  <h5 className="font-bold text-slate-800 mb-3">O que você vai aprender:</h5>
                  <ul className="space-y-2">
                    {talks[activeTab].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-amber-500 mr-2" />
                    <div>
                      <p className="text-sm text-slate-500">Público-alvo</p>
                      <p className="text-sm font-medium text-slate-700">{talks[activeTab].audience.split(",")[0]}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-500 mr-2" />
                    <div>
                      <p className="text-sm text-slate-500">Duração</p>
                      <p className="text-sm font-medium text-slate-700">{talks[activeTab].duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-amber-500 mr-2" />
                    <div>
                      <p className="text-sm text-slate-500">Formato</p>
                      <p className="text-sm font-medium text-slate-700">{talks[activeTab].format}</p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <Link href="/vamos-conversar">Solicitar proposta para esta palestra</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-10">O que dizem sobre as palestras</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-all h-full flex flex-col border-slate-100"
              >
                <CardContent className="p-6 space-y-4 flex-grow">
                  <div className="flex items-center justify-center h-10">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 12H8.4C7.08 12 6 13.08 6 14.4V21C6 22.32 7.08 23.4 8.4 23.4H10.8V27C10.8 27.66 11.34 28.2 12 28.2H13.2C13.86 28.2 14.4 27.66 14.4 27V18C14.4 17.34 13.86 16.8 13.2 16.8H10.8V14.4H15C15.66 14.4 16.2 13.86 16.2 13.2V13.2C16.2 12.54 15.66 12 15 12ZM27.6 12H21C19.68 12 18.6 13.08 18.6 14.4V21C18.6 22.32 19.68 23.4 21 23.4H23.4V27C23.4 27.66 23.94 28.2 24.6 28.2H25.8C26.46 28.2 27 27.66 27 27V18C27 17.34 26.46 16.8 25.8 16.8H23.4V14.4H27.6C28.26 14.4 28.8 13.86 28.8 13.2V13.2C28.8 12.54 28.26 12 27.6 12Z"
                        fill="#F59E0B"
                      />
                    </svg>
                  </div>

                  <p className="text-slate-600 italic text-center">{testimonial.quote}</p>

                  <div className="text-center">
                    <p className="font-bold text-slate-800">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past events section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-10">Eventos anteriores</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-md group">
                <div className="relative h-48">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                  <h4 className="text-white font-bold">{event.name}</h4>

                  <div className="flex items-center text-white/80 text-sm mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex justify-between mt-2">
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center text-white/80 text-sm">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{event.audience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Transforme seu próximo evento</h3>
              <p className="text-xl text-slate-300 mb-6">
                Ofereça aos seus participantes uma experiência que combina rigor científico com aplicabilidade prática.
              </p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Palestras personalizadas para seu público e objetivos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Conteúdo baseado em experiência prática e cases reais</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Abordagem que combina inspiração e aplicabilidade</span>
                </li>
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-lg"
              >
                <Link href="/vamos-conversar">
                  Contratar Palestra
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="absolute inset-0 bg-slate-900/20"></div>
              <Image src="/jhonata-speaking.jpeg" alt="Jhonata Emerick palestrando" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
