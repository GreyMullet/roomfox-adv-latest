import Link from "next/link"
import { MobileMenu } from "./MobileMenu"
import { NAV_LINKS } from "@/lib/data"

export const Header=()=>{
    return(
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                        <span className="text-white text-sm font-bold">R</span>
                    </span>
                    <span className="text-xl font-bold tracking-tight text-gray-900">room<span className="text-black border-b-2 border-black">fox</span></span>
                </Link>

                <nav aria-label="Основная навигация" className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {NAV_LINKS.map(el=>(
                            <li key={el.href}>
                                <Link href={el.href} className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all hover:after:w-full">{el.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <MobileMenu />
            </div>
        </header>
    )
}