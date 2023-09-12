import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import ProjectDetailPage from '../pages/ProjectDetailPage.vue'

 
const router = createRouter({
history:createWebHistory(),
routes:[
{path:'/', name:'HomePage', component: HomePage},
{path:'/projects/:id', name:'ProjectDetail', component: ProjectDetailPage},

{path:'/contact', name:'ContactPage', component: ContactPage},
{path:'/NotFoundPage', name:'NotFoundPage', component: NotFoundPage},

{path:'/:pathMatch(.*)*', redirect:'/NotFoundPage'}


]
})

export {router}
