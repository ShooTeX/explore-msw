import { GraphQLClient } from "graphql-request"
import { getSdk } from "./graphql/generated/sdk"

const baseUrl = 'https://petstore.swagger.io/v2'

export const getPet = async () => {
  const response = await fetch(`${baseUrl}/pet/1`)

  return response.json()
}


const client = new GraphQLClient('https://rickandmortyapi.com/graphql')
const sdk = getSdk(client)

export const getCharacter = async () => {
  // NOTE: for some reason... this doesn't get intercepted when using bun 🤷
  return await sdk.getCharacter()
}

console.dir(await getPet(), { depth: null })
console.dir(await getCharacter(), { depth: null })
