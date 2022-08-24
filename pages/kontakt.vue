<template>
  <div class="font-medium">
    <Header />
    <KontaktComp />
    <Kontakt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Kontakt from "~/components/Kontakt.vue";
import KontaktComp from "~/components/KontaktComp.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Kontakt,
    KontaktComp,
    Footer,
  },
  head() {
    return {
      title: "Peter Ebner Finanzberatung Plus: Kontakt",
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
