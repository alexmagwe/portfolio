/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Introduction from './Introduction'
import { motion } from 'framer-motion'
type Props = {}

function Landing({}: Props) {
    return (
        <div className="sticky flex-1 top-0 min-h-screen bg-teal-900">
            <div className="z-10 relative w-full h-screen">
                <div className="h-full ">
                    <div className="p-4">
                        {/* @ts-expect-error Async Server Component */}
                        <Introduction />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
