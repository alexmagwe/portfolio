/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Introduction from './Introduction'
import { motion } from 'framer-motion'
type Props = {}

function Landing({ }: Props) {
    return (
        <div className=" flex-1 top-0 z-10 lg:min-h-screen bg-teal-950">
            <div className="z-30 relative w-full lg:h-screen">
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
