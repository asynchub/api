import { app } from './app'

app
  .listen({
    port: 8080,
  })
  .then(() => {
    console.log('http server running')
  })
