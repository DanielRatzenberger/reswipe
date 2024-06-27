<template>
  <q-page
    class="row items-center justify-evenly"
    style="margin-bottom: 2rem; margin-top: 2rem"
  >
    <q-dialog v-model="basic" transition-show="fade" transition-hide="fade">
      <q-card>
        <q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              round
              dense
              color="primary"
              icon="close"
              v-close-popup
            />
          </q-card-actions>
          <div class="text-h6">{{ currentRecipe?.recipe.label }}</div>
          <q-separator />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-img
            :src="currentRecipe?.recipe.image"
            style="width: 50%; border-radius: 5%"
          ></q-img>

          <div>
            <p style="font-size: larger">Ingredients :</p>
            <ul>
              <li
                v-for="ingrediant in currentRecipe?.recipe.ingredients"
                :key="ingrediant.foodId"
              >
                {{ ingrediant.text }}
              </li>
            </ul>

            <a :href="currentRecipe?.recipe.url" target="_blank">{{
              currentRecipe?.recipe.url
            }}</a>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-card
      v-for="recipe in localArray"
      :key="recipe.recipe.label"
      style="
        height: fit-content;
        width: 80%;
        margin-bottom: 20px;
        cursor: pointer;
      "
      v-on:click="openDialog(recipe)"
    >
      <q-card flat bordered>
        <div>
          <q-card-section horizontal>
            <q-img
              class="img"
              :src="recipe?.recipe.image"
              style="
                width: 80%;

                height: auto;
                border-top-left-radius: 5%;
                border-bottom-left-radius: 5%;
              "
            ></q-img>

            <q-card-section style="display: grid">
              <div>
                <p>{{ recipe?.recipe.label }}</p>
                <q-separator />
              </div>
              <p>
                Prep-Time:
                {{
                  recipe?.recipe.totalTime == 0
                    ? '/'
                    : recipe?.recipe.totalTime + ' min'
                }}
              </p>
              <p>category: {{ recipe?.recipe.dishType.toString() }}</p>
            </q-card-section>
          </q-card-section>

          <q-btn
            style="margin-left: auto"
            flat
            round
            dense
            color="primary"
            icon="close"
            v-close-popup
            v-on:click.stop="deleteRecipe(recipe)"
          />
        </div>
      </q-card>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Hit } from 'components/models';

const basic = ref(false);
const currentRecipe = ref<Hit>();
const localArray = ref(
  JSON.parse(localStorage.getItem('recipes') || '[]') as Hit[]
);

defineOptions({
  name: 'SavedRecipe',
});

function deleteRecipe(recipe: Hit) {
  const index = localArray.value.indexOf(recipe);
  localArray.value.splice(index, 1);
  localStorage.setItem('recipes', JSON.stringify(localArray.value));
}

function openDialog(recipe: Hit) {
  basic.value = true;
  currentRecipe.value = recipe;
}
</script>

<style scoped>
.img {
  min-width: 120px;
  max-width: 120px;
}

@media screen and (min-width: 600px) {
  .img {
    max-width: 35vh;
    height: 35vh;
  }
}
</style>
