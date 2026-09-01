import { FadeIn } from "@/components/ui"

export const Hero=()=>{
    return(
        <section className="relative flex flex-col gap-6 sm:gap-8 justify-center items-center min-h-[calc(100dvh-4rem)] text-center px-4 sm:px-6 overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
            <div className="absolute top-[15%] -left-20 sm:-left-32 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-100/60 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-[15%] -right-20 sm:-right-32 w-64 h-64 sm:w-96 sm:h-96 bg-amber-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <FadeIn delay={0}>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-50 border border-emerald-100 rounded-full text-xs sm:text-sm font-medium text-emerald-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shrink-0" />
                    <span className="whitespace-nowrap">Модуль для отелей и санаториев</span>
                </div>
            </FadeIn>

            <FadeIn delay={100}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight tracking-tight text-gray-900 max-w-[18ch] sm:max-w-3xl">
                    Превратите заселение
                    <br className="hidden sm:block" />{' '}
                    <span className="relative inline-block mt-1 sm:mt-0">
                        в 2-минутный
                        <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="hero-line" x1="0" y1="0" x2="300" y2="0">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#f59e0b" />
                                </linearGradient>
                            </defs>
                            <path d="M2 10C50 4 100 2 150 4C200 6 250 8 298 6" stroke="url(#hero-line)" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </span>{' '}
                    процесс
                </h1>
            </FadeIn>

            <FadeIn delay={200}>
                <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-lg sm:max-w-2xl leading-relaxed px-2 sm:px-0">
                    Интегрируем модуль онлайн-бронирования и заселения в ваш отель или санаторий.
                    Документы, оплата, QR-код — всё до приезда гостя.
                </p>
            </FadeIn>

            <FadeIn delay={300}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto px-2 sm:px-0">
                    <a href="#contact" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-black/10 text-center">
                        Оставить заявку
                    </a>
                    <a href="#how-it-works" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all text-center">
                        Узнать больше →
                    </a>
                </div>
            </FadeIn>

            <FadeIn delay={400}>
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100 w-full max-w-md sm:max-w-lg px-4">
                    <div className="text-center min-w-[80px]">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">2 мин</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">время заселения</p>
                    </div>
                    <div className="hidden sm:block w-px h-8 sm:h-10 bg-gray-200" />
                    <div className="text-center min-w-[80px]">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">100%</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">онлайн</p>
                    </div>
                    <div className="hidden sm:block w-px h-8 sm:h-10 bg-gray-200" />
                    <div className="text-center min-w-[80px]">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">1С</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">интеграция</p>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}