import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main";
import MovieContent from "../views/MovieContent";





Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main
    },
    {
        path: "/Movie/:id",
        name: "MovieContent",
        meta:{whichHeader:"appMovieHeader"},
        props: true,
        component: MovieContent
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
