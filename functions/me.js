import fetch from 'node-fetch';
import { resolve } from 'path';
require('dotenv').config({ path: resolve(__dirname, '../.env.development.local') });

export async function handler(event, context) {
  const resp = await fetch(`${process.env.REACT_APP_PROCORE_URL}/api/v1/me`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${event.queryStringParameters.token}`,
    },
  });
  const body = await resp.json();
  return { statusCode: 200, body: JSON.stringify(body) };
}
