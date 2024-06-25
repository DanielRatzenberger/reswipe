<template>
  <div class="q-pa-md q-gutter-sm fit column no-wrap items-center">

    <q-img :src="url" spinner-color="white" style="height: 140px; max-width: 150px" @touchstart="touchStartMethod"
      @touchEndMethod="touchEndMethod" />
    <q-btn style="overflow: auto;" push color="teal" label="Change image" @click="refresh" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';

defineOptions({
  name: 'IndexPage'
});

let url = ref('https://api.spoonacular.com/recipes/random?apiKey=04b5b9f8e44f43ad9feaf07a1a151852');
async function refresh() {
  const response = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=04b5b9f8e44f43ad9feaf07a1a151852');
  url.value = response.data.recipes[0].image;
  console.log(response.data.recipes[0].image);
}

function touchStartMethod(touchEvent) {
  if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
    return;
  }
  const posXStart = touchEvent.changedTouches[0].clientX;
  addEventListener('touchend', (touchEvent) => this.touchEnd(touchEvent, posXStart), { once: true });
}
function touchEndMethod(touchEvent, posXStart) {
  if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
    return;
  }
  const posXEnd = touchEvent.changedTouches[0].clientX;
  if (posXStart < posXEnd) {
    this.previous(); // swipe right
  } else if (posXStart > posXEnd) {
    this.next(); // swipe left
  }
}

onMounted(() => {
  refresh();
})
</script>
