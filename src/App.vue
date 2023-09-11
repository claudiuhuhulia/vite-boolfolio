<script>
import axios from 'axios'
const endpoint = 'http://127.0.0.1:8000/api/projects/'
import AppHeader from './components/AppHeader.vue'
export default {
  components: { AppHeader },
  data() {
    return {
      projects: []
    }
  },
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => { this.projects = res.data })
    }
  },
  created() {
    this.fetchProjects()
  }


};
</script>

<template>
  <AppHeader />
  <main class="container mt-3">
    <h1>ciao</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </main>
</template>


<style></style>