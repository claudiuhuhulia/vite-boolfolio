<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contact-message'
const emptyForm = { email: '', subject: '', message: '' }
export default {
    name: 'ContactPage',
    data: () => ({
        form: emptyForm
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
                .then(() => { this.form = emptyForm })
                .catch(err => { console.error(err) })
                .then(() => { })
        }
    }

}
</script>

<template>
    <h1>Contattaci</h1>
    <form @submit.prevent="sendForm">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model.trim="form.email"
                placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label class="mb-2" for="subject">Soggetto</label>
            <input class="form-control" v-model.trim="form.subject" type="text" placeholder="Default input" id="subject"
                aria-label="default input example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Contenuto</label>
            <textarea class="form-control" v-model.trim="form.message" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button class="btn btn-success">Invia</button>
    </form>
</template>

<style></style>