<template>
  <div class="list-container">
    <WishlistItem
      class="wishlist-container"
      v-for="(item, index) in userWishlist"
      v-bind:key="item.id"
      v-bind:index="index"
      v-bind:name="item.name"
      v-bind:url="item.url"
    />
  </div>
</template>

<script>
import WishlistItem from "@/components/WishlistItem";

import { mapState } from "vuex";

export default {
  name: "WishlistList",
  props: {},
  methods: {},
  computed: {
    ...mapState(["userWishlist"])
  },
  components: {
    WishlistItem
  }
};
</script>

<style scoped>
.wishlist-container {
  display: flex;
  flex-grow: 1;
  margin-bottom: 5px;
  /* FIXME: Remove debug borders */
  border-color: #2c3e50;
  border-style: solid;
}
</style>
