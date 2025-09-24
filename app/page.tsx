import { Hero } from "@/components/abun/hero"
import { Metrics } from "@/components/abun/metrics"
import { ToolsSection } from "@/components/abun/tools-section"
import { Benefits } from "@/components/abun/benefits"
import { Integrations } from "@/components/abun/integrations"
import { CtaSection } from "@/components/abun/cta-section"
import { Footer } from "@/components/abun/footer"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <Metrics />
      <ToolsSection />
      <Benefits />
      <Integrations />
      <CtaSection />
      <Footer />
    </main>
  )
}
