import {z} from "zod"

const schema=z.object({
    PROJECT_ID:z.string(),
    PROJECT_DATASET:z.string(),

})
const parsed=schema.safeParse(process.env)
if(!parsed.success){
    console.error(parsed.error.errors.join(","))
    throw new Error("Failed to parse env")
}
export const env=parsed.data