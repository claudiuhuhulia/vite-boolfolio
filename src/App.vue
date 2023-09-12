<script>
import AppHeader from './components/AppHeader.vue';


export default {
  components: { AppHeader, },

};
</script>

<template>
  <AppHeader />
  <main class="container mt-3">
    <RouterView />

  </main>
</template>


<style></style>