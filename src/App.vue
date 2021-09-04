<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    created() {
      const a = 1
    }
  })
</script>
