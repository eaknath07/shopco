import handler from '../pages/api/health';
import { createMocks } from 'node-mocks-http';

describe('API /api/health', () => {

  it('should return status 200 and success message', async () => {
    const { req, res } = createMocks({ method: 'GET' });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    // Use toMatchObject to ignore extra fields like checkedAt or deployment
    expect(res._getJSONData()).toMatchObject({
      live: true,
      success: "running"
    });
  });

  it('should return 405 for non-GET requests', async () => {
    const { req, res } = createMocks({ method: 'POST' });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });

});
