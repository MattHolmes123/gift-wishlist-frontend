<template>
  <div id="app" class="grid-container">
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/playground">Playground</router-link> |
        <router-link to="/my-wishlist">My Wishlist</router-link>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <p>Footer</p>
    </div>
  </div>
</template>

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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
