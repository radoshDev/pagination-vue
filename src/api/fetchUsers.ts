import { UsersResponse, User } from '../types/user.types'

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://randomuser.me/api/?results=100')
  const json = (await response.json()) as UsersResponse
  return json.results
}
