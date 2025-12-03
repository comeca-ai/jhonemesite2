"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, reason: value }))

    // Clear error when user selects
    if (formErrors.reason) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.reason
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}

    if (!formState.name.trim()) {
      errors.name = "Nome é obrigatório"
    }

    if (!formState.email.trim()) {
      errors.email = "E-mail é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "E-mail inválido"
    }

    if (!formState.reason) {
      errors.reason = "Selecione um motivo de contato"
    }

    if (!formState.message.trim()) {
      errors.message = "Mensagem é obrigatória"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          reason: "",
          company: "",
          message: "",
        })
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
      <div className="absolute inset-0 bg-[url('/binary-bg-light.png')] bg-cover bg-center opacity-5"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-6">
            <Mail className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Vamos Conversar</h2>
          <p className="text-xl text-gray-600">
            Entre em contato para palestras, consultorias, parcerias ou qualquer outro assunto relacionado a dados e
            inteligência artificial.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {isSubmitted ? (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mensagem enviada com sucesso!</h3>
                <p className="text-gray-600 mb-6">Obrigado pelo seu contato. Retornarei o mais breve possível.</p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <>
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                  <h3 className="text-xl font-bold">Formulário de contato</h3>
                  <p className="text-white/90 text-sm mt-1">
                    Preencha o formulário abaixo e retornarei em até 48 horas úteis
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nome completo <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className={`bg-white border-gray-200 focus:border-primary-500 rounded-lg ${
                          formErrors.name ? "border-red-500 focus:border-red-500" : ""
                        }`}
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? "name-error" : undefined}
                      />
                      {formErrors.name && (
                        <p id="name-error" className="text-red-500 text-xs mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Seu melhor e-mail"
                        className={`bg-white border-gray-200 focus:border-primary-500 rounded-lg ${
                          formErrors.email ? "border-red-500 focus:border-red-500" : ""
                        }`}
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? "email-error" : undefined}
                      />
                      {formErrors.email && (
                        <p id="email-error" className="text-red-500 text-xs mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="Seu telefone com DDD"
                        className="bg-white border-gray-200 focus:border-primary-500 rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="reason" className="text-sm font-medium text-gray-700">
                        Motivo do contato <span className="text-red-500">*</span>
                      </label>
                      <Select value={formState.reason} onValueChange={handleSelectChange} defaultOpen={false}>
                        <SelectTrigger
                          className={`bg-white border-gray-200 focus:border-primary-500 rounded-lg ${
                            formErrors.reason ? "border-red-500 focus:border-red-500" : ""
                          }`}
                          aria-invalid={!!formErrors.reason}
                          aria-describedby={formErrors.reason ? "reason-error" : undefined}
                        >
                          <SelectValue placeholder="Selecione o motivo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="palestra">Palestra</SelectItem>
                          <SelectItem value="consultoria">Consultoria</SelectItem>
                          <SelectItem value="parceria">Parceria</SelectItem>
                          <SelectItem value="midia">Mídia/Imprensa</SelectItem>
                          <SelectItem value="newsletter">Newsletter</SelectItem>
                          <SelectItem value="livro">Livro</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      {formErrors.reason && (
                        <p id="reason-error" className="text-red-500 text-xs mt-1">
                          {formErrors.reason}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Empresa/Organização
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Nome da sua empresa ou organização"
                      className="bg-white border-gray-200 focus:border-primary-500 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Mensagem <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Descreva com detalhes o motivo do seu contato"
                      rows={5}
                      className={`bg-white border-gray-200 focus:border-primary-500 resize-none rounded-lg ${
                        formErrors.message ? "border-red-500 focus:border-red-500" : ""
                      }`}
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? "message-error" : undefined}
                    />
                    {formErrors.message && (
                      <p id="message-error" className="text-red-500 text-xs mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                      Concordo com a{" "}
                      <Link href="#" className="text-primary-600 hover:underline">
                        Política de Privacidade
                      </Link>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 text-lg rounded-full shadow-md hover:shadow-lg transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                        Enviando...
                      </span>
                    ) : (
                      "Enviar mensagem"
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Os campos marcados com <span className="text-red-500">*</span> são obrigatórios
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
