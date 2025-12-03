import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Sparkles } from "lucide-react"

export default function Hero() {
  const validationLogos = [
    { name: "USP", src: "/usp-logo.png" },
    { name: "FGV", src: "/fgv-logo.png" },
    { name: "Forbes", src: "/forbes-logo.png" },
    { name: "Exame", src: "/exame-logo.png" },
  ]

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100/50 to-amber-50/30"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/binary-bg-light.png')] bg-cover bg-center opacity-[0.03]"></div>

      {/* Decorative elements com nova paleta */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-slate-200/40 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-amber-100/50 rounded-full opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 z-10 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-800/5 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span className="text-slate-700 font-medium text-sm">PhD em IA | CEO Datarisk | Presidente ABRIA</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight text-balance">
              Separando o{" "}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Sinal do Ruído
              </span>{" "}
              na Inteligência Artificial
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Para líderes que se sentem sobrecarregados pelo hype da IA, eu combino{" "}
              <span className="font-semibold text-slate-700">rigor acadêmico</span> com{" "}
              <span className="font-semibold text-slate-700">experiência real de negócios</span> para transformar dados
              complexos em lucro e eficiência mensuráveis.
            </p>

            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-slate-200/50">
              <span className="text-sm text-slate-500 font-medium">Validado por:</span>
              <div className="flex items-center gap-6">
                {validationLogos.map((logo) => (
                  <div key={logo.name} className="h-6 w-auto relative opacity-60 hover:opacity-100 transition-opacity">
                    <Image
                      src={logo.src || `/placeholder.svg?height=24&width=60&query=${logo.name} logo`}
                      alt={logo.name}
                      width={60}
                      height={24}
                      className="object-contain h-6 w-auto grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/vamos-conversar">Contratar Palestra</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-slate-800 bg-white/80 backdrop-blur-sm text-slate-800 hover:bg-slate-50 px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/joio-do-trigo">Assinar Newsletter</Link>
              </Button>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative ring com cor âmbar */}
              <div className="absolute -inset-4 rounded-full border-2 border-amber-200/50 border-dashed"></div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-slate-200/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100/50 rounded-full blur-xl"></div>

              {/* Image container */}
              <div className="relative rounded-full overflow-hidden border-8 border-white/90 shadow-2xl aspect-square">
                <Image
                  src="/jhoneme.jpeg"
                  alt="Jhonata Emerick - Especialista em IA"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/10 to-transparent"></div>
              </div>

              <div className="absolute -bottom-4 right-4 bg-white rounded-2xl shadow-lg p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500 text-slate-900 h-14 w-14 rounded-xl flex items-center justify-center font-bold text-xl">
                    500+
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold">Projetos de IA</p>
                    <p className="text-slate-500 text-sm">entregues na LATAM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span className="text-slate-600 text-sm font-medium mb-2">Explore</span>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-slate-200 text-slate-600 animate-bounce">
              <ArrowDown size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
