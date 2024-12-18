import React from 'react'
import Project from './Project'
import { getProjects } from '@/lib/getProjects'
import ProjectHeader from './ProjectHeader'

type Props = {}

async function Projects(props: Props) {
    const projects = await getProjects()
    return (
        <div
            id="projects"
            className="lg:max-h-screen flex-1 overflow-auto scrollbar-thin scrollbar-thumb-slate-700 py-12 container relative bg-slate-900 "
        >
            <ProjectHeader />
            <div className="flex flex-col items-start justify-center gap-6">
                {projects &&
                    projects.map((project, i) => (
                        <Project key={i} project={project} />
                    ))}
            </div>
        </div>
    )
}

export default Projects
