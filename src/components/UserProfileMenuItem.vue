<template>
  <div id="user-profile">
    <div>{{ full_name }}</div>
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("user");
const { mapActions } = createNamespacedHelpers("login");

export default {
  name: "UserProfileMenuItem",
  methods: {
    logout() {
      this.logoutUser().then(() => {
        this.$router.push({ path: "Login" });
      });
    },
    ...mapActions(["logoutUser"])
  },
  computed: {
    ...mapState(["full_name"])
  }
};
</script>

<style scoped>
#user-profile a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 1vw;
}

#user-profile a.router-link-exact-active {
  color: #42b983;
}

#user-profile > :last-child {
  padding-left: 5px;
}
</style>
