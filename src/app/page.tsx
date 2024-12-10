import Landing from '@/components/hero/Landing'
import Projects from '@/components/projects/Projects'
import Skills from '@/components/skills/Skills'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <main className="relative">
            <div className=" grid lg:grid-cols-2 gap-4">
                <Landing />
                {/* <div className="h-screen absolute inset-0 z-20"></div> */}
                <div className='sticky top-0'>
                    {/* @ts-expect-error Async Server Component */}
                    <Projects />
                </div>
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
