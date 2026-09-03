import { SectionHeader, FeatureCard, FadeIn } from "@/components/ui"
import { STEPS, SEO_BLOCKS, VIDEOS } from "@/lib/data"
import VideoCard from "./VideoCard"

const seoAccentMap: Record<string, string>={
    amber: "border-t-amber-400",
    sky: "border-t-sky-400",
    emerald: "border-t-emerald-400",
    violet: "border-t-violet-400",
}

export const HowItWorks=()=>{
    const isSingleVideo=VIDEOS.length===1

    return(
        <section id="how-it-works" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-sky-100/30 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
                <FadeIn>
                    <SectionHeader
                        badge="Как работает"
                        title="Заселение за 2 минуты: пошагово"
                        subtitle="Полный цикл от поиска номера до получения QR-кода — без очередей, бумажных анкет и ручного ввода в 1С"
                    />
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {STEPS.map((step, idx)=>(
                        <FadeIn key={step.num} delay={idx*100}>
                            <FeatureCard
                                accent={step.accent}
                                icon={step.icon}
                                title={step.title}
                                desc={step.desc}
                                meta={`Шаг ${step.num}`}
                            />
                        </FadeIn>
                    ))}
                </div>

                <div className="border-t border-gray-100" />

                <div className="flex flex-col gap-12 sm:gap-16">
                    <FadeIn>
                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                Технические возможности модуля
                            </h3>
                            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
                                Подробное описание функционала для владельцев отелей, санаториев и гостиничных сетей
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {SEO_BLOCKS.map((block, idx)=>(
                            <FadeIn key={block.title} delay={idx*150}>
                                <article className={`flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border border-gray-100 bg-gray-50/50 border-t-4 ${seoAccentMap[block.accent]}`}>
                                    <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
                                        {block.title}
                                    </h4>
                                    <div className="flex flex-col gap-4">
                                        {block.paragraphs.map((paragraph, idx)=>(
                                            <p key={idx} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <FadeIn>
                    <div className="flex flex-col gap-12 sm:gap-16">
                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                Видеообзоры модуля
                            </h3>
                            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
                                Посмотрите, как работает модуль в реальных условиях — от настройки до ежедневного использования
                            </p>
                        </div>

                        <div className={`grid gap-6 sm:gap-8 ${isSingleVideo ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                            {VIDEOS.map((video, idx)=>(
                                <FadeIn key={video.id} delay={idx*100}>
                                    <VideoCard video={video} isSingle={isSingleVideo} />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="flex flex-col items-center text-center gap-6 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-50 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />
                        <h3 className="relative text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                            Готовы сократить время заселения в 10 раз?
                        </h3>
                        <p className="relative text-gray-500 max-w-xl leading-relaxed">
                            Оставьте заявку — мы проведём бесплатную демонстрацию модуля на примере вашего отеля или санатория.
                        </p>
                        <a
                            href="#contact"
                            className="relative mt-2 inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-black/10"
                        >
                            Оставить заявку
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}