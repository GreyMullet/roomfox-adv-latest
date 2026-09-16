import { Abilities, ContactSection, Hero, HowItWorks, Integrations, PreviewSection } from "@/components/sections"

export default function Home(){
  return(
    <main>
      <Hero />
      <Abilities />
      <HowItWorks />
      <Integrations />
      <PreviewSection />
      <ContactSection />
    </main>
  )
}