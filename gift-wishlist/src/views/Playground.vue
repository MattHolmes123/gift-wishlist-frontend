<template>
  <div class="playground">
    <p>Count: {{ count }}</p>
    <button @click="getPlaygroundState">Initialise App</button>
    <br />
    <button @click="incrementCount">I increment by one</button>
    <br />
    <label for="increase-by">Increase by:</label>
    <input id="increase-by" v-model="increaseBy" type="number" />
    <button @click="incrementCountBy({ amount: increaseBy })">go</button>
    <hr />
    <p>Playing around by passing in components now</p>
    <PlaygroundList
      msg="This is a message"
      v-bind:foo="2"
      v-bind:bar="3"
      v-bind:baz="() => 4"
    />
    <PlaygroundList
      v-for="(item, index) in playgroundListData"
      v-bind:msg="item.msg"
      v-bind:foo="item.foo"
      v-bind:bar="item.bar"
      v-bind:baz="item.baz"
      v-bind:key="index"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import types from "@/store/mutation-types";

import PlaygroundList from "@/components/PlaygroundList.vue"; // @ is an alias to /src

export default {
  name: "playground",
  data() {
    return {
      increaseBy: 0
    };
  },
  methods: {
    ...mapMutations({
      incrementCount: types.INCREMENT_COUNT,
      incrementCountBy: types.INCREMENT_COUNT_BY
    }),
    ...mapActions(["getPlaygroundState"])
  },
  computed: {
    localComputed() {
      return 2;
    },
    ...mapState(["count", "playgroundListData"])
  },
  components: {
    PlaygroundList
  }
};
</script>

<style scoped></style>
