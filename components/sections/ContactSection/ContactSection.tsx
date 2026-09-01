"use client"

import { useState } from "react"
import { FadeIn } from "@/components/ui"
import { CONTACTS } from "@/lib/data"

export const ContactSection=()=>{
    const [isSubmitted, setIsSubmitted]=useState(false)
    const [formData, setFormData]=useState({
        name: "",
        phone: "",
        email: "",
        hotel: "",
        message: "",
    })

    const handleChange=(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setFormData(prev=>({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(()=>setIsSubmitted(false), 5000)
    }

    return(
        <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-16 bg-gray-50 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
                <FadeIn>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="px-4 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded-full shadow-lg shadow-emerald-500/20">
                            Оставить заявку
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Начните автоматизацию уже сегодня
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                            Заполните форму — мы свяжемся в течение часа и проведём бесплатную демонстрацию модуля
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <FadeIn className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Контакты</h3>
                            <div className="flex flex-col gap-4">
                                <a href={`tel:${CONTACTS.phone.replace(/\D/g,"")}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-0.5">Телефон</p>
                                        <p className="text-base font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{CONTACTS.phone}</p>
                                    </div>
                                </a>

                                <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-0.5">Email</p>
                                        <p className="text-base font-semibold text-gray-900 group-hover:text-amber-600 transition-colors break-all">{CONTACTS.email}</p>
                                    </div>
                                </a>

                                <a href={`https://t.me/${CONTACTS.telegram.replace("@","")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-0.5">Telegram</p>
                                        <p className="text-base font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">{CONTACTS.telegram}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={150}>
                        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm">
                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Заявка отправлена</h3>
                                    <p className="text-gray-500 max-w-xs">Мы получили вашу заявку и свяжемся с вами в течение часа</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Имя</label>
                                            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Иван Иванов" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Телефон</label>
                                            <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+7 (918) 431-35-21" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="hotel@mail.ru" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="hotel" className="text-sm font-medium text-gray-700">Отель / Санаторий</label>
                                            <input id="hotel" name="hotel" type="text" required value={formData.hotel} onChange={handleChange} placeholder="Название объекта" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Сообщение</label>
                                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Расскажите о вашем объекте и задачах..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none" />
                                    </div>

                                    <button type="submit" className="w-full sm:w-auto self-start px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-black/10">
                                        Отправить заявку
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}