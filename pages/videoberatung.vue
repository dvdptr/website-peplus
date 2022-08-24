<template>
  <div class="font-medium">
    <Header />
    <div class="spacing border-b border-gray-400">
      <Headline :title="title" :subtitle="subtitle" />
      <!-- Grafik-Videoberatung -->
      <div class="md:w-full md:w-3/4">
        <div
          class="mx-auto my-6 flex-none items-center justify-center p-0 md:flex md:p-8"
        >
          <div class="w-full md:w-1/2">
            <img src="@/assets/img/videoberatung-DE.png" alt class="mx-auto" />
          </div>
          <div class="w-full md:w-1/3">
            <div
              class="mb-4 flex items-center px-4"
              v-for="vorteil in vorteileVideoberatung"
              v-bind:key="vorteil"
            >
              <img :src="vorteil.iconUrl" alt class="mx-4 h-3 w-3" />
              {{ vorteil.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Grafik-Videoberatung -->
    <Kontakt />

    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Kontakt from "~/components/Kontakt.vue";
import Headline from "~/components/elements/Headline.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Kontakt,
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
      title: "Videoberatung",
      subtitle:
        "Der besondere Service: Egal wo Sie in Deutschland wohnen, wenn Sie möchten können wir uns gerne mittels Video-Konferenz schnell und unkompliziert persönlich unterhalten.",
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
