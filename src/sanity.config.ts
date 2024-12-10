import { schemaTypes } from '@/sanity/schemas'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { markdownSchema } from 'sanity-plugin-markdown'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET!
export default defineConfig({
    basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
    projectId,
    dataset,
    plugins: [deskTool(), markdownSchema()],
    schema: {
        types: schemaTypes,
    },
})
