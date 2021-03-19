<template>
  <div class="my-wishlist-item">
    <p>
      {{ index + 1 }}:) {{ name }}, URL:<a v-bind:href="url" target="_blank">{{
        name
      }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "WishlistItem",
  props: {
    name: String,
    url: String,
    index: Number
  }
};
</script>

<style scoped>
p {
  text-align: left;
  margin-left: 1em;
}
</style>
