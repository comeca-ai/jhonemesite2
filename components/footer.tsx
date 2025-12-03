"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Linkedin, Twitter, Instagram, Mail, ArrowRight, Send, MapPin, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      console.log("Newsletter signup:", email)
      setIsSubmitting(false)
      setIsSubscribed(true)

      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }, 1000)
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Top wave separator */}
      <div className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto -mb-1 fill-current"
          preserveAspectRatio="none"
        >
          <path
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">JE</span>
              </div>
              <Link href="/" className="text-2xl font-bold">
                Jhonata<span className="text-amber-400">Emerick</span>
              </Link>
            </div>

            <p className="text-slate-300 leading-relaxed">
              O estrategista que separa o sinal do ruído na Inteligência Artificial. PhD em IA pela USP, CEO da Datarisk
              e Presidente da ABRIA. Transformando dados complexos em vantagem competitiva.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/jhonataemerick"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-amber-500 hover:text-slate-900 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/jhonataemck"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-amber-500 hover:text-slate-900 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/jhonataemck"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-amber-500 hover:text-slate-900 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:jhonata@datarisk.ai"
                className="bg-slate-700 hover:bg-amber-500 hover:text-slate-900 transition-colors p-2 rounded-full"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#media" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Na Imprensa
                </Link>
              </li>
              <li>
                <Link
                  href="/joio-do-trigo"
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/palestras"
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Palestras
                </Link>
              </li>
              <li>
                <Link href="/livro" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Livro
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-amber-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-300">jhonata@datarisk.ai</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-amber-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-300">+55 11 99999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-amber-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-300">São Paulo, SP - Brasil</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/vamos-conversar"
                className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium group"
              >
                Contratar Palestra
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2 flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-amber-400" />O Joio do Trigo
            </h3>
            <p className="text-slate-300 mb-4">
              Assine a newsletter e receba insights sobre IA e dados toda quinta-feira. Separe o sinal do ruído.
            </p>

            {isSubscribed ? (
              <div className="bg-green-900/30 p-4 rounded-lg border border-green-800">
                <p className="text-green-300 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Newsletter assinada com sucesso!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-500 rounded-r-none"
                  />
                  <Button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-l-none px-3"
                    aria-label="Assinar newsletter"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <Send size={18} />
                    )}
                  </Button>
                </div>
                <p className="text-slate-400 text-xs">
                  Ao assinar, você concorda com nossa política de privacidade. Você pode cancelar a qualquer momento.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Jhonata Emerick. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-amber-500 to-slate-800"></div>
    </footer>
  )
}
