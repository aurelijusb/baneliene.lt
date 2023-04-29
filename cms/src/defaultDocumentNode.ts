import Iframe from 'sanity-plugin-iframe-pane'
import {DefaultDocumentNodeResolver} from 'sanity/desk'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  const previewComponent = S.view
    .component(Iframe)
    .options({
      url: 'http://localhost:3000/preview',
    })
    .title('Preview')
  switch (schemaType) {
    case `presentation`:
      return S.document().views([S.view.form(), previewComponent])
    default:
      return S.document().views([S.view.form()])
  }
}
