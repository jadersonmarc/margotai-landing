"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/margot_logo.png"
            alt="MargotAI Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-xl font-bold text-blue-600 font-heading">MargotAI</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#produtos" className="text-sm font-medium hover:text-blue-600 transition-colors font-body">
            Produtos
          </Link>
          <Link href="#servicos" className="text-sm font-medium hover:text-blue-600 transition-colors font-body">
            Serviços
          </Link>
          <Link href="#precos" className="text-sm font-medium hover:text-blue-600 transition-colors font-body">
            Preços
          </Link>
          <Link href="#clientes" className="text-sm font-medium hover:text-blue-600 transition-colors font-body">
            Clientes
          </Link>
        </nav>

        {/* <div className="hidden md:flex gap-4">
          <Button variant="outline" size="sm" className="font-body">
            Entrar
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-body">
            Experimente Grátis
          </Button>
        </div> */}

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 border-t pt-4">
            <Link
              href="#produtos"
              className="text-sm font-medium hover:text-blue-600 transition-colors font-body"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link
              href="#servicos"
              className="text-sm font-medium hover:text-blue-600 transition-colors font-body"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#precos"
              className="text-sm font-medium hover:text-blue-600 transition-colors font-body"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link
              href="#clientes"
              className="text-sm font-medium hover:text-blue-600 transition-colors font-body"
              onClick={() => setIsMenuOpen(false)}
            >
              Clientes
            </Link>
            <div className="flex gap-4 pt-2">
              <Button variant="outline" size="sm" className="w-full font-body">
                Entrar
              </Button>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 font-body">
                Experimente Grátis
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}