<template>
  <div
    class="border-b border-gray-400 py-4 flex mx-auto justify-center text-gray-800 leading-tight text-sm"
  >
    <div class>
      <section class="py-4 mr-12">
        <Logo class="h-8" />
      </section>
    </div>
    <div class="flex">
      <section class="py-4 mr-12">
        <p class="underline pb-2">Home-Office</p>Mobil: 000
        <br />e-Mail: email
        <br />
      </section>
      <section class="py-4 mr-12">
        <p class="underline pb-2">Kontakt</p>Mobil: 000
        <br />e-Mail: email
      </section>
      <section class="py-4">
        <p class="underline pb-2">Links</p>Impressum
        <br />Datenschutz
      </section>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style>
</style>