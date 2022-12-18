<script lang="ts">
import { defineComponent } from 'vue'
import { QTableColumn } from 'quasar'
import SearchInput from './SearchInput.vue'
import RemoveActions from './RemoveAction.vue'
import Pagination from './Pagination.vue'
import { FetchData } from '../types/common.types'
import { User } from '../types/user.types'

export default defineComponent({
  components: { SearchInput, RemoveActions, Pagination },
  data() {
    return {
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
    }
  },
  computed: {
    usersData(): FetchData<User[]> {
      return this.$store.state.users
    },
    filteredUsers(): User[] {
      return this.$store.getters.filteredUsers || []
    },
    tableColumns(): QTableColumn<User>[] {
      return [
        {
          name: 'avatar',
          field: (row) => row.picture.thumbnail,
          label: 'Avatar',
          align: 'left',
        },
        {
          name: 'name',
          field: ({ name }) => `${name.first} ${name.last}`,
          label: 'User name',
          align: 'left',
          sortable: true,
        },
        {
          name: 'email',
          field: 'email',
          label: 'Email',
          align: 'left',
          sortable: true,
        },
        {
          name: 'country',
          field: (row) => row.location.country,
          label: 'Country',
          align: 'left',
          sortable: true,
        },
        {
          name: 'gender',
          field: 'gender',
          label: 'Gender',
          align: 'left',
        },
      ]
    },
    selected: {
      get() {
        return this.$store.state.selectedUsers
      },
      set(users: User[]) {
        this.$store.commit('setSelectedUsers', users)
      },
    },
  },
  created() {
    if (this.$store.state.users.data) return
    this.$store.dispatch('getUsers', undefined)
  },
})
</script>

<template>
  <q-table
    :rows="filteredUsers"
    :columns="tableColumns"
    :row-key="(row) => row.email"
    :rows-per-page-options="[10]"
    selection="multiple"
    v-model:selected="selected"
    v-model:pagination="pagination"
    no-data-label="Users not found"
    hide-pagination
    class="user-table"
  >
    <template v-slot:top>
      <div class="table-header">
        <RemoveActions />
        <SearchInput />
      </div>
    </template>
    <template v-slot:header-selection="scope">
      <q-checkbox v-model="scope.selected" size="sm" />
    </template>

    <template v-slot:body-selection="scope">
      <q-checkbox v-model="scope.selected" size="sm" />
    </template>
    <template v-slot:body-cell-avatar="props">
      <q-td :props="props">
        <q-avatar size="md">
          <img
            :src="(props.row as User).picture.thumbnail"
            :alt="(props.row as User).name.last"
          />
        </q-avatar>
      </q-td>
    </template>
  </q-table>
  <Pagination
    v-model="pagination.page"
    :rows-per-page="pagination.rowsPerPage"
  />
</template>

<style scoped lang="scss">
.user-table {
  max-width: 900px;
  margin-inline: auto;
}
.table-header {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
}
</style>
