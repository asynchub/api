import fastify from 'fastify'
import { createUsersRoutes } from './routes/create-users.routes'
import { createNewEventRoutes } from './routes/create-new-event.routes'
import { getEventsUsersRoutes } from './routes/get-events-users.routes'
import fastifyCors from '@fastify/cors'

export const app = fastify()

app.register(fastifyCors, {
  origin: ['http://localhost:5173', 'https://eventplanner.com.br'],
})

app.register(createUsersRoutes)
app.register(createNewEventRoutes)
app.register(getEventsUsersRoutes)
