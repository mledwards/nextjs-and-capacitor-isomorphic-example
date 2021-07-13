# Next.js isomorphic ready for Capacitor
This is a quick example of setting up a project to run with Capacitor, but still being able to use a server.

# Set up
- Run `npm install`

# Run isomorphic version
- Run `npm run server-dev` in one terminal tab
- Run `npm run client-dev` in another tab
- Go to `http://localhost:3000/` and you should see the fruits from the next.js server

# Run exported version
- Stop the `client-dev` script
- Run `npm run export`
- Open the `index.html` in a browser and you should still see the fruits

# Road map
- Add documentation about deploying the server to Vercel
- Add client side environment variables to access Vercel deployed server