<script>
export default {
    name: 'AppAlert',
    props: { isOpen: Boolean },
    emits: ['close']
}

</script>
<template>
    <div v-if="isOpen" class="alert alert-danger d-flex justify-content-between" role="alert">
        Attenzione, si è verificato un errore durante la chiamata api
        <button class="btn-close" type="button" @click="$emit('close')"></button>
    </div>
</template>
<style></style>