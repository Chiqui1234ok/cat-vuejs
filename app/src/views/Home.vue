<template>
  <main class="home container fullscreen grid center">
    <Credentials class="container" />
  </main>
</template>

<script>
// @ is an alias to /src
import Credentials from '@/components/Credentials.vue'

export default {
  name: 'Home',
  components: {
    Credentials
  }
}
</script>

<style>
  .home .container {
    max-width: 768px;
  }
</style>