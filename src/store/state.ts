import { FetchData } from '../types/common.types'
import { User } from '../types/user.types'

export const state = {
  users: {
    isLoading: false,
    error: undefined,
    data: undefined,
  } as FetchData<User[]>,
  searchValue: '',
  selectedUsers: [] as User[],
}

export type State = typeof state
