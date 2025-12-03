"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Companies() {
  const companies = [
    {
      name: "Albert Einstein",
      logo: "/albert-einstein-hospital-logo.jpg",
    },
    { name: "GERAR", logo: "/gerar-logo.jpg" },
    { name: "Raízen", logo: "/raizen-logo.jpg" },
    { name: "ABCC", logo: "/abcc-logo.jpg" },
    { name: "Xerox", logo: "/xerox-logo.png" },
    { name: "UFG", logo: "/ufg-university-logo.jpg" },
    { name: "Ultra", logo: "/generic-abstract-logo.png" },
    { name: "Kidy", logo: "/kidy-logo.png" },
    { name: "Lifetime", logo: "/generic-abstract-logo.png" },
    { name: "Crescera Capital", logo: "/crescera-capital-logo.png" },
    { name: "Hospital Sírio-Libanês", logo: "/sirio-libanes-hospital-logo.png" },
    { name: "Adium", logo: "/adium-logo.png" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [totalPages, setTotalPages] = useState(Math.ceil(companies.length / itemsPerPage))
  const carouselRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      let newItemsPerPage = 4
      if (window.innerWidth < 640) {
        newItemsPerPage = 1
      } else if (window.innerWidth < 768) {
        newItemsPerPage = 2
      } else if (window.innerWidth < 1024) {
        newItemsPerPage = 3
      }

      setItemsPerPage(newItemsPerPage)
      setTotalPages(Math.ceil(companies.length / newItemsPerPage))

      const maxIndex = Math.ceil(companies.length / newItemsPerPage) - 1
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [companies.length, currentIndex])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPage = (pageIndex: number) => {
    if (isAnimating || pageIndex === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(pageIndex)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const visibleCompanies = (() => {
    const startIndex = currentIndex * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, companies.length)
    return companies.slice(startIndex, endIndex)
  })()

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-amber-600 font-medium mb-2">Clientes & Parceiros</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Empresas que <span className="text-amber-500">confiam</span> em nossa expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            De startups a grandes corporações, ajudamos líderes a transformar dados em vantagem competitiva.
          </p>
        </div>

        <div className="relative px-4 md:px-12 max-w-5xl mx-auto">
          <Button
            onClick={prevSlide}
            aria-label="Previous companies"
            disabled={isAnimating}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            aria-label="Next companies"
            disabled={isAnimating}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-colors disabled:opacity-50"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div
            ref={carouselRef}
            className="overflow-hidden"
            aria-live="polite"
            aria-atomic="true"
            aria-relevant="additions removals"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-500 ease-in-out">
              {visibleCompanies.map((company, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="flex items-center justify-center h-32 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-slate-100"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    currentIndex === index ? "bg-amber-500" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  onClick={() => goToPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={currentIndex === index ? "true" : "false"}
                  disabled={isAnimating}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 italic">+500 projetos de IA entregues para empresas em toda a América Latina.</p>
        </div>
      </div>
    </section>
  )
}
