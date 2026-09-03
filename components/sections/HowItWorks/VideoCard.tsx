'use client'

import { useRef, useEffect } from 'react'

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
        const resetPage=()=>{
            const html=document.documentElement
            const body=document.body

            const scrollTop=window.scrollY || html.scrollTop || body.scrollTop

            html.style.transform='none'
            body.style.transform='none'
            ;(html.style as any).zoom='1'
            ;(body.style as any).zoom='1'
            html.style.scrollBehavior='auto'
            body.style.scrollBehavior='auto'

            void html.offsetHeight

            window.scrollTo({ left: 0, top: scrollTop, behavior: 'auto' })

            setTimeout(()=>{
                html.style.transform=''
                body.style.transform=''
                ;(html.style as any).zoom=''
                ;(body.style as any).zoom=''
                html.style.scrollBehavior=''
                body.style.scrollBehavior=''
                window.scrollTo({ left: 0, top: scrollTop, behavior: 'auto' })
            }, 50)
        }

        const handleFullscreenChange=()=>{
            if (!document.fullscreenElement && !(document as any).webkitFullscreenElement){
                resetPage()
            }
        }

        const handleOrientationChange=()=>{
            setTimeout(resetPage, 100)
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
        document.addEventListener('webkitendfullscreen', handleFullscreenChange)
        window.addEventListener('orientationchange', handleOrientationChange)

        return ()=>{
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
            document.removeEventListener('webkitendfullscreen', handleFullscreenChange)
            window.removeEventListener('orientationchange', handleOrientationChange)
        }
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