This reproduction shows infinite network calls caused by infinite i18next instance creation in [`appWithTranslation`](https://github.com/i18next/next-i18next/blob/v14.0.3/src/appWithTranslation.tsx) HOC.

Patch changes for the issue is opened as [PR](https://github.com/i18next/next-i18next/pull/2226) 

## How to reproduce

1. Open [http://localhost:3000/server-translation](http://localhost:3000).
2. Click "Go to Server Translation page" link, which heads to `/client-translation`.
3. You will see infinite network calls.

## See [patched version](https://github.com/i18next/next-i18next/pull/2226)

1. Checkout branch `patched`.
2. Re-run npm install
3. Run `yarn dev` to see the patched version.
