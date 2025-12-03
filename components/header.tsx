"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${sectionId}`)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Na Imprensa", href: "#media" },
    { name: "O Joio do Trigo", href: "/joio-do-trigo", icon: <Sparkles className="h-4 w-4 mr-1 text-amber-500" /> },
    { name: "Palestras", href: "/palestras" },
    { name: "Livro", href: "/livro" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800 flex items-center">
            <span className="bg-slate-800 text-white w-10 h-10 rounded-full flex items-center justify-center mr-2 text-lg">
              JE
            </span>
            Jhonata<span className="text-amber-500">Emerick</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md transition-colors font-medium text-sm lg:text-base flex items-center ${
                  activeSection === link.href || (link.href.startsWith("/") && link.href === pathname)
                    ? "text-amber-600 bg-amber-50"
                    : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                }`}
              >
                {link.icon && link.icon}
                {link.name}
              </Link>
            ))}

            <Button asChild className="ml-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              <Link href="/vamos-conversar">Contratar Palestra</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden text-slate-800 hover:bg-amber-50 hover:text-amber-600"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } pt-20`}
        >
          <nav className="container px-4 py-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors flex items-center ${
                  activeSection === link.href || (link.href.startsWith("/") && link.href === pathname)
                    ? "text-amber-600 bg-amber-50"
                    : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                }`}
                onClick={closeMenu}
              >
                {link.icon && link.icon}
                {link.name}
              </Link>
            ))}

            <Button
              asChild
              className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 text-lg"
              onClick={closeMenu}
            >
              <Link href="/vamos-conversar">Contratar Palestra</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
