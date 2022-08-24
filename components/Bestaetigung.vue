<template>
  <div
    class="border-b mx-auto w-11/12 border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl md:py-16"
  >
    <section class="mx-auto w-5/6 justify-center">
      <div>
        <Headline :title="title" :subtitle="subtitle" />
      </div>
    </section>

    <div class="mx-auto w-full text-center md:w-2/3">
      <p class="text-3xl">
        Ihre Anfrage wurde erfolgreich versendet. <br />Ich werde mich in Kürze
        bei Ihnen melden.
      </p>
      <section class="pt-10 pb-12 underline hover:text-red-700 md:pb-0">
        <a href="https://finanzberatung-ebner.de">Zurück zur Startseite</a>
      </section>
    </div>
  </div>
</template>

<script>
import Headline from "@/components/elements/Headline.vue";

export default {
  components: {
    Headline,
  },
  data() {
    return {
      title: "Vielen Dank",
      subtitle: "",
    };
  },
};
</script>

<style></style>
