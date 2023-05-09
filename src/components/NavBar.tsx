import Link from 'next/link'
import React from 'react'

type Props = {}

function NavBar({}: Props) {
    return (
        <div className="flex sticky top-0 z-50 backdrop-blur-xl bg-secondary/50 justify-center items-center p-2 py-4 ">
            <ul className="flex gap-4">
                <li className="py-2">
                    <span className="font-header font-semibold text-white uppercase pt-0.5 cursor-pointer">
                        Resume
                    </span>
                </li>

                <li className="py-2">
                    <Link
                        href="/blog"
                        className="font-header font-semibold text-white uppercase pt-0.5 cursor-pointer"
                    >
                        Blog
                    </Link>
                </li>

                <li className="py-2">
                    <a
                        href="#projects"
                        className="font-header font-semibold text-white uppercase pt-0.5 cursor-pointer"
                    >
                        Projects
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
