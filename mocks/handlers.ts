import { HttpResponse, http } from 'msw'
import { handlers as petstoreHandlers } from './petstore'

export const handlers = [
  http.get('https://example.com/hello', () => {
    console.log("Captured /hello request")

    return HttpResponse.text("world!")
  }),
  ...petstoreHandlers
]
