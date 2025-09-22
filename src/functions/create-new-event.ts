import { parseISO } from 'date-fns'
import { prisma } from '../db/prisma'

export interface CreateNewEventRequest {
  title: string
  description: string
  date: string
  usersId: string

  guests: {
    name: string
    email: string
  }[]
}

export async function createNewEvent({
  title,
  description,
  date,
  usersId,
  guests,
}: CreateNewEventRequest) {
  const dateFormatted = parseISO(date)

  await prisma.events.create({
    data: {
      title,
      description,
      date: dateFormatted,
      usersId,
      guests,
    },
  })
}
