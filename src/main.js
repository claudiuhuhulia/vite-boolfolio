import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLoader from './components/AppLoader.vue'
import App from './App.vue'


const app = createApp(App)
app.component('AppLoader',AppLoader)
app.mount('#app')
