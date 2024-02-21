import { HttpResponse, http } from 'msw'
import { aCharacter, mockGetCharacterQuery } from '../graphql/generated/sdk'
import { handlers as petstoreHandlers } from './petstore'

export const handlers = [
  http.get('https://example.com/hello', () => {
    console.log("Captured /hello request")

    return HttpResponse.text("world!")
  }),
  mockGetCharacterQuery(() => {
    return HttpResponse.json({ data: { character: aCharacter() } })
  }),
  ...petstoreHandlers
]
