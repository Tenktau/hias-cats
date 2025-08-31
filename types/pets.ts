import type { ImageOptimized } from '~~/types/image'

export type Pet = {
  id: number
  name: string
  breed: string
  sex: string
  dateOfBirth: string
  image: string
  imageOptimized?: ImageOptimized
  intro: string
  location: string
}

export type Pets = Pet[]
