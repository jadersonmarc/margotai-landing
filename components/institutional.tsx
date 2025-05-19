import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"

export default function Institutional() {
  const values = [
    { name: "Inovação", description: "Buscamos constantemente novas soluções e tecnologias." },
    { name: "Ética", description: "Comprometimento com práticas responsáveis e transparentes." },
    { name: "Clareza", description: "Comunicação direta e soluções de fácil compreensão." },
    { name: "Acessibilidade", description: "Tecnologia avançada ao alcance de todos." },
    { name: "Resultados", description: "Foco em entregar valor mensurável aos clientes." },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-blue-900">
            Quem Somos
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed font-body">
            Conheça nossos princípios e o que nos move
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <Card className="bg-white border-blue-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-heading text-blue-900">Missão</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-body">
                Democratizar e aplicar soluções de Inteligência Artificial para transformar a operação de empresas e
                profissionais, com foco em eficiência, inovação e acessibilidade.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-blue-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-heading text-blue-900">Visão</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-body">
                Ser referência nacional em soluções práticas e inteligentes de IA no mercado de serviços digitais e
                automações.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-blue-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-heading text-blue-900">Valores</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-medium text-blue-800 font-heading">{value.name}</span>
                    <span className="text-sm text-gray-600 font-body">{value.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-900 rounded-xl p-8 text-white">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 font-heading">Nossa Abordagem</h3>
            <p className="mb-4 font-body">
              Na MargotAI, acreditamos que a inteligência artificial deve ser acessível e prática. Nossa abordagem
              combina tecnologia de ponta com soluções intuitivas que realmente resolvem problemas do dia a dia.
            </p>
            <p className="font-body">
              Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades específicas e
              desenvolver soluções personalizadas que impulsionam resultados reais.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2 font-heading">Tecnologia</h4>
              <p className="text-sm font-body">
                Utilizamos as mais avançadas tecnologias de IA disponíveis no mercado.
              </p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2 font-heading">Personalização</h4>
              <p className="text-sm font-body">Cada solução é adaptada às necessidades específicas do seu negócio.</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2 font-heading">Suporte</h4>
              <p className="text-sm font-body">Oferecemos suporte contínuo para garantir o sucesso da implementação.</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2 font-heading">Inovação</h4>
              <p className="text-sm font-body">Estamos sempre atualizando nossas soluções com as últimas inovações.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
