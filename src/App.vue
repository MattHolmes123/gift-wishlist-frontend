<template>
  <div id="app" class="grid-container">
    <div class="header">
      <div id="nav">
        <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
        <router-link v-if="isLoggedIn" to="/">Home</router-link>
        <router-link v-if="isLoggedIn" to="/playground">Playground</router-link>
        <router-link v-if="isLoggedIn" to="/my-wishlist"
          >My Wishlist</router-link
        >
        <router-link v-if="isLoggedIn" to="/my-group"
          >Wishlist group</router-link
        >
        <router-link v-if="isAdministrator" to="/all-wishlist-items"
          >All Wishlist items</router-link
        >
      </div>
      <UserProfileMenuItem v-if="isLoggedIn" />
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <p>Footer</p>
    </div>
  </div>
</template>

<script>
import UserProfileMenuItem from "@/components/UserProfileMenuItem";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("login");
const { mapState: mapUserState } = createNamespacedHelpers("user");

export default {
  name: "App",
  components: {
    UserProfileMenuItem
  },
  computed: {
    isAdministrator() {
      return this.isLoggedIn && this.is_superuser;
    },
    ...mapState(["isLoggedIn"]),
    ...mapUserState(["is_superuser"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr 1fr;
  gap: 0 0;
  row-gap: 1vh;
  grid-template-areas:
    "header"
    "content"
    "footer";
  height: 98vh;
}
.header {
  grid-area: header;
  /* FIXME: Remove debug borders */
  border-color: #2c3e50;
  border-style: solid;
}

.content {
  grid-area: content;
  /* FIXME: Remove debug borders */
  border-color: #2c3e50;
  border-style: solid;
}

.footer {
  grid-area: footer;
  /* FIXME: Remove debug borders */
  border-color: #2c3e50;
  border-style: solid;
}

.header > * {
  display: inline-flex;
}
.header > :first-child {
  float: left;
  margin-left: 1vw;
  margin-top: 1vw;
}

#user-profile {
  float: right;
  margin-right: 1vw;
  margin-top: 1vw;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 1vw;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
