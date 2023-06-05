# react-news-app

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Create .env file from .env.example: `cp .env.example .env`
1. Build your container: `docker build -t react-news-app .`.
1. Run your container: `docker run -p 3000:3000 react-news-app`.

You can view your images created with `docker images`.

### In existing projects

To add support for Docker to an existing project, just copy the `Dockerfile` into the root of the project and add the following to the `next.config.js` file:

```js
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: 'standalone',
}
```

This will build the project as a standalone app inside the Docker image.

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
