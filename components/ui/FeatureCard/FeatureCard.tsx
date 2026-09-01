import { ReactNode } from "react"

interface FeatureCardProps{
    accent: "amber"|"sky"|"emerald"|"violet"|"blue"|"rose"
    icon: ReactNode
    title: string
    desc: string
    meta?: string
}

const accentMap: Record<string, string>={
    amber: "border-amber-200 hover:border-amber-400 hover:shadow-amber-100/50",
    sky: "border-sky-200 hover:border-sky-400 hover:shadow-sky-100/50",
    emerald: "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100/50",
    violet: "border-violet-200 hover:border-violet-400 hover:shadow-violet-100/50",
    blue: "border-blue-200 hover:border-blue-400 hover:shadow-blue-100/50",
    rose: "border-rose-200 hover:border-rose-400 hover:shadow-rose-100/50",
}

const iconBgMap: Record<string, string>={
    amber: "bg-amber-50 text-amber-600",
    sky: "bg-sky-50 text-sky-600",
    emerald: "bg-emerald-50 text-emerald-600",
    violet: "bg-violet-50 text-violet-600",
    blue: "bg-blue-50 text-blue-600",
    rose: "bg-rose-50 text-rose-600",
}

export const FeatureCard=({ accent, icon, title, desc, meta }: FeatureCardProps)=>{
    return(
        <div className={`group flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accentMap[accent]}`}>
            {meta ? (
                <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">{meta}</span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBgMap[accent]}`}>{icon}</div>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBgMap[accent]}`}>{icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
            )}
            {meta && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        </div>
    )
}