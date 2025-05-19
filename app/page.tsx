import Header from "@/components/header"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Services from "@/components/services"
import Institutional from "@/components/institutional"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <Institutional />
        <Pricing />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
