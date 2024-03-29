import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            redirect: "/login",
            component: Home
        },
        {
            path: "/login",
            name: "Login",
            component: () =>
                import ("./views/Login.vue")
        },
        {
            path: "/register",
            name: "Register",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Register.vue")
        },
        {
            path: "/productlist",
            name: "ProductList",
            component: () =>
                import ("./views/ProductList.vue")
        }
    ]
});