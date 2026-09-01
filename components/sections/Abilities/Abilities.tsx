import { CardAbilities, FadeIn } from "@/components/ui"
import { ABILITIES } from "@/lib/data"

export const Abilities=()=>{
    return(
        <section className="flex flex-col items-center gap-12 sm:gap-16 py-20 sm:py-32 px-4 sm:px-8 lg:px-16 bg-gray-50" id="features">
            <FadeIn>
                <div className="flex flex-col items-center gap-4 text-center">
                    <span className="px-4 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded-full shadow-lg shadow-emerald-500/20">
                        Возможности
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Всё для вашего отеля</h2>
                    <p className="text-base sm:text-xl text-gray-500 max-w-xl">Полный цикл от бронирования до заселения — в одном модуле</p>
                </div>
            </FadeIn>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {ABILITIES.map((ability, idx)=>(
                    <li key={ability.header}>
                        <FadeIn delay={idx * 100}>
                            <CardAbilities {...ability} />
                        </FadeIn>
                    </li>
                ))}
            </ul>
        </section>
    )
}