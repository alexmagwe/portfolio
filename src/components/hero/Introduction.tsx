import React from 'react'
// import { useImageBuilder } from '@/lib/hooks'
import { getUser } from '@/lib/getUser'
import { Title } from './Title'
import { Bio } from './Bio'
import SocialLinks from '../Socials/SocialLinks'
import HelloAnimation from './HelloAnimation'
type Props = {}
export const revalidate = 0
async function Introduction({}: Props) {
    const user = await getUser()
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    }

    // const image = useImageBuilder(
    //     env.PROJECT_ID,
    //     env.PROJECT_DATASET,
    //     currentUser.profilePicture
    // )
    return (
        <div className="flex p-8 backdrop-blur-lg text-white flex-col px-8 justify-start pt-8 gap-6">
            {<Title />}

            {/* <p className="font-body text-white text-lg uppercase">
              Let&apos;s connect
            </p> */}
            {<Bio user={user} />}
            <div className="">
                <i className="bx bx-chevron-right text-yellow text-3xl"></i>
                <div className="flex items-center text-white gap-4  pt-5 sm:pt-0 pl-2">
                    {/* @ts-expect-error Async Server Component */}
                    <SocialLinks />
                </div>
                <HelloAnimation />
            </div>
        </div>
    )
}

export default Introduction
