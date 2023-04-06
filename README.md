Static site deployment example
==============================

## Local development

```bash
nvm use
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## Static version

```bash
yarn build
yarn export
yarn view
```

Proxies `/out` via [http://127.0.0.1:8080](http://127.0.0.1:8080)

## Deployment

* Merge to `main`
* Github actions would [build](.github/workflows/build.yml) and [deploy](.github/workflows/deploy.yml)

Open [https://www.baneliene.lt/](https://www.baneliene.lt/)

## References

- [GitHub Pages](https://pages.github.com/) - static site hosting
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## TODO: https://nextjs.org/learn/foundations/from-javascript-to-react/building-ui-with-components
## TODO: https://nextjs.org/docs/basic-features/data-fetching/get-static-props