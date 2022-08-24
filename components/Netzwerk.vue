<template>
  <div
    class="border-b pylg mx-auto w-full border-gray-400 md:w-10/12 md:max-w-screen-xl"
  >
    <section>
      <Headline :title="title" :subtitle="subtitle" />
    </section>

    <div class="mx-auto flex w-5/6 flex-wrap items-center">
      <div
        class="mx-auto"
        v-for="(logo, index) in netzwerkLogos"
        v-bind:key="index"
      >
        <img :src="logo.imageUrl" alt class="m-4 w-24 lg:m-8 lg:w-24" />
      </div>
    </div>
  </div>
</template>

<script>
import Headline from "@/components/elements/Headline.vue";

export default {
  components: {
    Headline,
  },
  data() {
    return {
      title: "Partner im Netzwerk",
      subtitle:
        "Die besten Konditionen unterschiedlicher Anbieter erhalten Sie bei mir aus einer Hand. Sie profitieren von einem weitgespannten Netzwerk.",
      netzwerkLogos: [
        { imageUrl: require("@/assets/svg/partner-logos/Allianz.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Banco_Santander.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Commerzbank.svg") },
        {
          imageUrl: require("@/assets/svg/partner-logos/BHW_Bausparkasse.svg"),
        },
        { imageUrl: require("@/assets/svg/partner-logos/Postbank.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Wüstenrot.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/DEVK.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/DSL_Bank_logo.svg") },
        {
          imageUrl: require("@/assets/svg/partner-logos/Hanseatic_Bank_Logo.svg"),
        },
        { imageUrl: require("@/assets/svg/partner-logos/HDI-Logo.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Targobank_logo.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Signal-iduna.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Alte_Leipziger.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Gothaer.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Zurich_Logo.svg") },
      ],
    };
  },
};
</script>

<style>
.filter {
  filter: grayscale(100%);
}
</style>
