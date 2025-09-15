import { FastifyInstance } from 'fastify'
import {
  createNewEvent,
  CreateNewEventRequest,
} from '../functions/create-new-event'

export const createNewEventRoutes = (app: FastifyInstance) => {
  app.post('/events', async (request, reply) => {
    try {
      const { title, description, date, usersId } =
        request.body as CreateNewEventRequest

      await createNewEvent({
        title,
        description,
        date,
        usersId,
      })

      return reply.status(201).send({
        message: 'Evento Criando com sucesso!',
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
