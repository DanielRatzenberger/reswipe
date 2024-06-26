<template>
<<<<<<< Updated upstream
  <div class="q-pa-md q-gutter-sm fit column no-wrap items-center">

    <q-img :src="url" spinner-color="white" style="height: 140px; max-width: 150px" @touchstart="touchStartMethod"
      @touchEndMethod="touchEndMethod" />
    <q-btn style="overflow: auto;" push color="teal" label="Change image" @click="refresh" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
=======
  <q-page class="row items-center justify-evenly">
    <q-slide-item @left="onLeft" @right="onRight">
      <template v-slot:left>
        <q-icon name="done" />
      </template>
      <template v-slot:right>
        <q-icon name="alarm" />
      </template>

      <q-item>
        <q-item-section>
          <q-card
      v-touch-swipe.mouse="handleSwipe"
      v-for="recipe in recipes"
      :key="recipe.recipe.label"
      style="height: 20vh; width: 80%; margin-top: 10%; cursor: pointer"
      @click="console.log('hi')"
    >
      <q-card flat bordered>
        <div>
          <q-card-section horizontal>
            <q-img
              :src="recipe?.recipe.image"
              style="
                width: 35vh;
                height: 35vh;
                border-top-left-radius: 5%;
                border-bottom-left-radius: 5%;
              "
            ></q-img>

            <q-card-section style="display: grid">
              <div>
                <p>{{ recipe?.recipe.label }}</p>
                <q-separator />
              </div>
              <p>Zubereitungszeit: {{ recipe?.recipe.totalTime }} min</p>
              <p>Kategorie: {{ recipe?.recipe.dishType.toString() }}</p>
              <pre>{{ info }}</pre>
            </q-card-section>
          </q-card-section>

          <!-- <div v-for="tag in recipe.recipe.tags" :key="tag">
            <q-chip outline color="green" text-color="white" icon-right="star">
              {{ tag }}
            </q-chip>
          </div> -->
        </div>
      </q-card>
    </q-card>
      </q-item>
    </q-slide-item>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
>>>>>>> Stashed changes

defineOptions({
  name: 'IndexPage',
});

<<<<<<< Updated upstream
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
=======
function onLeft({ reset }: any) {
  $q.notify('Left action triggered. Resetting in 1 second.');
  finalize(reset);
}

function onRight({ reset }: any) {
  $q.notify('Right action triggered. Resetting in 1 second.');
  finalize(reset);
}

const $q = useQuasar();
let timer;

function finalize(reset: any) {
  timer = setTimeout(() => {
    reset();
  }, 1000);
}
>>>>>>> Stashed changes
</script>
