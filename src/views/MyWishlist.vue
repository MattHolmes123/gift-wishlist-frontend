<template>
  <div class="my-wishlist-container">
    <h3 class="component-header">My gift wishlist</h3>
    <!-- TODO: Refactor the inputs into an "add wishlist item" component -->
    <div class="new-item-container">
      <label for="new-item">New item</label>
      <input type="text" id="new-item" v-model="newItemName" />
      <label for="new-item-url">URL: </label>
      <input type="text" id="new-item-url" v-model="newItemURL" />
      <button @click="addNewItem">Add item</button>
    </div>
    <h3 class="component-header">Wishlist items</h3>
    <WishlistList v-bind:wishlist-items="userWishlist" />
  </div>
</template>

<script>
import WishlistList from "@/components/WishlistList";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("wishlist");

export default {
  data() {
    return {
      newItemName: "",
      newItemURL: ""
    };
  },
  name: "MyWishlist",
  components: {
    WishlistList
  },
  /**
   * loads all wishlist items.
   * TODO: Look in how to do it properly
   * https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State
   */
  async created() {
    await this.getMyWishlist();
  },

  methods: {
    addNewItem() {
      this.addWishlistItem({
        name: this.newItemName,
        url: this.newItemURL
      }).then(() => {
        this.resetNewItem();
      });
    },
    resetNewItem() {
      this.newItemName = "";
      this.newItemURL = "";
    },
    ...mapActions(["addWishlistItem", "getMyWishlist"])
  },
  computed: {
    ...mapState(["userWishlist"])
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
