
test ("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http:localhost:3000/api/v1/migrations") // Chama a API e guarda a resposta
  expect(response.status).toBe(200) // Verifica se o status retornado é 200

  const responseBody = await response.json() // Verifica a resposta do corpo da API
  expect(Array.isArray(responseBody)).toBe(true) //Ignorando o conteudo, verifica somente se é do tipo Array
})