import Landing from '@/components/hero/Landing'
import Projects from '@/components/projects/Projects'
import Skills from '@/components/skills/Skills'
import React from 'react'

type Props = {}

function page({}: Props) {
    return (
        <main className="relative">
            <div className="top-0 flex flex-wrap gap-4">
                <Landing />
                {/* <div className="h-screen absolute inset-0 z-20"></div> */}
                {/* @ts-expect-error Async Server Component */}
                <Projects />
            </div>
            <div>
                {/* <AboutMe /> */}

                {/* <Skills /> */}
                {/* <Stack /> */}
            </div>
        </main>
    )
}

export default page
