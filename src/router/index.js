import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddTodo from '../views/AddTodo.vue'
import EditTodo from '../views/EditTodo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/todos/:id',
    name: 'EditTodo',
    component: EditTodo,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router