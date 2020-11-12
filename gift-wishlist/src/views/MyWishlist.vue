<template>
  <div class="my-wishlist-container">
    <h3 class="component-header">My gift wishlist</h3>
    <!-- TODO: Refactor the inputs into an "add wishlist item" component -->
    <label for="new-item">New item</label>
    <input type="text" id="new-item" v-model="newItemName" />
    <label for="new-item-url">URL: </label>
    <input type="text" id="new-item-url" v-model="newItemURL" />
    <button @click="addNewItem">Add item</button>
    <h3 class="component-header">Wishlist items</h3>
    <WishlistList />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import WishlistList from "@/components/WishlistList";

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
    ...mapActions(["addWishlistItem"])
  }
};
</script>

<style scoped>
.my-wishlist-container {
}
.component-header {
  text-align: left;
  margin-left: 5rem;
}
</style>
