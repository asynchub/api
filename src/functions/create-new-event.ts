import { parseISO } from 'date-fns'
import { prisma } from '../db/prisma'

export interface CreateNewEventRequest {
  title: string
  description: string
  date: string
  usersId: string
}

export async function createNewEvent({
  title,
  description,
  date,
  usersId,
}: CreateNewEventRequest) {
  const dateFormatted = parseISO(date) // formata a date (string) para tipo ISO Date

  await prisma.events.create({
    data: {
      title,
      description,
      date: dateFormatted,
      usersId,
    },
  })
}
