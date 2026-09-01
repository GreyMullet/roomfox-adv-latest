interface ClientCardProps{
    name: string
    location: string
    gradient: string
}

export const ClientCard=({ name, location, gradient }: ClientCardProps)=>{
    return(
        <div className="group flex flex-col items-center justify-center gap-3 p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white text-center transition-all hover:border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-0.5">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-lg font-bold shadow-md`}>
                {name.replace(/[^А-ЯA-Z]/g, "").charAt(0)}
            </div>
            <span className="text-sm font-semibold text-gray-900 leading-tight">{name}</span>
            <span className="text-xs text-gray-400">{location}</span>
        </div>
    )
}