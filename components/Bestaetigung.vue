<template>
  <div
    class="w-11/12 md:max-w-screen-xl md:w-10/12 mx-auto text-lg border-b border-gray-400 md:py-16"
  >
    <section class="mx-auto justify-center w-5/6">
      <div>
        <Headline :title="title" :subtitle="subtitle" />
      </div>
    </section>

    <div class="w-full md:w-2/3 mx-auto text-center">
      <p class=" text-3xl">
        Ihre Anfrage wurde erfolgreich versendet. <br />Ich werde mich in Kürze
        bei Ihnen melden.
      </p>
      <section class="pt-10 hover:text-red-700 underline pb-12 md:pb-0">
        <a href="https://finanzberatung-ebner.de">Zurück zur Startseite</a>
      </section>
    </div>
  </div>
</template>

<script>
import Headline from "@/components/elements/Headline.vue";

export default {
  components: {
    Headline
  },
  data() {
    return {
      title: "Vielen Dank",
      subtitle: ""
    };
  }
};
</script>

<style></style>
