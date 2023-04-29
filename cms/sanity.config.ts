import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {defaultDocumentNode} from './src/defaultDocumentNode'
import sanityConfig from '../sanity.json'

export default defineConfig({
  name: 'default',
  title: 'Baneliene.lt',

  projectId: sanityConfig.api.projectId,
  dataset: sanityConfig.api.dataset,

  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
