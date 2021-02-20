<template>
  <div id="user-profile">
    <div>{{ full_name }}</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("user");

export default {
  name: "UserProfileMenuItem",
  computed: {
    ...mapState(["full_name"])
  }
};
</script>

<style scoped>
#user-profile {
}
</style>
