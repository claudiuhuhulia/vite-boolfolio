<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/">Home
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/contact">Contacts
                        </RouterLink>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
</template>

<style></style>