import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from ''
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'learning-sanity-project',

  projectId: '089ym38a',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
