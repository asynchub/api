import fastify from 'fastify'
import { createUsersRoutes } from './routes/create-users.routes'
import { createNewEventRoutes } from './routes/create-new-event.routes'

export const app = fastify()

app.register(createUsersRoutes)
app.register(createNewEventRoutes)
