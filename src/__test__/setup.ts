import request from 'supertest';
import http from 'http';
import { startInTestMode } from '../api/server';

export interface SetupRequestTest {
  server(): http.Server;
  request(): request.SuperTest<request.Test>;
}

export default function setupRequestTest(): SetupRequestTest {
  let server: http.Server;

  beforeAll(async () => {
    server = await startInTestMode();
  });

  afterAll(async () => {
    server.close();
  });

  return {
    server: () => server,
    request: () => request(server),
  } as SetupRequestTest;
}
