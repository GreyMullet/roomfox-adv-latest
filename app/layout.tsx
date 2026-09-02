import type { Metadata, Viewport } from "next"
import { Footer, Header } from "@/components/layout"
import { ScrollToTop } from "@/components/ui"
import "./globals.css"

const SITE_URL="https://roomfox.ru"

export const viewport: Viewport={
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
    colorScheme: "light",
}

export const metadata: Metadata={
    metadataBase: new URL(SITE_URL),

    title: {
        default: "Roomfox — модуль онлайн-заселения для отелей и санаториев",
        template: "%s | Roomfox",
    },

    description: "Модуль онлайн-заселения Roomfox: бронирование номеров, онлайн-оплата, заполнение документов и QR-заселение за 2 минуты. Интеграция с 1С:Отель, Юкасса, Т-Банк, DaData.",

    keywords: [
        "онлайн-заселение",
        "модуль для отелей",
        "1С:Отель",
        "бронирование номеров",
        "QR-заселение",
        "санаторий",
        "гостиница",
        "Roomfox",
        "онлайн check-in",
        "автоматизация отеля",
        "платёжный шлюз отель",
        "быстрое поселение",
        "интеграция 1С",
    ],

    authors: [{ name: "Roomfox", url: SITE_URL }],
    creator: "Roomfox",
    publisher: "Roomfox",

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    alternates: {
        canonical: "/",
        languages: { "ru-RU": "/" },
    },

    openGraph: {
        type: "website",
        locale: "ru_RU",
        url: "/",
        siteName: "Roomfox",
        title: "Roomfox — модуль онлайн-заселения для отелей и санаториев",
        description: "Автоматизация заселения: бронирование, оплата, документы и QR-код. Интеграция с 1С:Отель.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Roomfox — модуль онлайн-заселения для отелей",
                type: "image/png",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Roomfox — модуль онлайн-заселения для отелей",
        description: "Бронирование, оплата и заселение за 2 минуты. Интеграция с 1С.",
        images: ["/og-image.png"],
        creator: "@anapa1c",
    },

    appleWebApp: {
        capable: true,
        title: "Roomfox",
        statusBarStyle: "black-translucent",
    },

    formatDetection: {
        telephone: true,
        date: true,
        address: true,
        email: true,
    },

    verification: {
        google: "",
        yandex: "",
    },

    category: "business",
    classification: "Software, Hospitality, Hotel Management",

    manifest: "/site.webmanifest",

    other: {
        "contact:phone": "+7 (918) 431-35-21",
        "contact:email": "4313521@mail.ru",
        "contact:telegram": "@anapa1c",
        "og:phone_number": "+7-918-431-35-21",
        "og:email": "4313521@mail.ru",
    },
}

const jsonLd={
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "Roomfox",
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/icon-192.png`,
                width: 512,
                height: 512,
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+7-918-431-35-21",
                contactType: "sales",
                availableLanguage: ["Russian"],
                email: "4313521@mail.ru",
                areaServed: "RU",
            },
            sameAs: ["https://t.me/anapa1c"],
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: "Roomfox",
            url: SITE_URL,
            publisher: { "@id": `${SITE_URL}/#organization` },
            potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
        },
        {
            "@type": "SoftwareApplication",
            name: "Roomfox",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Any",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
            },
            description: "Модуль онлайн-заселения для отелей и санаториев с интеграцией 1С:Отель, оплатой и QR-кодами.",
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "20",
            },
            featureList: "Онлайн-бронирование, интеграция 1С:Отель, QR-заселение, онлайн-оплата, проверка документов DaData",
        },
    ],
}

export default function RootLayout({ children }: { children: React.ReactNode }){
    return(
        <html lang="ru" className="h-full antialiased" dir="ltr">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="apple-mobile-web-app-title" content="Roomfox" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    )
}