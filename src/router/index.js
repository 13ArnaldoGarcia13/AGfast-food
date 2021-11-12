import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

{
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },

  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/views/Menu.vue')
  },

  {
    path: '/restaurante',
    name: 'restaurante',
    component: () => import('@/views/Restaurante.vue')
  },

  {
    path: '/familia',
    name: 'familia',
    component: () => import('@/views/Familia.vue')
  },

  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('@/views/Nosotros.vue')
  },

  {
    path: '/novedades',
    name: 'novedades',
    component: () => import('@/views/Novedades.vue')
  },

  {
    path: '/bebidas',
    name: 'bebidas',
    component: () => import('@/views/menu/Bebidas.vue')
  },

  {
    path: '/cajita-feliz',
    name: 'cajitafeliz',
    component: () => import('@/views/menu/CajitaFeliz.vue')
  },

   {
    path: '/desayuno',
    name: 'desayuno',
    component: () => import('@/views/menu/Desayuno.vue')
  },

  {
    path: '/postres',
    name: 'postres',
    component: () => import('@/views/menu/Postres.vue')
  },

  {
    path: '/hamburguesas',
    name: 'hamburguesas',
    component: () => import('@/views/menu/Hamburguesas.vue')
  },

  {
    path: '/pollo',
    name: 'pollo',
    component: () => import('@/views/menu/Pollo.vue')
  },

  {
    path: '/acompañamiento',
    name: 'acompañamiento',
    component: () => import('@/views/menu/Acompañamientos.vue')
  },

  {
    path: '/compañia',
    name: 'compañia',
    component: () => import('@/views/nosotros/Compañia.vue')
  },

  {
    path: '/unete',
    name: 'unete',
    component: () => import('@/views/nosotros/Unete.vue')
  },

  {
    path: '/puertas',
    name: 'puertas',
    component: () => import('@/views/nosotros/Puertas.vue')
  },

  {
    path: '/gente',
    name: 'gente',
    component: () => import('@/views/nosotros/Nuestragente.vue')
  },

  {
    path: '/trabajo',
    name: 'trabajo',
    component: () => import('@/views/nosotros/Trabajoenrestaurantes.vue')
  },

  {
    path: '/oficina',
    name: 'oficina',
    component: () => import('@/views/nosotros/Trabajoenlaoficina.vue')
  },

  {
    path: '/arcos',
    name: 'arcos',
    component: () => import('@/views/nosotros/Marcosdorados.vue')
  },

  {
    path: '/franquicias',
    name: 'franquicias',
    component: () => import('@/views/nosotros/Franquicias.vue')
  },

  {
    path: '/venezuela',
    name: 'venezuela',
    component: () => import('@/views/nosotros/McDONALDVenezuela.vue')
  },


]

const router = new VueRouter({
  routes
})

export default router
