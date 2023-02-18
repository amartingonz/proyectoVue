import {createApp} from 'vue'
import App from './App.vue'

import './assets/main.css'
import inicio from "@/components/inicio.vue";
// import TheWelcome from "@/components/TheWelcome.vue";
import registro from "@/components/registro.vue";
// import privado from "@/components/privado.vue";
import ofimatica from './components/ofimatica.vue'
import programacion from './components/programacion.vue'
import sistemas from './components/sistemas.vue'
import login from './components/login.vue'
import administracion from './components/administracion.vue'
import {createRouter, createWebHistory} from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "@/firebase";


var authState = false;
const routes = [
    {
        path: '/',
        component: inicio
    },
    {
        path: '/ofimatica',
        component: ofimatica
    },
    {
        path: '/programacion',
        component: programacion
    },
    {
        path: '/sistemas',
        component: sistemas,
        beforeEnter: (to, from) => {
            // reject the navigation
            return authState},
    },
    {
        path: '/registro',
        component: registro
    }
    ,
    {
        path: '/login',
        component: login
    },
    {
        path: '/administracion',
        component: administracion,
        
    },
]
//     {
//         path: '/privado',
//         component: privado,
        // beforeEnter: (to, from) => {
        //     // reject the navigation
        //     return authState
//         },
//     },
// ]

const router = createRouter({
    history: createWebHistory(),
    routes
})
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        authState = true;
    } else {
        // User is signed out
        authState = false;
        router.push("/")
    }
});

const app = createApp(App)
app.use(router)
app.mount('#app')