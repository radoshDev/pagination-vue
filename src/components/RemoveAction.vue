<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    selected() {
      return this.$store.state.selectedUsers
    },
  },
  methods: {
    removeSelectedUser(): void {
      this.$store.commit('removeSelectedUser', undefined)
    },
  },
})
</script>

<template>
  <div>
    <q-btn
      @click="removeSelectedUser"
      color="primary"
      label="Remove"
      :disable="selected.length === 0"
      size="md"
      class="q-mr-md"
    />
    <span
      >Selected {{ selected.length }} user{{
        selected.length === 1 ? '' : 's'
      }}</span
    >
  </div>
</template>

<style scoped></style>
