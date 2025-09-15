import { FastifyInstance } from 'fastify'
import { createUsers, CreateUsersRequest } from '../functions/create-users'

export const createUsersRoutes = (app: FastifyInstance) => {
  app.post('/users', async (request, reply) => {
    try {
      const { name, email } = request.body as CreateUsersRequest

      await createUsers({ name, email })

      return reply.status(201).send({
        message: 'Usuário criado!',
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
