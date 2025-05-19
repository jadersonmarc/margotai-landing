import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ShoppingBag, MessageSquare, Code } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Sites Institucionais",
      description:
        "Desenvolvimento de sites institucionais com IA integrada para melhorar a experiência do usuário e aumentar conversões.",
    },
    {
      icon: Code,
      title: "Blogs Automatizados",
      description:
        "Criação de blogs com geração de conteúdo automatizado, otimizado para SEO e personalizado para seu público-alvo.",
    },
    {
      icon: ShoppingBag,
      title: "Lojas Online Inteligentes",
      description: "E-commerces com recomendação inteligente de produtos, chatbot para atendimento e SEO dinâmico.",
    },
    {
      icon: MessageSquare,
      title: "Chatbots Personalizados",
      description:
        "Chatbots treinados com o conteúdo da sua empresa, integráveis com WhatsApp, Messenger, sites ou aplicativos.",
    },
  ]

  return (
    <section id="servicos" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-blue-900">
              Serviços Inteligentes
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Soluções personalizadas sob demanda para atender às necessidades específicas do seu negócio
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <service.icon className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle className="text-xl font-heading text-blue-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 font-body">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
