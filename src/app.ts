import fastify from 'fastify'
import { createUsersRoutes } from './routes/create-users.routes'
import { createNewEventRoutes } from './routes/create-new-event.routes'
import { getEventsUsersRoutes } from './routes/get-events-users.routes'

export const app = fastify()

app.register(createUsersRoutes)
app.register(createNewEventRoutes)
app.register(getEventsUsersRoutes)
