import NavBar from '@/components/NavBar'
import React from 'react'
import '@/styles/globals.css'
type Props = {
    children: React.ReactNode
}

function layout({ children }: Props) {
    return (
        <html lang="en">
            <body className="text-slate-100 bg-slate-900 ">
                {/* <NavBar /> */}
                {children}
            </body>
        </html>
    )
}

export default layout
