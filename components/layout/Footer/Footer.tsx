import Link from "next/link"
import { FadeIn } from "@/components/ui"
import { NAV_LINKS, CONTACTS } from "@/lib/data"

export const Footer=()=>{
    return(
        <footer className="relative bg-gray-900 text-white overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 flex flex-col gap-16 sm:gap-20">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">Готовы автоматизировать заселение?</h2>
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8">Свяжитесь с нами любым удобным способом — расскажем, как модуль Roomfox встроится в ваш отель или санаторий за один рабочий день.</p>
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg shadow-white/10">Оставить заявку</a>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
                    <FadeIn className="md:col-span-1 lg:col-span-4 flex flex-col gap-5">
                        <Link href="/" className="flex items-center gap-2.5 w-fit">
                            <span className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-white/10 shrink-0">
                                <span className="text-gray-900 text-sm font-bold">R</span>
                            </span>
                            <span className="text-xl font-bold tracking-tight">room<span className="border-b-2 border-white/30">fox</span></span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Модуль онлайн-бронирования и заселения для отелей, санаториев и гостиничных комплексов. Интеграция с 1С, оплата, QR-коды — всё в одном решении.</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shrink-0" />
                            Работаем по всей России
                        </div>
                    </FadeIn>

                    <FadeIn className="md:col-span-1 lg:col-span-2 lg:col-start-6 flex flex-col gap-5" delay={100}>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Разделы</h4>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map(el=>(
                                <li key={el.href}>
                                    <a href={el.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">{el.label}</a>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn className="md:col-span-2 lg:col-span-5 lg:col-start-9 flex flex-col gap-5" delay={200}>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Контакты</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <a href={`mailto:${CONTACTS.email}`} className="group flex flex-col gap-3 p-4 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-amber-500/40 hover:bg-gray-800/60 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-0.5">Email</p>
                                    <p className="text-sm font-medium text-gray-200 group-hover:text-amber-400 transition-colors break-all">{CONTACTS.email}</p>
                                </div>
                            </a>

                            <a href={`tel:${CONTACTS.phone.replace(/\D/g, "")}`} className="group flex flex-col gap-3 p-4 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-emerald-500/40 hover:bg-gray-800/60 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-0.5">Телефон</p>
                                    <p className="text-sm font-medium text-gray-200 group-hover:text-emerald-400 transition-colors break-all">{CONTACTS.phone}</p>
                                </div>
                            </a>

                            <a href={`https://t.me/${CONTACTS.telegram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-3 p-4 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-sky-500/40 hover:bg-gray-800/60 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-0.5">Telegram</p>
                                    <p className="text-sm font-medium text-gray-200 group-hover:text-sky-400 transition-colors break-all">{CONTACTS.telegram}</p>
                                </div>
                            </a>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center px-2 sm:px-0">
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Roomfox — программный модуль для автоматизации онлайн-заселения в отелях, санаториях, гостиницах и оздоровительных комплексах. Полная интеграция с <strong className="text-gray-400">1С:Отель</strong>, онлайн-бронирование номеров с просмотром фото и видео, автоматическая проверка паспортных данных через <strong className="text-gray-400">DaData</strong>, приём оплаты через <strong className="text-gray-400">Юкассу</strong>, <strong className="text-gray-400">Т-Банк</strong> и другие платёжные системы. Функционал быстрого поселения с QR-кодом сокращает время заселения до 2 минут. Техническая поддержка, кастомизация дизайна и функционала под требования заказчика. Свяжитесь с нами по телефону <strong className="text-gray-400">{CONTACTS.phone}</strong>, email <strong className="text-gray-400">{CONTACTS.email}</strong> или Telegram <strong className="text-gray-400">{CONTACTS.telegram}</strong>.</p>
                    </div>
                </FadeIn>

                <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <p className="text-sm text-gray-600">© {new Date().getFullYear()} Roomfox. Все права защищены.</p>
                    <p className="text-sm text-gray-700">1С:Отель • Онлайн-оплата • QR-заселение • 152-ФЗ</p>
                </div>
            </div>
        </footer>
    )
}