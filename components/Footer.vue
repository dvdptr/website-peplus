<template>
  <div
    class="w-full md:max-w-screen-xl border-b border-gray-400 px-4 md:px-0 py-8 mx-auto md:flex justify-center text-white leading-tight text-sm bg-gray-700"
  >
    <div class="">
      <section class="py-4 mr-12">
        <LogoWhite class="h-10 fill-current text-white" />
      </section>
    </div>
    <div class="md:flex">
      <section class="py-4 mr-12">
        <p class="font-bold pb-1">Home-Office</p>
        Peter Ebner <br />Im Bungert 5 <br />54317 Herl
        <br />
      </section>
      <section class="py-4 mr-12">
        <p class="font-bold pb-1">Kontakt</p>
        Mobil: 0151 12 669 832 <br />e-Mail: peterebner@gmx.de
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

<style></style>
