"use client"

import { useState } from "react"
import { Plane, TrendingUp, Rocket, Brain, Award } from "lucide-react"

export default function JourneyTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  const journeySteps = [
    {
      year: "2008-2013",
      title: "O Rigor Científico",
      subtitle: "Engenharia Aeronáutica - EESC-USP",
      description:
        "Base mental de sistemas complexos. A aeronáutica é uma disciplina de tolerância zero ao erro e alta dependência de modelagem preditiva.",
      icon: Plane,
      color: "bg-slate-700",
    },
    {
      year: "2013-2016",
      title: "A Linguagem do Dinheiro",
      subtitle: "Mercado Financeiro - Private Equity, M&A, HFT",
      description:
        "Experiência em NSG Capital e Itaú BBA. Entendi que IA para CEOs não é sobre 'acurácia do modelo', é sobre 'redução de risco' e 'margem EBITDA'.",
      icon: TrendingUp,
      color: "bg-cyan-600",
    },
    {
      year: "2016-2018",
      title: "O Selo de Aprovação",
      subtitle: "Co-fundador da Rapiddo → Exit para iFood",
      description:
        "Construímos o maior aplicativo de logística urbana da América Latina. Venda para iFood em 2018 validou minha capacidade de gestão, escala e visão de produto.",
      icon: Rocket,
      color: "bg-amber-500",
    },
    {
      year: "2018-2022",
      title: "A Validação Técnica",
      subtitle: "Doutorado em Engenharia da Computação - Poli-USP",
      description:
        "Tese sobre visão computacional e machine learning aplicados à saúde (radiologia). Autoridade para falar de IA crítica, onde vidas estão em jogo.",
      icon: Brain,
      color: "bg-slate-800",
    },
    {
      year: "2018-Presente",
      title: "Escala & Liderança",
      subtitle: "CEO Datarisk | Presidente ABRIA",
      description:
        "+500 projetos de IA entregues para clientes como Banco Safra, Bradesco e hospitais de referência. Liderança institucional no centro das discussões regulatórias.",
      icon: Award,
      color: "bg-amber-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-medium mb-2">A Jornada</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Do Cientista ao CEO: Uma Trajetória de <span className="text-amber-500">Execução</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A credibilidade não é fabricada — ela é derivada da evidência de competência acumulada.
          </p>
        </div>

        {/* Timeline navigation */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 hidden md:block"></div>
          <div className="flex flex-wrap justify-between gap-4 md:gap-0">
            {journeySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`relative flex flex-col items-center transition-all duration-300 ${
                    activeStep === index ? "scale-110" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg mb-2 transition-all duration-300 ${
                      activeStep === index ? "ring-4 ring-amber-200" : ""
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`text-sm font-medium ${activeStep === index ? "text-slate-800" : "text-slate-500"}`}>
                    {step.year}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active step content */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div
              className={`hidden md:flex w-16 h-16 rounded-2xl ${journeySteps[activeStep].color} items-center justify-center text-white flex-shrink-0`}
            >
              {(() => {
                const Icon = journeySteps[activeStep].icon
                return <Icon className="h-8 w-8" />
              })()}
            </div>
            <div>
              <span className="text-amber-600 font-medium">{journeySteps[activeStep].year}</span>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{journeySteps[activeStep].title}</h3>
              <p className="text-slate-600 font-medium mb-4">{journeySteps[activeStep].subtitle}</p>
              <p className="text-slate-600 leading-relaxed">{journeySteps[activeStep].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
