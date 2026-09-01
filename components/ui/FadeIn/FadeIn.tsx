"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface FadeInProps{
    children: ReactNode
    delay?: number
    direction?: "up"|"down"|"left"|"right"
    className?: string
    as?: "div"|"li"|"article"|"section"|"span"
}

export const FadeIn=({ children, delay=0, direction="up", className="", as: Tag="div" }: FadeInProps)=>{
    const [isVisible, setIsVisible]=useState(false)
    const ref=useRef<any>(null)

    useEffect(()=>{
        const el=ref.current
        if(!el) return

        const observer=new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        )

        observer.observe(el)
        return()=>observer.disconnect()
    }, [])

    const directionClass={
        up: "translate-y-8",
        down: "-translate-y-8",
        left: "translate-x-8",
        right: "-translate-x-8",
    }[direction]

    const Component=Tag as any

    return(
        <Component
            ref={ref}
            className={`transition-all duration-700 ease-out ${className} ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClass}`}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Component>
    )
}