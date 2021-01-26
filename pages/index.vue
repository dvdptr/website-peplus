<template>
  <div class="font-medium">
    <Header />

    <Construction />
  </div>
</template>

<script>
import Construction from "~/components/Construction.vue";

export default {
  components: {
    Header,
    Hero,
    About,
    Netzwerk,
    Kontakt,
    Footer,
    Leistungen
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
            "Peter Ebner Finanzberatung Plus: Als unabhängiger Finanzierungsspezialist bin ich Ihr Partner rund um die Themen Finanzierung, Finanzieren ohne Eigenkapital und Privatkredite."
        }
      ]
    };
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
