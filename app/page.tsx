import { Abilities, ContactSection, Hero, HowItWorks, Integrations } from "@/components/sections"

export default function Home(){
  return(
    <main>
      <Hero />
      <Abilities />
      <HowItWorks />
      <Integrations />
      <ContactSection />
    </main>
  )
}