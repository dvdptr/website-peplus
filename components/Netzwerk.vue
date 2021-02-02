<template>
  <div class="spacing border-b border-gray-400 pylg">
    <section>
      <Headline :title="title" :subtitle="subtitle" />
    </section>

    <div class="w-5/6 md:w-3/4 mx-auto flex flex-wrap items-center">
      <div class="mx-auto" v-for="logo in netzwerkLogos" v-bind:key="logo">
        <img :src="logo.imageUrl" alt class="w-24 lg:w-24 m-4 lg:m-8" />
      </div>
    </div>
  </div>
</template>

<script>
import Headline from "@/components/elements/Headline.vue";

export default {
  components: {
    Headline
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
          imageUrl: require("@/assets/svg/partner-logos/BHW_Bausparkasse.svg")
        },
        { imageUrl: require("@/assets/svg/partner-logos/Postbank.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Wüstenrot.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/DEVK.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/DSL_Bank_logo.svg") },
        {
          imageUrl: require("@/assets/svg/partner-logos/Hanseatic_Bank_Logo.svg")
        },
        { imageUrl: require("@/assets/svg/partner-logos/HDI-Logo.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Targobank_logo.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Signal-iduna.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Alte_Leipziger.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Gothaer.svg") },
        { imageUrl: require("@/assets/svg/partner-logos/Zurich_Logo.svg") }
      ]
    };
  }
};
</script>

<style>
.filter {
  filter: grayscale(100%);
}
</style>
