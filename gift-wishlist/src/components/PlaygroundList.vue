<template>
  <div class="playground-component">
    <ul>
      <li>{{ msg }}</li>
      <li>{{ foo }}</li>
      <li>{{ bar }}</li>
      <li>{{ baz() }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlaygroundList",
  props: {
    msg: String,
    foo: Number,
    bar: Number,
    baz: Function
  }
};
</script>

<style scoped>
.playground-component {
  display: flex;
  justify-content: center;
}
</style>
