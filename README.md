## Development

Run the dev server:

```shellscript
npm run dev
```

## Kinde

Create `env.local` with the following values:

```sh
# Kinde config
KINDE_SITE_URL="http://localhost:5173"
KINDE_CLIENT_ID="fbc..."
KINDE_ISSUER_URL="https://..."
KINDE_CLIENT_SECRET="UGh..."
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:5173"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:5173"
```

## Authentication issue

- Go to [http://localhost:5173](http://localhost:5173) and click "Login"
- Click on "No account? Create one"
- Enter email address
- Check email for code
- Enter code
- Check terminal for log should be `🔥 undefined`

The `user` value in `app/routes/kinde-auth.$index.tsx` should be populated and not `undefined`.
