import {createApp} from 'vue'
import App from './App.vue'
import './assets/main.css'
import inicio from "@/components/inicio.vue";
import registro from "@/components/registro.vue";
import ofimatica from './components/ofimatica.vue'
import programacion from './components/programacion.vue'
import sistemas from './components/sistemas.vue'
import login from './components/login.vue'
import administracion from './components/administracion.vue'
import {createRouter, createWebHistory} from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "@/firebase";


var authState = false;
// Rutas de los componentes
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


const router = createRouter({
    history: createWebHistory(),
    routes
})

// Si el usuario esta logueado hace un router.push hacia la sección de administración, y al loguear te manda al /.
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        authState = true;
        router.push('/administracion')
    } else {
        // User is signed out
        authState = false;
        router.push("/")
    }
});

const app = createApp(App)
app.use(router)
app.mount('#app')