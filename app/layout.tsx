import './globals.css'
import type {Metadata} from 'next'
import {yekan} from "@/utils/font";
import ReduxProvider from "@/providers/ReduxProvider";
import React from "react";


export const metadata: Metadata = {
    title: 'Filmnet',
}
type RootProps = {
    children: React.ReactNode
}

export default function RootLayout({children}: RootProps) {
    return (
        <html dir="rtl" lang="fa-IR">
            <body className={yekan.className}>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    )
}
