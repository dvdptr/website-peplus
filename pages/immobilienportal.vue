<template>
  <div class="font-medium">
    <Header />
    <div class="spacing border-b border-gray-400 py-12 text-xl">
      <Headline :title="title" :subtitle="subtitle" />
      <Immo />
      <Kontakt />

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Immo from "~/components/Immo.vue";
import Kontakt from "~/components/Kontakt.vue";
import Headline from "~/components/elements/Headline.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Kontakt,
    Immo,
    Headline,
    Footer,
  },
  head() {
    return {
      title: "Peter Ebner Finanzberatung Plus: Videoberatung",
    };
  },
  data() {
    return {
      title: "Immobilienportal",
      subtitle:
        "Sie suchen noch nach einer passenden Immobilie? Dann haben wir etwas für Sie. Ganz einfach für Sie. Ganz entspannt.",
      vorteileVideoberatung: [
        {
          text: "Wohnort unabhängig",
          iconUrl: require("@/assets/svg/chevron-r.svg"),
        },
        {
          text: "Flexible Beratungstermine",
          iconUrl: require("@/assets/svg/chevron-r.svg"),
        },
        {
          text: "Bequem von Zuhause aus",
          iconUrl: require("@/assets/svg/chevron-r.svg"),
        },
        {
          text: "Für Sie kostenfrei",
          iconUrl: require("@/assets/svg/chevron-r.svg"),
        },
        {
          text: "Ohne Installation ausführbar",
          iconUrl: require("@/assets/svg/chevron-r.svg"),
        },
      ],
    };
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
