import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const home = {
  path: "/",
  name: "Home",
  component: Home
};

const about = {
  path: "/about",
  name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
};

const playground = {
  path: "/playground",
  name: "Playground",
  component: () => import("../views/Playground.vue")
};

const myWishlist = {
  path: "/my-wishlist",
  name: "My Wishlist",
  component: () => import("../views/MyWishlist.vue")
};

const wishlistGroup = {
  path: "/my-group",
  name: "Wishlist group",
  component: () => import("../views/MyGroup.vue")
};

const routes = [home, about, playground, myWishlist, wishlistGroup];

const router = new VueRouter({
  routes
});

export default router;
