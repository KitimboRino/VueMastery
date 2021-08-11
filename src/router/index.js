import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue"
import EventDetails from "../views/EventDetails.vue"
import About from "../views/About.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    // Parse & set the current page from the router using Function mode.
    // If page exists parse the string to an integer, otherwise return 1.    
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/about",
    name: "About",
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
