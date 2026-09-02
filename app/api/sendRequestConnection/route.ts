import { formMSG } from '@/lib/data'
import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"

const SMTP_HOST=process.env.SMTP_HOST || ""
const SMTP_PORT=process.env.SMTP_PORT || ""
const SMTP_USER=process.env.SMTP_USER || ""
const SMTP_PASS=process.env.SMTP_PASSWORD || ""

export async function POST(request: Request){
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS){
        return NextResponse.json(
            { msg: 'SMTP configuration missing' },
            { status: 500 }
        )
    }

    const { name, phone, email, hotel, message }=await request.json()

    const { html, text }=formMSG(name, phone, email, hotel, message)

    const transporter=nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: true,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
    } as nodemailer.TransportOptions)

    try{
        await transporter.verify()
        console.log("Server is ready to take our messages")
    } catch (err){
        console.error("Verification failed:", err)
        return NextResponse.json(
            { msg: 'SMTP server verification failed' },
            { status: 500 }
        )
    }

    try{
        const info=await transporter.sendMail({
            from: `"Roomfox" <${SMTP_USER}>`, 
            to: "ogonannikita52@gmail.com, specdi@yandex.ru, 4313521@mail.ru", 
            subject: "Заявка на подключение модуля",
            text: text, 
            html: html, 
        })
        
        return NextResponse.json({ msg: info.messageId }, { status: 201 })
    } catch (err){
        return NextResponse.json({ msg: String(err) }, { status: 500 })
    }
}