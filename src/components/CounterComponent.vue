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
import { ref } from "vue";

const count = ref(0);

function Increment() {
  count.value += 1;
}
</script>
