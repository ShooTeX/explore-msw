const baseUrl = 'https://petstore.swagger.io/v2'

export const getPet = async () => {
  const response = await fetch(`${baseUrl}/pet/1`)

  return response.json()
}

console.dir(await getPet(), { depth: null })
