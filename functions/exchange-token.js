import fetch from 'node-fetch';
import { resolve } from 'path';
require('dotenv').config({ path: resolve(__dirname, '../.env.development.local') });

export async function handler(event, context) {
  const resp = await fetch(`${process.env.REACT_APP_PROCORE_URL}/oauth/token`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_PROCORE_CLIENT,
      client_secret: process.env.REACT_APP_PROCORE_SECRET,
      code: event.queryStringParameters.code,
      redirect_uri: process.env.REACT_APP_PROCORE_CALLBACK,
      refresh_token: 'string',
    }),
  });
  const body = await resp.json();
  console.log(body);
  return { statusCode: 200, body: JSON.stringify(body) };
}
