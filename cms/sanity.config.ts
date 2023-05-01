import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {defaultDocumentNode} from './src/defaultDocumentNode'
import sanityConfig from '../sanity.json'
import cmsConfig from '../cms.config.json'
import {githubTool} from './plugins/github/githubTool'

export default defineConfig({
  name: 'default',
  title: cmsConfig.gitHub.repository.name,

  projectId: sanityConfig.api.projectId,
  dataset: sanityConfig.api.dataset,

  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool(),
    githubTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
