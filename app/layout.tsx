import type { Metadata } from "next"
import { Footer, Header } from "@/components/layout"
import "./globals.css"
import { ScrollToTop } from "@/components/ui"

export const metadata: Metadata={
  title: "Roomfox — модуль онлайн-заселения для отелей",
  description: "Онлайн-бронирование, оплата и заселение за 2 минуты",
}

export default function RootLayout({ children }: { children: React.ReactNode }){
    return(
      <html lang="ru" className="h-full antialiased">
        <body className="min-h-full flex flex-col">
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </body>
      </html>
    )
}