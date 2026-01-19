
test ("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http:localhost:3000/api/v1/status")
  expect(response.status).toBe(200)

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();

  expect(responseBody.version).toBe('16.11');

  expect(responseBody.max_querys).toEqual(100);

  expect(responseBody.opened_connections).toEqual(1);
})
