import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
import { readIsLoggedIn } from "@/store/modules/login/getters";

Vue.use(VueRouter);

const login = {
  path: "/login",
  name: "Login",
  component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue")
};

const home = {
  path: "/",
  name: "Home",
  component: Home,
  meta: { requiresAuth: true }
};

const about = {
  path: "/about",
  name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  meta: { requiresAuth: true }
};

const playground = {
  path: "/playground",
  name: "Playground",
  component: () => import("../views/Playground.vue"),
  meta: { requiresAuth: true }
};

const myWishlist = {
  path: "/my-wishlist",
  name: "My Wishlist",
  component: () => import("../views/MyWishlist.vue"),
  meta: { requiresAuth: true }
};

const wishlistGroup = {
  path: "/my-group",
  name: "Wishlist group",
  component: () => import("../views/MyGroup.vue"),
  meta: { requiresAuth: true }
};

const catchAll = {
  path: "/*",
  redirect: home.path
};

const routes = [
  login,
  home,
  about,
  playground,
  myWishlist,
  wishlistGroup,
  catchAll
];

const router = new VueRouter({
  routes
});

// Check any routes that require Auth
// check if logged in, if not redirect to login page.
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authenticated = readIsLoggedIn(store);

    if (!authenticated) {
      next({ path: login.path, query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
