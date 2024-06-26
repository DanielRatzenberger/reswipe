<template>
  <q-page class="row items-center justify-evenly">
    <q-slide-item @left="onLeft" @right="onRight">
      <template v-slot:left>
        <q-icon name="done" />
      </template>
      <template v-slot:right>
        <q-icon name="print" />
      </template>

      <q-item>
        <q-item-section>
          <q-img
            style="height: 500px; width: 500px"
            src="https://edamam-product-images.s3.amazonaws.com/web-img/a90/a9000b92501d1aab881d6068c19954b1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJGMEQCID%2BssYsHBls1J7ZM4L8Nn7%2B6rT9Z%2FLOm9Xje0DCjQb8hAiBu2zVIO4Bj6vDES5NbBzB5p2bQ4HoJtWY2W%2FaNFEaLaCrCBQjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIM5DuYNOSgLepfE5LoKpYFjyMrQYc%2BfzJgLGrU64nNcGHEZUCNewEnpYwiP6PcDLUzXgle%2FTd69jCJJDut9GzepF2v6SN2K31GK3djlMYOf23xwhFSIhh%2F6Dy2G9Ri%2FtACnevR8Rf06lKF4OEp96cDXLEDEo%2BIL4qJ5ovtU3HR8YzXmSMm0pZn82EfkLBTcsbigQ0DvopsqLPpJi08Ujev4NapYz1%2BKlki1MHeRJQvGr%2Fv%2Bj%2BHw2csUEC0tLlIKnwmIKOQWYvieKEfaEuHuuEEvEOjYXTdmZwF7qFwq5F9SQjVbeT7c4pxataKCvFER6TJ6NuDMuO05fPj0kwGXQdyJVb0HYEFSRT10OgNLu%2BwOXI4aqTC3ntBDIMF7C2tbEcukXD9A%2BYFa6V2GY7IbUmlg0FQqEkNR5N%2FYhy%2BH%2Feml6xlto%2Fz7PU1ZNtrKC5ZyRpDH6ljMJGv%2FIjDGpaM15VSaD4qnW1FGEWHGmiSENwYR2fVWcyLQHfESbCM39mRAk4TVYd%2BS%2BuwFCXHS9Le55D093yt8l%2FSpH21HWKKHpEs8yB2AKrPpBgU4RvY3UKgdyKg%2BxiXFAiQfbpZe5F6dm0vevc7oAoqRGx92nwIvFYb6V8teEFNEX3GQnWbqXSfLCmHhAOFivfH9TBjs%2Bhk4dyoxj%2FIgQF%2B1GicORRrrizX7dQmSiuujSZcytztEr9XdVkyepvJ%2BYuybZalqOsiLAWzp7KWj3Y%2FvFwpxaK7XZGCBu1OZwfhMSBblHrTMr21TLhqKWIGUPEzNobmFfquYpSdCXWQhoggh6kUMSFG8SwcML8HsbjYM0zOF%2Bejt1ntQ4sYVaJNf2VUJg6OQX3ERtBSBSf3gyM7UvvaBgt6pMMBHZLdM26XYUCPAp6mosdOno3d3xgfFLEwsIbvswY6sgHUBP8FNE4OToYGOAh%2Fh6IwskyE17r8R0P1vycPPpGF88bov7vECd6Ia2%2BRSdCEEKrPegMbgdf19B0v9fB7S5WtMeyE%2FUIozN9%2FYK1dCS19tpHVO29AktQjSS%2FGBehJg4ak8psWOYOyf5hkvocrqqLa5%2BBpt597kaP0uEq2rX0NtWwda29jCeavXR46OV9PZ9MKw6wEMY6qMunaAwSw2Zb6weTbT5cCa1hcfn2zgwT1gCng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240626T082057Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKLSQRX4S%2F20240626%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d16d90bf6c448151053286d0d245e81ee92db7b020ecd4d22deda14fba44a7cc"
          ></q-img>
        </q-item-section>
        <q-item-section>Icons only</q-item-section>
      </q-item>
    </q-slide-item>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

defineOptions({
  name: 'IndexPage',
});

function onLeft({ reset }: any) {
  $q.notify('Added to favourites');
  finalize(reset);
}

function onRight({ reset }: any) {
  finalize(reset);
}

const $q = useQuasar();
let timer;

function finalize(reset: () => void) {
  timer = setTimeout(() => {
    reset();
  }, 1000);
}
</script>
