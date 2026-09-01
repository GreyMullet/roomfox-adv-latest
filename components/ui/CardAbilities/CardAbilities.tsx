import type { Ability } from "@/lib/data"

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

export const CardAbilities=({ header, list, accent, icon }: Ability)=>{
    return(
        <div className={`flex flex-col gap-5 p-7 rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default ${accentMap[accent]}`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgMap[accent]}`}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{header}</h3>
            {Array.isArray(list) && list.length>0 && (
                <ul className="flex flex-col gap-3">
                    {list.map((item)=>(
                        <li key={item} className="flex items-center gap-3 text-gray-600 text-base">
                            <span className="flex items-center justify-center w-5 h-5 bg-black rounded-full shrink-0">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}