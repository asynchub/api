import { prisma } from '../db/prisma'

export interface GetEventsUsersRequest {
  usersId: string
}

export async function getEventsUsers({ usersId }: GetEventsUsersRequest) {
  const events = await prisma.events.findMany({
    where: {
      usersId,
    },
  })

  return { events }
}
