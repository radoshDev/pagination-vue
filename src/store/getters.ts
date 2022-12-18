import { State } from './state'

export const getters = {
  filteredUsers(state: State) {
    const searchValue = state.searchValue.toLowerCase()
    return state.users.data?.filter(
      (item) =>
        item.name.first.toLowerCase().includes(searchValue) ||
        item.name.last.toLowerCase().includes(searchValue)
    )
  },
}

export type Getters = typeof getters
