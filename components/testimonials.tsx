import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "A MargotAI transformou completamente nossa estratégia de marketing digital. O Margot Story nos ajudou a criar conteúdo relevante e otimizado para SEO de forma muito mais eficiente.",
      author: "Ana Silva",
      role: "Diretora de Marketing, TechCorp",
    },
    {
      quote:
        "Com o Margot Dashboard, conseguimos visualizar nossos dados de forma clara e obter insights valiosos que nos ajudaram a tomar decisões mais assertivas.",
      author: "Carlos Mendes",
      role: "CEO, Inovativa",
    },
    {
      quote:
        "O chatbot personalizado que a MargotAI desenvolveu para nossa empresa melhorou significativamente nosso atendimento ao cliente, reduzindo o tempo de resposta e aumentando a satisfação.",
      author: "Patrícia Oliveira",
      role: "Gerente de Atendimento, Conecta",
    },
  ]

  const clients = ["TechCorp", "Inovativa", "Conecta", "FutureBank", "EcoSolutions", "DigitalWave"]

  return (
    <section id="clientes" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-blue-900">
              O que nossos clientes dizem
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Histórias de sucesso de quem já utiliza nossas soluções
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-300 mb-4" />
                <p className="mb-4 italic font-body text-gray-700">{testimonial.quote}</p>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold font-heading">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium font-heading text-blue-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 font-body">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-medium mb-8 font-heading text-blue-900">
            Empresas que confiam na MargotAI
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="text-xl font-bold text-gray-400 font-heading">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
