import Vue from "vue";
import VueRouter from "vue-router";

import Authentication from "./middlewares/authentication";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { requiresAuth: true, requiresPermission: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../modules/auth")
  },
  {
    path: "/about",
    name: "About",
    meta: { requiresAuth: true, requiresPermission: true },
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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authPermission = await Authentication.verifyAuth();
    console.log(authPermission);
    if (!authPermission) {
      next({ name: "login" });
    }
    next();
  } else {
    next();
  }
});

export default router;
