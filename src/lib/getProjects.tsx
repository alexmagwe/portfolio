import { env } from '@/lib/env'
import 'server-only'

export type Project = {
    title: string
    description: any[]
    technology: any[]
    mainImage: object
    webLink: string
    githubLink: string
}
export async function getProjects(): Promise<Project[]> {
    const projectQuery = encodeURIComponent(
        `*[_type=="project"]{...,technology[]->}`
    )
    const projectUrl = `https://${env.PROJECT_ID}.api.sanity.io/v1/data/query/${env.PROJECT_DATASET}?query=${projectQuery}`
    const projectResp = await fetch(projectUrl).then((res) => res.json())
    console.log(projectResp.result[0])
    return projectResp.result
}
