'use client'

import { useRef, useState } from 'react'

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
    const containerRef=useRef<HTMLDivElement>(null)
    const [isPlaying, setIsPlaying]=useState(false)

    const togglePlay=()=>{
        if (videoRef.current){
            if (isPlaying){
                videoRef.current.pause()
                setIsPlaying(false)
            } else{
                videoRef.current.play()
                setIsPlaying(true)
            }
        }
    }

    const toggleFullscreen=()=>{
        if (containerRef.current){
            if (!document.fullscreenElement){
                containerRef.current.requestFullscreen?.()
            } else{
                document.exitFullscreen?.()
            }
        }
    }

    return(
        <article
            className={`group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1 ${
                isSingle ? 'flex flex-col md:flex-row' : ''
            }`}
            onClick={togglePlay}
        >
            <div
                ref={containerRef}
                className={`relative overflow-hidden ${
                    isSingle ? 'aspect-video md:aspect-auto md:w-1/2 md:max-h-[400px]' : 'aspect-video'
                }`}
            >
                <video
                    ref={videoRef}
                    src={video.src}
                    poster={video.poster}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    playsInline
                    onClick={(e)=>{
                        e.stopPropagation()
                        togglePlay()
                    }}
                />
                {!isPlaying && (
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-200/50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 text-gray-900 ml-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                )}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <button
                        onClick={(e)=>{
                            e.stopPropagation()
                            toggleFullscreen()
                        }}
                        className="bg-black/70 text-white p-1.5 rounded-lg backdrop-blur-sm hover:bg-black/90 transition-colors"
                        aria-label="Полноэкранный режим"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M3.75 15a.75.75 0 0 1 .75.75v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06l-4.72 4.72h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <span className="bg-black/70 text-white text-xs px-2.5 py-1.5 rounded-lg backdrop-blur-sm">
                        {video.duration}
                    </span>
                </div>
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