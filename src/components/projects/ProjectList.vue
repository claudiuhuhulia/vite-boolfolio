<script>
import ProjectCard from './ProjectCard.vue';
export default {
    components: { ProjectCard },
    name: 'ProjectList',
    props: { projects: Array }
}
</script>

<template>
    <section id="projects-list">
        <h3>I miei progetti</h3>
        <div v-if="projects.length">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <h3 v-else class="text-center">Non ci sono progetti</h3>
    </section>
</template>