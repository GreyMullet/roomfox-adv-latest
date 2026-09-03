"use client"

import { useRef, useEffect } from "react"

type Video={
    id: number
    title: string
    desc: string
    src: string
    poster?: string
    duration: string
}

export default function VideoCard({ video, isSingle }: { video: Video; isSingle: boolean }){
    const videoRef=useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        const handleFullscreenChange=()=>{
            if (!document.fullscreenElement){
                window.scrollTo({ top: window.scrollY })
                ;(document.documentElement.style as any).zoom='1'
                setTimeout(()=>{
                    window.dispatchEvent(new Event('resize'))
                }, 100)
            }
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return ()=>document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }, [])

    return(
        <article
            className={`group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1 ${
                isSingle ? 'flex flex-col md:flex-row' : ''
            }`}
        >
            <div className={`relative overflow-hidden ${isSingle ? 'aspect-video md:aspect-auto md:w-1/2 md:max-h-[400px]' : 'aspect-video'}`}>
                <video
                    ref={videoRef}
                    src={video.src}
                    poster={video.poster}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                />
            </div>

            <div className={`relative p-8 sm:p-10 ${isSingle ? 'md:flex-1 flex flex-col justify-center' : ''}`}>
                <h4 className="font-semibold text-gray-900 text-xl sm:text-2xl leading-snug mb-3">
                    {video.title}
                </h4>
                <p className="text-base text-gray-500 leading-relaxed">{video.desc}</p>
            </div>
        </article>
    )
}