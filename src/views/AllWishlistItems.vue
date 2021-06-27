<template>
  <div class="my-wishlist-container">
    <h3 class="component-header">All Wishlist items</h3>
    <WishlistList v-bind:wishlist-items="wishlistItems" />
  </div>
</template>

<script>
import WishlistList from "@/components/WishlistList";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("wishlist");

export default {
  data() {
    return {};
  },
  /**
   * loads all wishlist items.
   * TODO: Look in how to do it properly
   * https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State
   */
  async created() {
    await this.getAllWishListItems();
  },

  name: "all-wishlist-items",
  components: {
    WishlistList
  },
  methods: {
    ...mapActions(["getAllWishListItems"])
  },
  computed: {
    ...mapState(["wishlistItems"])
  }
};
</script>

<style scoped>
.my-wishlist-container {
  margin-left: 1vw;
  margin-right: 1vw;
  text-align: left;
}

.component-header {
}

.new-item-container {
  display: flex;
  flex-grow: 1;
  justify-content: left;
}
</style>
