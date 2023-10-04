'use client'
import React from 'react'
import Lottie from 'lottie-react'
import helloAnimation from '@/lottie/helloAnimation.json'

const HelloAnimation = () => {
    return (
        <div className="max-h-[650px] overflow-clip">
            <Lottie animationData={helloAnimation} loop={true} />
        </div>
    )
}
export default HelloAnimation
