import { ReactNode } from "react"

export interface NavLink{
    href: string
    label: string
}

export interface Step{
    num: string
    title: string
    desc: string
    accent: "amber"|"sky"|"emerald"|"violet"|"blue"|"rose"
    icon: ReactNode
}

export interface Integration{
    name: string
    desc: string
    accent: "amber"|"emerald"|"violet"|"blue"|"rose"|"sky"
    icon: ReactNode
}

export interface Client{
    name: string
    location: string
    gradient: string
}

export interface SeoBlock{
    title: string
    accent: "amber"|"sky"|"emerald"|"violet"
    paragraphs: string[]
}

export interface Ability{
    header: string
    list: string[]
    accent: "amber"|"sky"|"emerald"|"violet"|"blue"|"rose"
    icon: ReactNode
}

export const NAV_LINKS: NavLink[]=[
    { href: "#features", label: "Возможности" },
    { href: "#how-it-works", label: "Как работает" },
    { href: "#integrations", label: "Интеграции" },
    { href: "#contact", label: "Оставить заявку" },
]

export const CONTACTS={
    email: "4313521@mail.ru",
    phone: "+7 (918) 431-35-21",
    telegram: "@anapa1c",
}

export const ABILITIES: Ability[]=[
    {
        header: "Бронирование",
        list: ["Онлайн-поиск номеров", "Выбор дат и количества гостей", "Мгновенное подтверждение"],
        accent: "amber",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    },
    {
        header: "Заполнение документов",
        list: ["Паспорт гражданина РФ", "Свидетельство о рождении", "Сканы и согласия"],
        accent: "sky",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    },
    {
        header: "Оплата",
        list: ["Полная оплата онлайн", "Предоплата", "Зачисление в 1С", "Юкасса и Т-Банк"],
        accent: "emerald",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
    },
    {
        header: "QR-заселение",
        list: ["QR-код на почту", "Быстрое заселение", "Без очередей"],
        accent: "violet",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    },
    {
        header: "Интеграции",
        list: ["1С:Отель", "DaData", "Юкасса", "Т-Банк"],
        accent: "blue",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    },
    {
        header: "Кастомизация",
        list: ["Под дизайн отеля", "Любой функционал", "Встройка в сайт"],
        accent: "rose",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    },
]

export const STEPS: Step[]=[
    {
        num: "01",
        title: "Поиск и выбор номера",
        desc: "Гость выбирает даты, количество взрослых и детей, смотрит фото, видео и описания категорий номеров. Система показывает только доступные варианты в реальном времени.",
        accent: "amber",
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    },
    {
        num: "02",
        title: "Бронирование в 1С",
        desc: "Бронь мгновенно записывается в 1С:Отель. Настраивается предоплата в процентах или полная оплата. Подтверждение со ссылкой на бронь приходит на почту.",
        accent: "sky",
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    },
    {
        num: "03",
        title: "Документы онлайн",
        desc: "Гость заполняет данные заранее: паспорт для взрослых, свидетельство о рождении для детей. Никаких бумажных анкет на ресепшен.",
        accent: "violet",
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    },
    {
        num: "04",
        title: "Оплата проживания",
        desc: "Оплата через встроенный модуль. Интеграция с Юкассой, Т-Банком и любыми другими платёжными системами по требованию заказчика.",
        accent: "emerald",
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
    },
    {
        num: "05",
        title: "QR-код для быстрого поселения",
        desc: "После оплаты и заполнения документов гость получает ссылку с номером группы и QR-кодом для быстрого поселения. По приезде достаточно показать код администратору.",
        accent: "blue",
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    },
    {
        num: "06",
        title: "Заселение за 2 минуты",
        desc: "Администратор видит всё в 1С. Гость подходит к стойке, показывает QR — и получает ключ. Никакой ручной возни и очередей.",
        accent: "rose",
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    },
]

