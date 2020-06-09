<template>
  <div class="py-6">
    <section class="text-center text-2xl">{{title}}</section>
    <section class="text-center text-gray-700 w-1/2 mx-auto leading-snug text-base">{{subtitle}}</section>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"]
  //   props: {
  //     title: String,
  //     required: true
  //   }
};
</script>

<style>
</style>