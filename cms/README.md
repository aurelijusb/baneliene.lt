# Sanity Clean Content Studio

As a content management system.

## Configuring preview

Allow cors on Sanity: https://www.sanity.io/guides/nextjs-live-preview#414c58a4f2e6

```
http://localhost:3000
https://www.baneliene.lt
```

Generate API token with Read access: https://www.sanity.io/docs/http-auth
It will be used to use Preview functionality (even on statically generated code).

## Configuring deployment from Studio

Create personal token via: https://github.com/settings/tokens?type=beta
with **Read** and **Write** access to `Contents` (code).

Paste this token in `Deploy` tab.

## Security and UX decisions

Compromises were taken to keep iterations small:

- Enter Sanity and GitHub tokens manually via the user.
  Next.js recommended `res.setPreviewData` did not work well for `yarn export` version.
  Sanity Hooks required middleware to connect to GitHub Hooks.
- Cache tokens in Browser local storage.
  I am assuming using private browsers and `local storage` is not shared between domains.

### References

- Example of Sanity Plugin: https://github.com/sanity-io/sanity/blob/next/packages/%40sanity/vision/src/visionTool.ts
