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
          <div class="text-h6">{{ currentElement?.recipe.label }}</div>
          <q-separator />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-img
            :src="currentElement?.recipe.image"
            style="width: 50%; border-radius: 5%"
          ></q-img>

          <div>
            <p style="font-size: larger">Ingredients :</p>
            <ul>
              <li
                v-for="element in currentElement?.recipe.ingredients"
                :key="element.foodId"
              >
                {{ element.text }}
              </li>
            </ul>

            <a :href="currentElement?.recipe.url" target="_blank">{{
              currentElement?.recipe.url
            }}</a>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-card
      v-for="element in localArray"
      :key="element.recipe.label"
      style="
        height: fit-content;
        width: 80%;
        margin-bottom: 20px;
        cursor: pointer;
      "
      v-on:click="openDialog(element)"
    >
      <q-card flat bordered>
        <div>
          <q-card-section horizontal>
            <q-img
              class="img"
              :src="element?.recipe.image"
              style="
                width: 80%;

                height: auto;
                border-top-left-radius: 5%;
                border-bottom-left-radius: 5%;
              "
            ></q-img>

            <q-card-section style="display: grid">
              <div>
                <p>{{ element?.recipe.label }}</p>
                <q-separator />
              </div>
              <p>
                Prep-Time:
                {{
                  element?.recipe.totalTime == 0
                    ? '/'
                    : element?.recipe.totalTime + ' min'
                }}
              </p>
              <p>category: {{ element?.recipe.dishType.toString() }}</p>
            </q-card-section>
          </q-card-section>

          <q-btn
            style="position: absolute; top: 0.25rem; right: 0.25rem;"
            flat
            round
            dense
            color="primary"
            icon="close"
            v-close-popup
            v-on:click.stop="deleteElement(element)"
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
const currentElement = ref<Hit>();
const localArray = ref(
  JSON.parse(localStorage.getItem('list') || '[]') as Hit[]
);

defineOptions({
  name: 'PageTwo',
});

function deleteElement(element: Hit) {
  const index = localArray.value.indexOf(element);
  localArray.value.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(localArray.value));
}

function openDialog(element: Hit) {
  basic.value = true;
  currentElement.value = element;
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
