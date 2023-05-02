# Gadget-world

## Server:

Directory: [server/](/server/)

## Client

Directory: [client/](/client/)

## Preparing For Deployment

Environment configurations:

```env
JWT_SECRET = 'secret'
MONGO_URI = 'mongodb_uri'
NODE_ENV = 'development'
PAYPAL_CLIENT_ID = 'paypal_id'
PORT = 5001
```

Change the NODE_ENV = 'development' to NODE_ENV = 'production' to run in production mode.

Create a build directory in the client directory,

    $ npm run build

Esure you have the code, in your `app.js` in the server directory:

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}
```

Run the server in production mode(simulator):

    $ npm start

## Deploying to Heroku

On the root, create a `Procfile` file:

>Tells heroku how to run the project on the server.

Add the following to the file:

    $ web: node server/app.js

Create a `heroku-postbuild` script in `package.json`:

    $ "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"

Add environment variables to Heroku's Config Vars.

## Bugs

1. File Uploads

## ProGadget World:
This project aims to develop a gadget shopping platform, where users can easily see the top rated gadgets, and buy the gadgets online. The users will also have facility to search for their desired gadgets from the whole bunch of Gadgets present in the online store. The admin panel will also be developed through which the admin can manage the orders made by the users. The admin can also, create the new products and list them in the store. The web app is deployed on Azure app service that makes it highly available to our customers. Also, it's integrated with Azure key vault to store any sensitive password and keys to provide security to our application.

## Features:
1. Full featured shopping cart
2. PayPal integration
3. Admin panel
4. Product pagination
5. Search feature
6. Deployment on Azure

## Azure services used:
1. Azure App service used to deploy the MERN Web app..
2. Azure keyvault to store the secret keys like "jwtsecret" in the keyvault..