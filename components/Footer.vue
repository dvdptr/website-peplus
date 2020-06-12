<template>
  <div
    class="border-b border-gray-400 py-8 flex mx-auto justify-center text-white leading-tight text-sm bg-gray-600"
  >
    <div class>
      <section class="py-4 mr-12">
        <LogoWhite class="h-10 fill-current text-white" />
      </section>
    </div>
    <div class="flex">
      <section class="py-4 mr-12">
        <p class="font-bold pb-1">Home-Office</p>Im Bungert 5
        <br />54317 Herl
        <br />
      </section>
      <section class="py-4 mr-12">
        <p class="font-bold pb-1">Kontakt</p>Mobil: 0151 12 669 832
        <br />e-Mail: pe@finanzberatung-ebner.de
      </section>
    </div>
    <section class="py-4">
      <p class="font-bold pb-1">Links</p>
      <nuxt-link to="/impressum">Impressum</nuxt-link>
      <br />
      <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
    </section>
  </div>
</template>

<script>
import LogoWhite from "@/components/LogoWhite.vue";
export default {
  components: {
    LogoWhite
  }
};
</script>

<style>
</style>