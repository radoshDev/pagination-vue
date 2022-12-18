<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    searchValue: {
      get() {
        return this.$store.state.searchValue
      },
      set(value: string) {
        this.$store.commit('setSearchValue', value)
      },
    },
  },
})
</script>

<template>
  <q-input
    :dense="false"
    placeholder="Search..."
    v-model.trim="searchValue"
    :debounce="300"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>
