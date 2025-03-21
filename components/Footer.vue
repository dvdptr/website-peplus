<template>
  <div
    class="border-b mx-auto w-full justify-center border-gray-400 bg-gray-700 px-4 py-8 text-sm leading-tight text-white md:flex md:px-0"
  >
    <div class="">
      <section class="mr-12 py-4">
        <LogoWhite class="h-10 fill-current text-white" />
      </section>
    </div>
    <div class="md:flex">
      <section class="mr-12 py-4">
        <p class="pb-1 font-bold">Home-Office</p>
        Peter Ebner <br />Im Bungert 5 <br />54317 Herl
        <br />
      </section>
      <section class="mr-12 py-4">
        <p class="pb-1 font-bold">Kontakt</p>
        Mobil: 0151 12 669 832 <br />e-Mail: info@finanzberatung-ebner.de
      </section>
    </div>
    <section class="mr-12 py-4">
      <p class="pb-1 font-bold">Links</p>
      <nuxt-link to="/impressum">Impressum</nuxt-link>
      <br />
      <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
    </section>
    <section class="py-4">
      <!-- ProvenExpert Bewertungssiegel -->
      <span
        id="provenexpert_circle_widget_qnphv"
        style="text-decoration: none"
      ></span>
      <script
        type="text/javascript"
        async
        src="https://www.provenexpert.com/widget/circlewidget.js?s=150&id=qnphv&u=2RQAiSQpiuwolAKp082A0Hmo1HGZjHGB"
      ></script>
      <!-- ProvenExpert Bewertungssiegel -->
    </section>
  </div>
</template>

<script>
import LogoWhite from "@/components/LogoWhite.vue";
export default {
  components: {
    LogoWhite,
  },
};
</script>

<style></style>
