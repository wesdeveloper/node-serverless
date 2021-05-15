describe('Healthcheck Route', () => {
  it('Should make an request to "/healthcheck" and receive status code 200', async () => {
    const response = await global.request.get('/healthcheck');
    expect(response.status).toBe(200);
  });
});
