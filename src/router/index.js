import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
import Home from "../views/Home.vue";
// import ExperienceDetails from "../views/ExperienceDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  // {
  //   path: "/:slug/:experienceSlug",  //how to get exp name???
  //   name: "ExperienceDetails",
  //   props: true,
  //   component:()=>
  //     import("../Components/ExperienceDetails.vue"),
  // },
  // // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  // {
  //   path: "/brazil",
  //   name: "brazil",
  //   component: () =>
  //     import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue"),

  // },
  // {
  //   path: "/hawaii",
  //   name: "hawaii",
  //   component: () =>
  //     import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue"),

  // },
  // {
  //   path: "/jamaica",
  //   name: "jamaica",
  //   component: () =>
  //     import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue"),

  // },
  // {
  //   path: "/panama",
  //   name: "panama",
  //   component:()=>
  //     import("../views/Panama.vue")

  // },
  {
    path: "/:slug", 
    // <!-- colon declares a dynamic section of a path-->           
    name: "DestinationPage", 
    props: true,
    component:()=>
      import("../views/DestinationPage.vue"),
      children: [
        {
          path: ":experienceSlug",
          name: "ExperienceDetails",
          props: true,
          component:()=> import("../Components/ExperienceDetails.vue"),
        }
      ]

  },
  // {
  //   path: "/:experienceSlug",
  //   name: "ExperienceDetails",
  //   props: true,
  //   component: () => import("../views/ExperienceDetails.vue")
  //   }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass:"active-class-router",
  mode: "history" //removes '#' from URL
});

export default router;
