<template>
  <div class="font-medium">
    <Header />

    <Construction />
  </div>
</template>

<script>
import Construction from "~/components/Construction.vue";

export default {
  components: {
    Construction
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
