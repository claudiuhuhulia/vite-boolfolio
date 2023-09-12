<script>
export default {
    name: 'NotFoundPage'
}
</script>

<template>
    <div class="vh-100 d-flex flex-column align-items-center justify-content-center">
        <h3>404 | Page Not Found</h3>
        <button class="btn btn-secondary my-3" @click="$router.back()">Torna indietro</button>
    </div>
</template>

<style></style>