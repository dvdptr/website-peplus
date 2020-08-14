<template>
  <div class="font-medium">
    <Header />
    <Hero />
    <About />
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
import Netzwerk from "~/components/Netzwerk.vue";
import Kontakt from "~/components/Kontakt.vue";
import Footer from "~/components/Footer.vue";
import Leistungen from "~/components/Leistungen.vue";

export default {
  components: {
    Header,
    Hero,
    About,
    Netzwerk,
    Kontakt,
    Footer,
    Leistungen,
  },
  head() {
    return {
      title: "test",
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
