<script>
const baseUri = 'http://127.0.0.1:8000/api/projects/'
import axios from 'axios'
import AppLoader from '../components/AppLoader.vue'
import ProjectCard from '../components/projects/ProjectCard.vue'
import { router } from '../router'

export default {
    components: { ProjectCard, AppLoader },
    name: 'ProjectDetailPage',
    data: () => ({
        project: null,
        isLoading: false
    }),
    methods: {
        getProject() {
            this.isLoading = true,
                axios.get(baseUri + this.$route.params.id)
                    .then(res => { this.project = res.data; })
                    .catch(err => { this.$router.push({ name: 'NotFoundPage' }) })
                    .then(() => { this.isLoading = false; });
        }
    }, created() {
        this.getProject();
    }
}
</script>

<template>
    <h2>Pagina dettaglio progetto {{ this.$route.params.id }}</h2>
    <AppLoader v-if="isLoading && !project" />
    <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true" />
</template>

<style></style>