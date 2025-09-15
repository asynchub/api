import { prisma } from '../db/prisma'

export interface CreateUsersRequest {
  name: string
  email: string
}

export async function createUsers({ name, email }: CreateUsersRequest) {
  await prisma.users.create({
    data: {
      name,
      email,
    },
  })
}
