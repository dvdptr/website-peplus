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
        Mobil: 0151 12 669 832 <br />e-Mail: peterebner@gmx.de
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
      <a
        href="https://www.provenexpert.com/finanzberatung-plus/?utm_source=Widget&amp;utm_medium=Widget&amp;utm_campaign=Widget"
        title="Kundenbewertungen &amp; Erfahrungen zu Finanzberatung PLUS. Mehr Infos anzeigen."
        target="_blank"
        style="text-decoration: none"
        rel="noopener noreferrer"
        ><img
          src="https://images.provenexpert.com/3a/81/5a81c4561f633d5d5cee78f4982c/widget_portrait_180_de_0.png"
          alt="Erfahrungen &amp; Bewertungen zu Finanzberatung PLUS"
          width="180"
          height="216"
          style="border: 0"
      /></a>
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
