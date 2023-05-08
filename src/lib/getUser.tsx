import { env } from '@/lib/env'
import 'server-only'
export type User = {
    name: string
    bio: string
    socials: any[]
    profilePicture: object
    about: any
}
export async function getUser(): Promise<User> {
    const userQuery = encodeURIComponent(
        `*[_type=="user"]{name,bio,about,profilePicture,socials[]->}`
    )
    const usersUrl = `https://${env.PROJECT_ID}.api.sanity.io/v1/data/query/${env.PROJECT_DATASET}?query=${userQuery}`
    const userResp = await fetch(usersUrl).then((res) => res.json())
    const users: User[] = userResp.result
    return users && users[0]
}
