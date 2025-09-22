import { FastifyInstance } from 'fastify'
import {
  getEventsUsers,
  GetEventsUsersRequest,
} from '../functions/get-events-users'

export const getEventsUsersRoutes = (app: FastifyInstance) => {
  app.get('/events-users/:usersId', async (request, reply) => {
    try {
      const { usersId } = request.params as GetEventsUsersRequest

      const { events } = await getEventsUsers({
        usersId,
      })

      return reply.status(200).send({
        events,
      })
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(400).send({
          message: error.message,
        })
      }

      throw error
    }
  })
}
