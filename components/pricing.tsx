import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Creator",
      description: "Para quem cria e publica com foco.",
      price: "R$ 50",
      period: "/mês",
      features: [
        "Criação e publicação de conteúdo",
        "Análise básica de SEO",
        "Suporte por email",
        "Atualizações regulares",
        "Comunidade de usuários",
      ],
    },
    {
      name: "Team",
      description: "Para equipes com fluxo editorial.",
      price: "R$ 100",
      period: "/mês",
      features: [
        "Todas as funcionalidades do Creator",
        "Gerenciamento de equipe",
        "Fluxo editorial avançado",
        "Suporte prioritário",
        "API de integração",
      ],
    },
    {
      name: "Enterprise",
      description: "Poder total com insights avançados.",
      price: "R$ 150",
      period: "/mês",
      features: [
        "Todas as funcionalidades do Team",
        "Insights avançados",
        "SEO sob demanda",
        "Análise semântica de ponta",
        "Suporte 24/7",
      ],
    },
  ]

  return (
    <section id="precos" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-blue-900">
              Planos e Preços
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col h-full border-blue-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="flex flex-col items-center text-center space-y-2">
                <CardTitle className="text-2xl font-heading text-blue-900">{plan.name}</CardTitle>
                <CardDescription className="text-base font-body min-h-[3rem]">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center">
                <div className="flex items-baseline mb-8">
                  <span className="text-3xl font-bold text-blue-900 font-heading">{plan.price}</span>
                  <span className="text-gray-500 ml-1 font-body">{plan.period}</span>
                </div>
                <ul className="space-y-3 w-full">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 font-body">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                {/* <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 font-body"
                >
                  Começar Agora
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}