<template>
  <div class="font-medium">
    <Header />
    <Hero />
    <About />
    <Claim />
    <Testimonials />
    <ClaimImmoService />
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
import Testimonials from "~/components/Testimonials.vue";
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
    Claim,
    Testimonials,
    About,
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
      script: [
        {
          src: "https://cdn.usefathom.com/script.js",
          data: {
            site: "JRCVEPRD",
          },
          defer: true,
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
