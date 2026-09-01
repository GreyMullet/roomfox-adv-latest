"use client"

import Link from "next/link"
import { useState } from "react"
import { NAV_LINKS } from "@/lib/data"

export const MobileMenu=()=>{
    const [isOpen, setIsOpen]=useState(false)

    return(
        <>
            <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={()=>setIsOpen(!isOpen)}
                aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={isOpen}
            >
                <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 px-4 py-4 shadow-lg shadow-gray-200/20">
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map(el=>(
                            <li key={el.href}>
                                <Link
                                    href={el.href}
                                    className="flex items-center gap-3 text-gray-700 font-medium py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors"
                                    onClick={()=>setIsOpen(false)}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    {el.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}