<template>
  <div class="pb-12">
    <section class="text-center text-2xl font-bold">{{ title }}</section>
    <section
      class="mx-auto w-11/12 text-center text-base leading-snug text-gray-700 md:w-1/2"
    >
      {{ subtitle }}
    </section>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
  //   props: {
  //     title: String,
  //     required: true
  //   }
};
</script>

<style></style>
