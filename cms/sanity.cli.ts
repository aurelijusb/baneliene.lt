import {defineCliConfig} from 'sanity/cli'
import sanityConfig from '../sanity.json'

export default defineCliConfig({
  api: sanityConfig.api,
})
