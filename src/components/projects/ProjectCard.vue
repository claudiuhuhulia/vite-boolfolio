<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    computed: {
        postDate() {
            const date = new Date(this.project.created_at);
            let day = date.getDate();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            day = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;


            const projectDate = `${day}/${month}/${year} alle ${hours}:${minutes}:${seconds}`

            return projectDate;
        },
        abstract() {
            const abstract = this.project.content.slice(0, 199);
            return abstract + '...'
        }
    }
}
</script>

<template>
    <div class="card my-5">
        <div class="card-header">{{ project.name }}</div>
        <div class="card-body clearfix">
            <img v-if="project.image" class="float-start me-2" width="100" :src="project.image" :alt="project.name">
            <p>{{ abstract }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
            <div>Pubblicato il: <time>{{ postDate }}</time></div>
            <div>Tipo: {{ project.type.label }}</div>
        </div>
    </div>
</template>

<style></style>