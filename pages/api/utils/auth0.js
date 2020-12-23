import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_SECRET,
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/auth/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    cookieLifetime: 60 * 60 * 8,
  },
  oidcClient: {
    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 2500,
    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 10000,
  },
});
