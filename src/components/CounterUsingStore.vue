<template>
  <div>
    <button @click="Increment">Increment</button>

    <div v-if="count % 2 === 0">
      count is {{ count }}. Count is even number.
    </div>

    <div v-else>count is {{ count }}. Count is odd number.</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => store.state.count);

function Increment() {
  store.commit("increment");
}
</script>
