process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { defineConfig } from '@hey-api/openapi-ts';
export default defineConfig({
  client: '@hey-api/client-axios',
  // input: './openapi.json',
  input: 'https://localhost:44343/swagger/v1/swagger.json',
  output: 'src/client',
});