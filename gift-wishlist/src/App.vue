<template>
  <div id="app" class="grid-container">
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/playground">Playground</router-link>
        <router-link to="/my-wishlist">My Wishlist</router-link>
        <router-link to="/my-group">Wishlist group</router-link>
      </div>
      <UserProfileMenuItem />
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

export default {
  name: "App",
  components: {
    UserProfileMenuItem
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
.header > :last-child {
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
