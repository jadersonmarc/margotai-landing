import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Twitter, Facebook, Instagram, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 bg-gray-900 text-gray-200">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading">MargotAI</h3>
            <p className="text-gray-400 font-body">
              Soluções inteligentes com IA integrada para transformar seu negócio.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Produtos</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Margot Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Margot Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Combo Completo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Preços
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Serviços</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Sites Institucionais
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Blogs Automatizados
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Lojas Online
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Chatbots Personalizados
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Inscreva-se</h3>
            <p className="text-gray-400 font-body">Receba novidades e atualizações sobre nossos produtos e serviços.</p>
            <div className="flex space-x-2">
              <Input
                className="bg-gray-800 border-gray-700 text-white font-body"
                placeholder="Seu email"
                type="email"
              />
              <Button size="icon" className="shrink-0 bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
                <span className="sr-only">Inscrever-se</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400 font-body">
          <p>© 2025 MargotAI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
