import React, {useState} from 'react'
import {type Tool, useClient} from 'sanity'
import {Container, Card, Grid, Heading, Stack, Text, TextInput, Flex, Button} from '@sanity/ui'
import {PublishIcon} from '@sanity/icons'
import {triggerGitHubWebhook} from './githubAPI'
import cmsConfig from '../../../cms.config.json'

interface SanityVisionProps {
  tool: Tool
}

function SanityVision(props: SanityVisionProps) {
  const [token, setToken] = useState(retrieveToken())
  const [status, setStatus] = useState('')

  const deployHandler = async () => {
    const {owner, name} = cmsConfig.gitHub.repository
    setStatus(`Triggering GitHub action for ${owner}/${name}...`)
    try {
      // Main call to external API
      const response = await triggerGitHubWebhook(owner, name, token)

      // Human readable errors to the user
      if (response.status === 204) {
        setStatus('Deployment triggered successfully')
        storeToken(token)
      } else {
        console.warn('GitHub response', response)
        const body = await response.text()
        setStatus(`Unexpected GitHub response status: ${response.status}: ${body}`)
        storeToken('')
        setToken('')
      }
    } catch (err) {
      console.error(err)
      setStatus(`Error from GitHub request: ${err}`)
    }
  }

  return (
    <Container>
      <Card padding={4}>
        <Flex padding={4}>
          <Card flex={8}>
            <TextInput
              onChange={(event) => setToken(event.currentTarget.value)}
              placeholder="GITHUB token"
              value={token}
            />
          </Card>
          <Card flex={1}>
            <Button
              onClick={deployHandler}
              disabled={token.length < 20}
              icon={PublishIcon}
              text="Deploy"
              tone="primary"
            />
          </Card>
        </Flex>
      </Card>
      <Card>
        <Text>{status}</Text>
      </Card>
    </Container>
  )
}

function storeToken(value: string) {
  localStorage.setItem('GITHUB_TOKEN_FOR_SANITY', value)
}

function retrieveToken() {
  const value = localStorage.getItem('GITHUB_TOKEN_FOR_SANITY')
  return value === null ? '' : value
}

export default SanityVision
