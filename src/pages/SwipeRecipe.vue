<template>
  <q-page class="row items-center justify-evenly">
    <q-slide-item
      @left="onLeft"
      @right="onRight"
      left-color="green-2"
      right-color="red-2"
    >
      <template v-slot:left>
        <q-icon name="done" />
      </template>
      <template v-slot:right>
        <q-icon name="cancel" />
      </template>

      <q-card
        flat
        bordered
        v-if="recipes[0]"
        style="width: 500px; height: auto"
      >
        <q-item>
          <q-img
            :src="recipes[0].recipe.image"
            style="width: 80vh; height: auto"
          >
          </q-img>
        </q-item>
      </q-card>
    </q-slide-item>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import { Root, Hit } from 'components/models';

const recipes = ref<Hit[]>([]);

defineOptions({
  name: 'SwipeRecipe',
});

onBeforeMount(() => {
  getRecipe();
});

async function getRecipe() {
  await axios
    .get<Root>(
      'https://api.edamam.com/api/recipes/v2?type=public&app_id=8050a305&app_key=ea8ea451634d29c60d1a7093bdb16a87&imageSize=REGULAR&random=true'
    )
    .then((response) => {
      recipes.value.push(...response.data.hits);
      recipes.value.forEach((recipe) => {
        const img = new Image();
        img.src = recipe.recipe.image;
      });
    });
}

function onLeft({ reset }: { reset: () => void }) {
  $q.notify('Added to favourites');
  console.log(recipes.value.length);
  if (recipes.value.length <= 3) {
    getRecipe();
  }

  const savedRecipes: Hit[] = JSON.parse(
    localStorage.getItem('recipes') || '[]'
  );
  const shiftedRecipe: Hit | undefined = recipes.value.shift();
  if (shiftedRecipe) {
    savedRecipes.unshift(shiftedRecipe);
    localStorage.setItem('recipes', JSON.stringify(savedRecipes));
  }

  finalize(reset);
}

function onRight({ reset }: { reset: () => void }) {
  console.log(recipes.value.length);
  if (recipes.value.length <= 3) {
    getRecipe();
  }
  recipes.value.shift();
  finalize(reset);
}

const $q = useQuasar();

function finalize(reset: () => void) {
  setTimeout(() => {
    reset();
  }, 500);
}
</script>
