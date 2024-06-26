<template>
  <q-page class="row items-center justify-evenly" style="margin-bottom: 7vh">
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

            <p>{{ currentRecipe?.recipe.url }}</p>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-card
      v-for="recipe in localArray"
      :key="recipe.recipe.label"
      style="height: 20vh; width: 80%; margin-bottom: 20px; cursor: pointer"
      v-on:click="openDialog(recipe)"
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

          <!-- <div v-for="tag in recipe.recipe.tags" :key="tag">
            <q-chip outline color="green" text-color="white" icon-right="star">
              {{ tag }}
            </q-chip>
          </div> -->
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
const localArray = JSON.parse(localStorage.getItem('recipes') || '[]') as Hit[];

defineOptions({
  name: 'SavedRecipe',
});

function openDialog(recipe: Hit) {
  basic.value = true;
  currentRecipe.value = recipe;
}
</script>
