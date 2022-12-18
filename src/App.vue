<script lang="ts">
import { defineComponent } from 'vue'
import UsersList from './components/UsersList.vue'

export default defineComponent({
  components: { UsersList },
})
</script>

<template>
  <div class="q-pb-md">
    <h1 class="text-h3 text-center">List of users</h1>
    <UsersList />
  </div>
</template>

<style scoped></style>
