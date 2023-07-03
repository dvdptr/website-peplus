<template>
  <div class="font-medium">
    <Header />
    <Hero />
    <About />
    <Bewertungen />
    <ClaimImmoService />
    <Claim />
    <Leistungen />
    <Netzwerk />
    <Kontakt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Hero from "~/components/Hero.vue";
import ClaimImmoService from "~/components/ClaimImmoService.vue";
import About from "~/components/About.vue";
import Bewertungen from "~/components/Bewertungen.vue";
import Claim from "~/components/Claim.vue";
import Netzwerk from "~/components/Netzwerk.vue";
import Kontakt from "~/components/Kontakt.vue";
import Footer from "~/components/Footer.vue";
import Leistungen from "~/components/Leistungen.vue";

export default {
  components: {
    Header,
    Hero,
    ClaimImmoService,
    Bewertungen,
    About,
    Claim,
    Netzwerk,
    Kontakt,
    Footer,
    Leistungen,
  },
  head() {
    return {
      title: "Peter Ebner Finanzberatung Plus: Herzlich Willkommen",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Peter Ebner Finanzberatung Plus: Als unabhängiger Finanzierungsspezialist bin ich Ihr Partner rund um die Themen Finanzierung, Finanzieren ohne Eigenkapital und Privatkredite in der Region Trier, Saarbrücken und überregional per Videoberatung.",
        },
      ],
    };
  },
};
</script>

<style>
h1 {
  @apply mx-auto text-center text-3xl font-bold;
}

h2 {
  @apply py-8 text-lg font-bold;
}
</style>
