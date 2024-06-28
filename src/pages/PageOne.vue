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
        v-if="list[0]"
        style="width: 500px; height: auto; max-width: 90vw"
      >
        <q-item>
          <q-img
            :src="list[0].recipe.image"
            style="width: 80vw; height: 65vh"
          >
            <div class="absolute-bottom text-subtitle2 text-left">
              {{ list[0].recipe.label }}
              <q-separator />
              <q-badge
                v-for="tag in list[0].recipe.tags?.slice(0, 3)"
                :label="tag"
                :key="tag"
                style="margin-right: 10px"
                outline
                color="amber-2"
              >
              </q-badge>
            </div>
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

const list = ref<Hit[]>([]);

defineOptions({
  name: 'PageTwo',
});

onBeforeMount(() => {
  getList();
});

async function getList() {
  await axios
    .get<Root>(
      'https://api.edamam.com/api/recipes/v2?type=public&app_id=8050a305&app_key=ea8ea451634d29c60d1a7093bdb16a87&imageSize=REGULAR&random=true'
    )
    .then((response) => {
      list.value.push(...response.data.hits);
      list.value.forEach((a) => {
        const img = new Image();
        img.src = a.recipe.image;
      });
    });
}

function onLeft({ reset }: { reset: () => void }) {
  $q.notify('Added to favourites');
  console.log(list.value.length);
  if (list.value.length <= 3) {
    getList();
  }

  const savedData: Hit[] = JSON.parse(
    localStorage.getItem('list') || '[]'
  );
  const shiftedElement: Hit | undefined = list.value.shift();
  if (shiftedElement) {
    savedData.unshift(shiftedElement);
    localStorage.setItem('list', JSON.stringify(savedData));
  }

  finalize(reset);
}

function onRight({ reset }: { reset: () => void }) {
  if (list.value.length <= 3) {
    getList();
  }
  list.value.shift();
  finalize(reset);
}

const $q = useQuasar();

function finalize(reset: () => void) {
  setTimeout(() => {
    reset();
  }, 500);
}
</script>
