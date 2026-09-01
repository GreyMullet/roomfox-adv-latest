"use client"

import { useEffect, useState } from "react"

export const ScrollToTop=()=>{
    const [isVisible, setIsVisible]=useState(false)

    useEffect(()=>{
        const toggleVisibility=()=>{
            if(window.scrollY>400){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return()=>window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop=()=>{
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return(
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-black text-white rounded-full shadow-lg shadow-black/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
            aria-label="Наверх"
        >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        </button>
    )
}