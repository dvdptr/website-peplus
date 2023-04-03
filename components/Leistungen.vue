<template>
  <div
    class="border-b pylg mx-auto w-full border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl"
  >
    <Headline :title="title" :subtitle="subtitle" />

    <!-- Leistungen Loop -->
    <div class="flex flex-wrap justify-center pt-12">
      <div
        class="border mx-4 mb-3 w-full rounded-sm border-gray-500 p-4 md:w-5/12"
        v-for="(leistung, index) in leistungenOverview"
        v-bind:key="index"
      >
        <div class>
          <div class="pb-2 font-bold">
            <img :src="leistung.iconUrl" alt class />
            {{ leistung.headline }}
          </div>
          <div class="pb-2 text-sm leading-snug text-gray-800">
            {{ leistung.text }}
          </div>

          <a
            href="mailto:peterebner@gmx.de"
            class="text-sm text-red-800 hover:font-bold"
            >Termin vereinbaren &#8594;</a
          >
        </div>
      </div>
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
      title: "Leistungen im Überblick",
      subtitle:
        "Als unabhängiger Finanzberater biete ich Ihnen ein breites Angebot möglicher Finanzierungsmethoden.",
      leistungenOverview: [
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Baufinanzierung",
          text: "Sie möchten eine Wohnung oder ein Haus kaufen und benötigen hierzu eine Finanzierung? Oder haben Sie konkrete Fragen zu Konditionen oder Höhe der monatlichen Rate? Gerne berate ich Sie rund um das Thema Baufinanzierung.",
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Finanzieren ohne Eigenkapital",
          text: "Baufinanzierungen ohne eigene Mittel (Eigenkapital) werden immer häufiger nachgefragt. Dabei ermöglicht eine Kombination aus Eigenkapital-Ersatzdarlehen und Baufinanzierung den Start in die eigenen vier Wände. Wir können das ermöglichen.",
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Privatkredit",
          text: "Sie benötigen einen Privatkredit zur freien Verwendung? Oder möchten Sie für einen bestehenden Kredit die Zinsen verbessern? Erkundigen Sie sich nach Sondertilgungen und zinsgünstigen Darlehen verschiedener Banken. Gerne helfe ich Ihnen weiter.",
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Anschlussfinanzierung",
          text: "Ihre Zinsbindung läuft bald aus und eine Restschuld ist noch vorhanden? Profitieren Sie von einer maßgeschneiderten Lösung für Ihre Weiterfinanzierung oder sichern Sie sich schon heute Ihren Zinssatz für später (Forward-Darlehen).",
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Versicherungen",
          text: "Egal ob Berufsunfähigkeitsschutz, Sachversicherungen oder Rentenversicherung – Vorsorge ist wichtig! Erfahren Sie mehr rund um das Thema Absicherungen mit Hinblick auf Ihre persönliche Situation.",
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Individuelle Beratung",
          text: "Gerne unterstütze ich Sie auch in schwierigen Fällen einer Finanzierung, die bspw. bei Ihrer Hausbank abgelehnt wurde. Nehmen Sie hierzu ganz einfach unverbindlich Kontakt auf und lassen Sie uns gemeinsam nach einer Lösung suchen.",
        },
      ],
    };
  },
};
</script>

<style></style>
