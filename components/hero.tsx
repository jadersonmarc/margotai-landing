import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-heading text-blue-900">
                Transforme seu negócio com a <span className="text-blue-600">inteligência artificial</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl font-body">
                Soluções inteligentes que automatizam processos, geram insights e potencializam seus resultados.
              </p>
            </div>
            {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700 font-body">
                Experimente Grátis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-body">
                Saiba Mais
              </Button>
            </div> */}
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/margot_logo.png?height=500&width=500"
                alt="MargotAI Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
