<template>
  <div class="flex justify-between border-b border-gray-400 py-8">
    <div>
      <Logo class="h-10" />
    </div>
    <section class="flex items-center">Nav</section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
</style>