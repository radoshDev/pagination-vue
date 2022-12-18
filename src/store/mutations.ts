import { FetchData } from '../types/common.types'
import { User } from '../types/user.types'
import { State } from './state'

export const mutations = {
  setUsersData(state: State, userData: FetchData<User[]>): void {
    state.users = userData
  },
  setSearchValue(state: State, value: string): void {
    state.searchValue = value
  },
  setSelectedUsers(state: State, users: User[]): void {
    state.selectedUsers = users
  },
  removeSelectedUser(state: State): void {
    const removeList = state.selectedUsers
    state.users.data = state.users.data?.filter(
      (item) => !removeList.includes(item)
    )
    state.selectedUsers = []
  },
}

export type Mutations = typeof mutations
