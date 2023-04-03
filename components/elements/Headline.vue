<template>
  <div class="">
    <h1>{{ title }}</h1>
    <p
      class="mx-auto w-11/12 pt-2 text-center text-base leading-snug text-gray-700 sm:w-1/2"
    >
      {{ subtitle }}
    </p>
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
