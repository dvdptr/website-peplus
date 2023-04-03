<template>
  <div class="font-medium">
    <Header />
    <div class="spacing border-b border-gray-400 py-12">
      <div class="mx-auto">
        <Headline :title="title" :subtitle="subtitle" />
      </div>

      <Videoberatung />
      <Kontakt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Kontakt from "~/components/Kontakt.vue";
import Videoberatung from "~/components/Videoberatung.vue";
import Headline from "~/components/elements/Headline.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Kontakt,
    Videoberatung,
    Headline,
    Footer,
  },
  head() {
    return {
      title:
        "Die Vorteile der Videoberatung für Ihre Immobilienfinanzierung – Peter Ebner Finanzberatung Plus",
    };
  },
  data() {
    return {
      title: "Die Vorteile der Videoberatung für Ihre Immobilienfinanzierung",
      subtitle:
        "Der besondere Service: Egal wo Sie in Deutschland wohnen, wenn Sie möchten können wir uns gerne mittels Video-Konferenz schnell und unkompliziert persönlich unterhalten.",
    };
  },
};
</script>

<style></style>
