<template>
  <div class="font-medium">
    <Header />
    <Hero />
    <About />
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
import About from "~/components/About.vue";
import Claim from "~/components/Claim.vue";
import Netzwerk from "~/components/Netzwerk.vue";
import Kontakt from "~/components/Kontakt.vue";
import Footer from "~/components/Footer.vue";
import Leistungen from "~/components/Leistungen.vue";

export default {
  components: {
    Header,
    Hero,
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
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
