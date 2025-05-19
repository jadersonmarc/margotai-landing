import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Cta() {
  return (
    <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">
              Pronto para transformar seu negócio?
            </h2>
            <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Comece hoje mesmo a utilizar o poder da inteligência artificial a favor do seu negócio
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 font-body">
              Experimente Grátis por 14 dias
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-blue-900 hover:bg-blue-800 font-body">
              Agende uma Demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
