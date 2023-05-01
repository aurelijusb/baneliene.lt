export const triggerGitHubWebhook = async (owner: string, name: string, token: string) => {
  const githubPayload = {
    event_type: 'sanity_webhook_trigger',
    client_payload: {
      initiatedFrom: 'Sanity Studio',
    },
  }
  const response = await fetch(`https://api.github.com/repos/${owner}/${name}/dispatches`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.everest-preview+json',
      Authorization: `token ${token}`,
      'User-Agent': 'Sanity-GitHub-Webhook',
    },
    body: JSON.stringify(githubPayload),
  })

  return response
}
