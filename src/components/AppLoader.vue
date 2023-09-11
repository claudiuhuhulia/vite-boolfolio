<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <div class="loader-overlay">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.loader-overlay {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0.6, .6, .6, .6);
    display: flex;
    z-index: 3;
    align-items: center;
    justify-content: center;

    .spinner-border {
        width: 140px;
        height: 140px;
    }
}
</style>