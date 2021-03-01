<template>
  <div class="font-medium">
    <Header />
    <Bestaetigung />
    <Kontakt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Bestaetigung from "~/components/Bestaetigung.vue";
import Kontakt from "~/components/Kontakt.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Bestaetigung,
    Kontakt,
    Footer
  },
  head() {
    return {
      title: "Peter Ebner Finanzberatung Plus: Kontakt"
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
