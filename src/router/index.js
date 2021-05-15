import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
import { readIsLoggedIn } from "@/store/modules/login/getters";

Vue.use(VueRouter);

const login = {
  path: "/login",
  name: "Login",
  component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")
};

const home = {
  path: "/",
  name: "Home",
  component: Home,
  meta: { requiresAuth: true }
};

const playground = {
  path: "/playground",
  name: "Playground",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
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

// TODO Read out to correctly define this as a async component (to include a loading component etc)
// https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State
const allWishlistItems = {
  path: "/all-wishlist-items",
  name: "All Wishlist Items",
  component: () => import("../views/AllWishlistItems.vue"),
  meta: { requiresAuth: true }
};

const catchAll = {
  path: "/*",
  redirect: home.path
};

const routes = [
  login,
  home,
  playground,
  myWishlist,
  wishlistGroup,
  allWishlistItems,
  catchAll
];

const router = new VueRouter({
  routes
});

// Check any routes that require Auth
// check if logged in, if not redirect to login page.
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authenticated = readIsLoggedIn(store.state);

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
