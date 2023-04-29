import Iframe from 'sanity-plugin-iframe-pane'
import {DefaultDocumentNodeResolver} from 'sanity/desk'
import CMSConfig from '../../cms.config.json'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  const host = CMSConfig.sanity.hostMapping[window.location.host]

  const previewComponent = S.view
    .component(Iframe)
    .options({
      url: host + '/preview',
    })
    .title('Preview')
  switch (schemaType) {
    case `presentation`:
      return S.document().views([S.view.form(), previewComponent])
    default:
      return S.document().views([S.view.form()])
  }
}
