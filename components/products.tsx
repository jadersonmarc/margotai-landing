import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Check } from "lucide-react"

export default function Products() {
  return (
    <section id="produtos" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-blue-900">
              Produtos MargotAI
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Nossas soluções por assinatura com inteligência artificial integrada
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-12">
          <Card className="flex flex-col h-full border-blue-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-2xl font-heading text-blue-900">Margot Dashboard</CardTitle>
              </div>
              <CardDescription className="text-base font-body">
                Plataforma para visualização de dados com assistente inteligente
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/dashboard.png?height=300&width=500"
                  alt="Margot Dashboard Preview"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-2 font-body">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Assistente "Margot" para análise de dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Dashboards personalizáveis e interativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Geração automática de relatórios</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Insights preditivos baseados em IA</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {/* <Button className="w-full bg-blue-600 hover:bg-blue-700 font-body">Conheça o Margot Dashboard</Button> */}
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full border-blue-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-2xl font-heading text-blue-900">Margot Story</CardTitle>
              </div>
              <CardDescription className="text-base font-body">
                Plataforma de gerenciamento de conteúdo com análise semântica
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/creator.png?height=300&width=500"
                  alt="Margot Story Preview"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-2 font-body">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Análise semântica de conteúdo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>SEO automatizado e otimizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Análise de impacto emocional</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Geração de postagens para redes sociais</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {/* <Button className="w-full bg-blue-600 hover:bg-blue-700 font-body">Conheça o Margot Story</Button> */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
