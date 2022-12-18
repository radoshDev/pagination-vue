import { ActionContext as VuexActionContext } from 'vuex'
import { fetchUsers } from '../api/fetchUsers'
import { Mutations } from './mutations'
import { State } from './state'

type ActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<VuexActionContext<State, State>, 'commit'>

export const actions = {
  async getUsers({ commit }: ActionContext) {
    try {
      commit('setUsersData', {
        data: undefined,
        isLoading: true,
        error: undefined,
      })
      const products = await fetchUsers()
      commit('setUsersData', {
        isLoading: false,
        data: products,
        error: undefined,
      })
    } catch (error) {
      commit('setUsersData', {
        data: undefined,
        isLoading: false,
        error: 'Problem to load users',
      })
    }
  },
}

export type Actions = typeof actions
