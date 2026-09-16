import { SectionHeader, FadeIn } from "@/components/ui"

export const PreviewSection=()=>{
    return(
        <section id="preview" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto flex flex-col gap-10 sm:gap-14">
                <FadeIn>
                    <SectionHeader badge="Обзор" title="Посмотрите модуль в действии" subtitle="Интерактивный предпросмотр интерфейса бронирования и заселения — всё как у ваших гостей" />
                </FadeIn>

                <FadeIn delay={150}>
                    <div className="sm:w-full sm:rounded-2xl md:rounded-3xl sm:border sm:border-gray-200 sm:bg-gray-50 sm:p-2 md:p-3 sm:shadow-lg sm:shadow-gray-200/50">
                        <div className="relative w-full h-[65vh] sm:aspect-video overflow-hidden sm:rounded-xl md:rounded-2xl bg-gray-100">
                            <iframe
                                src="https://present.roomfox.ru/"
                                title="Roomfox — интерактивный обзор модуля"
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                                allow="fullscreen"
                            />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={250}>
                    <p className="text-center text-sm text-gray-400 px-4">
                        Если окно не загружается, откройте <a href="https://present.roomfox.ru/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">прямую ссылку на демо</a>
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}