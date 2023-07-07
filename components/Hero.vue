<template>
  <div class="border-b pb-16 pt-6 md:pt-16">
    <div
      class="mx-auto w-full border-gray-400 md:flex md:w-10/12 md:max-w-screen-xl md:items-center md:justify-between"
    >
      <div
        class="mx-auto flex w-11/12 text-center md:w-1/2 md:py-6 md:text-left"
      >
        <section>
          <p class="pb-4 text-4xl font-bold leading-tight md:text-5xl">
            Finanzierung
            <br />leicht gemacht.
          </p>
          <p class="pb-4 text-lg text-gray-800 md:leading-snug">
            Sie benötigen individuelle Beratung für Ihre geplante Finanzierung?
            Als unabhängiger Finanzierungsspezialist bin ich Ihr Partner rund um
            die Themen Finanzierung, Finanzieren ohne Eigenkapital und
            Privatkredite im Großraum Trier, Saarbrücken und bundesweit.
          </p>
          <p class="pb-6 text-lg text-gray-800">Ich bin gerne für Sie da.</p>
          <button
            class="rounded shadow bg-red-700 py-2 px-4 font-bold text-white hover:bg-red-600"
          >
            <NuxtLink to="/kontakt">Kontaktformular</NuxtLink>
          </button>
          <button
            class="border rounded shadow ml-3 border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 hover:bg-red-100"
          >
            <a href="mailto:peterebner@gmx.de" target="_blank"
              >e-Mail schreiben</a
            >
          </button>
        </section>
      </div>

      <div class="mx-auto w-11/12 pl-0 pt-12 md:w-1/2 md:pl-10 md:pt-0">
        <section>
          <div class=" ">
            <picture>
              <source
                type="image/webp"
                srcset="~/assets/img/familie-hero.webp"
              />
              <source
                type="image/jpeg"
                srcset="~/assets/img/familie-hero.jpg"
              />
              <img
                class="rounded-lg"
                alt="Portrait of a laughing family"
                src="~/assets/img/familie-hero.jpg"
              />
            </picture>
          </div>
        </section>
      </div>
    </div>

    <!-- Leistungen Overview  -->

    <div
      class="gr mx-auto grid w-11/12 gap-2 border-gray-400 pt-16 sm:w-10/12 sm:grid-cols-3 sm:gap-8"
    >
      <div
        class="rounded-xl bg-red-100 p-2"
        v-for="(leistung, index) in leistungenOverview"
        v-bind:key="index"
      >
        <div class>
          <div class="mx-auto pb-2 text-center text-base font-bold">
            <img :src="leistung.iconUrl" alt class="mx-auto" />
            {{ leistung.headline }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Leistungen im Überblick",
      subtitle:
        "Als unabhängiger Finanzberater biete ich Ihnen ein breites Angebot möglicher Finanzierungsmethoden.",
      leistungenOverview: [
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Baufinanzierung & Anschlussfinanzierung",
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Finanzieren ohne Eigenkapital",
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Privatkredite & Zinsoptimierung",
        },
      ],
    };
  },
};
</script>

<style></style>
