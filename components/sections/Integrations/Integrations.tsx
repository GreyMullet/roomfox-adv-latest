import { SectionHeader, FeatureCard, ClientCard, FadeIn } from "@/components/ui"
import { INTEGRATIONS, CLIENTS } from "@/lib/data"

export const Integrations=()=>{
    return(
        <section id="integrations" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
                <FadeIn>
                    <SectionHeader badge="Интеграции" title="Работает с вашим стеком" subtitle="Подключаемся к 1С, платёжным системам и сервисам проверки данных. Никакой замены инфраструктуры." />
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {INTEGRATIONS.map((item, idx)=>(
                        <FadeIn key={item.name} delay={idx * 100}>
                            <FeatureCard accent={item.accent} icon={item.icon} title={item.name} desc={item.desc} />
                        </FadeIn>
                    ))}
                </div>

                <div className="flex flex-col gap-8 sm:gap-12">
                    <FadeIn>
                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Нам доверяют</h3>
                            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">Отели и санатории по всей России уже используют Roomfox для автоматизации заселения</p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                        {CLIENTS.map((client, idx)=>(
                            <FadeIn key={client.name} delay={idx * 50}>
                                <ClientCard {...client} />
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <FadeIn>
                    <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative max-w-3xl mx-auto text-center flex flex-col gap-6">
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Техническая совместимость без ограничений</h3>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                Модуль <strong className="text-white">Roomfox</strong> интегрируется с системой <strong className="text-white">1С:Отель</strong> напрямую через API, обеспечивая синхронизацию броней, статусов номеров, платежей и отчётности в реальном времени. Подключение сервиса <strong className="text-white">DaData</strong> позволяет автоматически проверять паспортные данные гостей, исправлять ошибки ввода и ускорять процесс online check-in. Платёжный модуль агностичен: мы реализуем интеграцию с любыми платёжными системами — от российских <strong className="text-white">Юкассы</strong>, <strong className="text-white">Т-Банка</strong> и <strong className="text-white">Сбербанка</strong> до международного <strong className="text-white">Stripe</strong>. Все соединения защищены шифрованием <strong className="text-white">TLS 1.3</strong>, персональные данные обрабатываются в соответствии с <strong className="text-white">152-ФЗ</strong>.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}