export interface Presentations {
  presentations: Array<Presentation>
}

interface SanityDefaults {
  _id?: string
  _rev?: string
  _type?: string
}

export interface Presentation extends SanityDefaults {
  Title: string
  Image: string
}
