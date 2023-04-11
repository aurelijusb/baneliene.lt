import fs from 'fs'
import YAML from 'yaml'

export interface Storage {
    presentations: Presentations
}

export type Presentations = Array<Presentation>

export interface Presentation {
  Title: string
  Image: string
}

export default function Load(): Storage {
    const file = fs.readFileSync("data/main.yml", { encoding: 'utf8' })
    return YAML.parse(file) as Storage
}

