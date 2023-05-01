import {lazy} from 'react'
import {definePlugin} from 'sanity'
import {route} from 'sanity/router'
import {PublishIcon} from '@sanity/icons'

export interface GithubToolConfig {
  name?: string
  title?: string
}

export const githubTool = definePlugin<GithubToolConfig | void>((options) => {
  const {name, title, ...config} = options || {}
  return {
    name: '@sanity/vision',
    tools: [
      {
        name: name || 'GitHub',
        title: title || 'Deploy',
        icon: PublishIcon,
        component: lazy(() => import('./githubComponent')),
        options: config,
        router: route.create('/*'),
      },
    ],
  }
})
