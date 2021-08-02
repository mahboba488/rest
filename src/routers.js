import Home from './components/Home.vue';
import Singup from './components/Singup.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from "./components/Login.vue";

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Singup',
        component: Singup,
        path: '/singup/'




    },
    {
        name: 'Login',
        component: Login,
        path: '/login/'




    }



];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;