<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: Number, required: true },
    rowsPerPage: { type: Number, required: true },
  },
  computed: {
    pagesNumber(): number {
      const rows = this.$store.getters.filteredUsers || []
      return Math.ceil(rows.length / this.rowsPerPage)
    },
    page: {
      get() {
        return this.modelValue
      },
      set(value: number) {
        this.$emit('update:modelValue', value)
      },
    },
  },
})
</script>

<template>
  <div class="row justify-center q-mt-md">
    <q-pagination
      v-model="page"
      color="grey-8"
      active-color="primary"
      :max="pagesNumber"
      :max-pages="5"
      size="md"
    />
  </div>
</template>

<style scoped></style>
