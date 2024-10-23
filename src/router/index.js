import Accueil from '@/views/Accueil.vue'
import APropos from '@/views/APropos.vue'
import Contact from '@/views/Contact.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'Home', 
      component: Accueil
    }, 
    {
      path: '/about', 
      name: 'About', 
      component: APropos
    }, 
    {
      path: '/contact', 
      name: 'Contact', 
      component: Contact
    }
  ]
})

export default router
