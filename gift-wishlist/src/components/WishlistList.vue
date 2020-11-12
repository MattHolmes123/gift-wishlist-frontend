<template>
  <div class="list-container">
    <!-- TODO: Change to ul and li -->
    <WishlistItem
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

<style scoped></style>
