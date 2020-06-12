<template>
  <div class="spacing text-lg border-b border-gray-400 pylg">
    <section>
      <div>
        <Headline :title="title" :subtitle="subtitle" />
      </div>
    </section>

    <!-- Leistungen Loop -->
    <div class="flex flex-wrap justify-center">
      <div
        class="border border-gray-500 rounded-sm w-5/12 p-4 mx-4 mb-3"
        v-for="leistung in leistungenOverview"
        v-bind:key="leistung"
      >
        <div class>
          <div class="pb-2 font-bold">
            <img :src="leistung.iconUrl" alt class />
            {{ leistung.headline }}
          </div>
          <div class="text-sm leading-snug text-gray-800 pb-2">{{ leistung.text }}</div>

          <a
            href="mailto:peterebner@gmx.de"
            class="text-red-800 hover:font-bold text-sm"
          >Termin vereinbaren &#8594;</a>
        </div>
      </div>
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
      title: "Leistungen im Überblick",
      subtitle: "Überblick der Leistungen",
      leistungenOverview: [
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Baufinanzierung",
          text:
            "Sie möchten eine Wohnung oder ein Haus kaufen und benötigen hierzu eine Finanzierung? Oder haben Sie konkrete Fragen zu Konditionen oder Höhe der monatlichen Rate? Gerne berate ich Sie rund um das Thema Baufinanzierung."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Finanzieren ohne Eigenkapital",
          text:
            "Baufinanzierungen ohne eigene Mittel (Eigenkapital) werden immer häufiger nachgefragt. Dabei ermöglicht eine Kombination aus Eigenkapital-Ersatzdarlehen und Baufinanzierung den Start in die eigenen vier Wände. Wir können das ermöglichen."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Privatkredit",
          text:
            "Sie benötigen einen Privatkredit zur freien Verwendung? Oder möchten Sie für einen bestehenden Kredit die Zinsen verbessern? Erkundigen Sie sich nach Sondertilgungen und zinsgünstigen Darlehen verschiedener Banken. Gerne helfe ich Ihnen weiter."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Anschlussfinanzierung",
          text:
            "Ihre Zinsbindung läuft bald aus und eine Restschuld ist noch vorhanden? Profitieren Sie von einer maßgeschneiderten Lösung für Ihre Weiterfinanzierung oder sichern Sie sich schon heute Ihren Zinssatz für später (Forward-Darlehen)."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Versicherungen",
          text:
            "Egal ob Berufsunfähigkeitsschutz, Sachversicherungen oder Rentenversicherung – Vorsorge ist wichtig! Erfahren Sie mehr rund um das Thema Absicherungen mit Hinblick auf Ihre persönliche Situation."
        },
        {
          //   iconUrl: require("@/assets/svg/chevron-r.svg"),
          headline: "Individuelle Beratung",
          text:
            "Gerne unterstütze ich Sie auch in schwierigen Fällen einer Finanzierung, die bspw. bei Ihrer Hausbank abgelehnt wurde. Nehmen Sie hierzu ganz einfach unverbindlich Kontakt auf und lassen Sie uns gemeinsam nach einer Lösung suchen."
        }
      ]
    };
  }
};
</script>

<style>
</style>