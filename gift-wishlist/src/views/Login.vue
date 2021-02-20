<template>
  <div class="login-container">
    <div class="new-item-container">
      <h3 v-show="loginFailed" class="warning">Failed to log in.</h3>
      <h3 v-show="loginSuccess" class="warning">Logged in successfully.</h3>
      <label for="username">Username </label>
      <input type="text" id="username" v-model="newUserName" />
      <br />
      <label for="new-item-url">Password </label>
      <input type="password" id="new-item-url" v-model="newUserPassword" />
      <br />
      <button v-bind:disabled="loginBtnDisabled" @click="login">
        Login
      </button>
      <button @click="testUserToken">Test Login token</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("login");

export default {
  data() {
    // TODO: Remove hardcoded data at some point.
    return {
      newUserName: "matt_holmes123@hotmail.com",
      newUserPassword: "password"
    };
  },
  name: "Login",
  methods: {
    login() {
      const payload = {
        username: this.newUserName,
        password: this.newUserPassword
      };
      this.loginUser(payload).then(() => this.reset());
    },
    reset() {
      // Only rest the username when we log in correctly.
      if (this.isLoggedIn) {
        this.newUserName = "";
      }
      this.newUserPassword = "";
    },
    ...mapActions(["loginUser", "testUserToken"])
  },
  computed: {
    loginFailed() {
      return this.isLoggedIn === false;
    },
    loginSuccess() {
      return this.isLoggedIn === true;
    },
    loginBtnDisabled() {
      return !this.newUserName || !this.newUserPassword;
    },

    ...mapState(["isLoggedIn"])
  }
};
</script>

<style scoped></style>
