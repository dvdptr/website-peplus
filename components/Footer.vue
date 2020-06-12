<template>
  <div
    class="border-b border-gray-400 py-6 flex mx-auto justify-center text-gray-800 leading-tight text-sm"
  >
    <div class>
      <section class="py-4 mr-12">
        <Logo class="h-8" />
      </section>
    </div>
    <div class="flex">
      <section class="py-4 mr-12">
        <p class="underline pb-2">Home-Office</p>Im Bungert 5
        <br />54317 Herl
        <br />
      </section>
      <section class="py-4 mr-12">
        <p class="underline pb-2">Kontakt</p>Mobil: 0151 12 669 832
        <br />e-Mail: pe@finanzberatung-ebner.de
      </section>
      <section class="py-4">
        <p class="underline pb-2">Links</p>
        <nuxt-link to="/impressum">Impressum</nuxt-link>
        <br />
        <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
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