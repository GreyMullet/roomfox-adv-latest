interface SectionHeaderProps{
    badge: string
    title: string
    subtitle: string
}

export const SectionHeader=({ badge, title, subtitle }: SectionHeaderProps)=>{
    return(
        <div className="flex flex-col items-center gap-4 text-center">
            <span className="px-4 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded-full shadow-lg shadow-emerald-500/20">
                {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                {subtitle}
            </p>
        </div>
    )
}