export const INTEGRATIONS: Integration[]=[
    {
        name: "1С:Отель",
        desc: "Двусторонний обмен бронями, оплатами, документами и статусами номеров. Всё синхронизируется в реальном времени — ручной ввод больше не нужен.",
        accent: "amber",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5"/><path d="M8 12h8M8 16h5" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    },
    {
        name: "Платёжные шлюзы",
        desc: "Юкасса, Т-Банк, Сбербанк, Stripe, СБП, Apple Pay и Google Pay. А также любая другая система под требования заказчика.",
        accent: "emerald",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="4" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1.5"/><path d="M6 10h.01M6 14h.01" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>,
    },
    {
        name: "DaData",
        desc: "Автопроверка паспортных данных, подстановка адресов и исправление ошибок ввода ещё на этапе бронирования.",
        accent: "violet",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="1.5"/><path d="M12 8v4l3 3" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
    {
        name: "Любая платёжная система",
        desc: "Корпоративные шлюзы, внутренние бухгалтерские системы, международные провайдеры — интегрируем без исключений.",
        accent: "blue",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
    {
        name: "Безопасность 152-ФЗ",
        desc: "TLS 1.3, шифрование персональных данных, соответствие законодательству РФ. Паспорта и платежи под надёжной защитой.",
        accent: "rose",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#f43f5e" fillOpacity="0.15" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
    {
        name: "Поиск брони",
        desc: "Мгновенный поиск заказов по номеру группы и номеру телефона/email-у. Администратор видит всю информацию без ручного перебора в 1С.",
        accent: "sky",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" fill="#0ea5e9" fillOpacity="0.15" stroke="#0ea5e9" strokeWidth="1.5"/><path d="m21 21-4.35-4.35" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    },
]

export const CLIENTS: Client[]=[
    { name: "Санаторий «Надежда»", location: "Анапа", gradient: "from-amber-400 to-orange-400" },
    { name: "Санаторий «Эллада»", location: "Анапа", gradient: "from-emerald-400 to-teal-400" },
    { name: "Гостевой дом «Уютное море»", location: "Анапа", gradient: "from-sky-400 to-blue-500" },
    { name: "Гостевой дом «В гостях у Светланы»", location: "Анапа", gradient: "from-violet-400 to-fuchsia-400" },
    { name: "База отдыха «Янисъярви»", location: "Карелия", gradient: "from-rose-400 to-pink-400" },
    { name: "Крио - Алтай", location: "Алтай", gradient: "from-lime-400 to-green-400" },
]

export const SEO_BLOCKS: SeoBlock[]=[
    {
        title: "Поиск номеров и онлайн-бронирование",
        accent: "amber",
        paragraphs: [
            "Модуль Roomfox предоставляет гостям удобный интерфейс для поиска и бронирования номеров в отеле или санатории. Пользователь самостоятельно устанавливает желаемые даты заезда и выезда, указывает количество взрослых и детей, после чего система отображает только доступные варианты размещения. Каждый номер сопровождается детальным описанием, профессиональными фотографиями и видеообзором, что позволяет гостю принять взвешенное решение до момента бронирования.",
            "Функционал бронирования напрямую интегрирован с системой 1С:Отель — каждая созданная через модуль бронь автоматически попадает в учётную систему отеля без участия администратора. В настройках 1С можно задать требуемый процент предоплаты на бронь, либо включить режим полной оплаты проживания онлайн. После успешного оформления гость получает электронное письмо со ссылкой на бронь, где можно отслеживать статус, вносить изменения и переходить к следующему шагу — быстрому заселению.",
        ],
    },
    {
        title: "Быстрое поселение: документы и QR-код",
        accent: "sky",
        paragraphs: [
            "Функционал быстрого поселения — ключевое преимущество модуля Roomfox. Ещё до прибытия в отель гость проходит процедуру online check-in: заполняет обязательные данные для всех проживающих. Для взрослых граждан Российской Федерации это паспортные данные, для детей — свидетельство о рождении. Вся информация автоматически передаётся в 1С:Отель и проверяется через интеграцию с сервисом DaData, что исключает ошибки ручного ввода.",
            "После того как гость завершил заполнение документов и произвёл полную оплату (или предоплату в установленном размере), система автоматически формирует и отправляет на электронную почту персональную ссылку на быстрое поселение. В письме содержится уникальный QR-код и номер группы бронирования. По прибытии в отель гостю достаточно предъявить QR-код администратору — заселение занимает не более двух минут, очереди на ресепшен отсутствуют.",
        ],
    },
    {
        title: "Дополнительные услуги и заказы без проживания",
        accent: "emerald",
        paragraphs: [
            "Roomfox работает не только с бронированием номеров, но и с полным спектром дополнительных услуг отеля или санатория. Администратор может заранее начислить дополнительные услуги на существующую бронь непосредственно из 1С:Отель — они автоматически отобразятся в личном кабинете гостя. При этом гость также может самостоятельно выбрать и добавить услуги через модуль: СПА, питание, экскурсии, трансфер и многое другое. Все добавленные позиции мгновенно оплачиваются встроенным платёжным функционалом.",
            "Особенно востребована возможность оформления заказа без бронирования проживания. Например, если человек хочет посетить баню или ресторан при отеле, не останавливаясь в номере, администратор создаёт заказ в 1С и высылает клиенту ссылку на оплату. Это расширяет каналы монетизации и позволяет привлекать локальных гостей, не ограничиваясь только проживающими.",
        ],
    },
    {
        title: "Интеграции, безопасность и кастомизация",
        accent: "violet",
        paragraphs: [
            "Модуль Roomfox построен с учётом максимальной гибкости и безопасности. Интеграция с 1С:Отель обеспечивает двусторонний обмен данными: брони, оплаты, документы и услуги синхронизируются в реальном времени. Для проверки паспортных данных подключён сервис DaData. В плане платежей модуль не привязан к конкретному провайдеру — мы реализуем интеграцию с любыми платёжными системами без исключения: Юкасса, Т-Банк, Сбербанк, Stripe или корпоративные решения.",
            "Безопасность данных гостей находится на первом месте: все соединения шифруются, персональная информация хранится в соответствии с требованиями законодательства РФ. Модуль абсолютно безопасен для обработки паспортных данных и платёжной информации. Каждый отель уникален, поэтому Roomfox предлагает полную кастомизацию: дизайн модуля адаптируется под фирменный стиль заведения, функционал настраивается под конкретные бизнес-процессы, а виджет легко встраивается в существующий сайт. Встроенный поиск брони позволяет администратору быстро находить нужные заказы прямо из модуля. В результате администраторы тратят на 80% меньше времени на рутинные операции — никакой ручной возни с 1С, всё делается в пару кликов.",
        ],
    },
]