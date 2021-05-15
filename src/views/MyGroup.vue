<template>
  <div class="group-wishlist-container">
    <h3 class="component-header">My Family & friends</h3>
    <div v-for="user in userGroup" v-bind:key="user.id">
      <p>{{ user.name }}</p>
      <p>User wishlist:</p>
      <!-- <UserWishlist v-bind:wishlist="user.userWishList"></UserWishlist>-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "MyGroup",
  components: {},
  methods: {
    ...mapActions([])
  },
  computed: {
    ...mapState(["userGroup"])
  }
};
</script>

<style scoped>
.group-wishlist-container {
  margin-left: 1vw;
  margin-right: 1vw;
  text-align: left;
}

.component-header {
}
</style>
