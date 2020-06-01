import { handler } from '.';

describe('handler', () => {
  it('should return 200 with a welcome message', async () => {
    const response = await handler();

    expect(response.statusCode).toEqual(200);
  });
});
