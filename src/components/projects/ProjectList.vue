<script>
export default {
    name: 'ProjectList',
    props: { projects: Array }
}
</script>

<template>
    <section id="projects-list">
        <h3>I miei progetti</h3>
        <ul v-if="projects.length">
            <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
        </ul>
        <h3 v-else class="text-center">Non ci sono progetti</h3>
    </section>
</template>