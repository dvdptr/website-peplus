<template>
  <div
    class="border-b pylg mx-auto w-full border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl"
  >
    <div class="border-b border-gray-400 sm:flex sm:pb-16">
      <div class="mx-auto w-11/12 px-12 sm:w-1/2 sm:px-40">
        <section>
          <div class=" ">
            <picture>
              <source
                type="image/webp"
                srcset="~/assets/img/mockup_smartphone_IV-1.webp"
              />
              <source
                type="image/jpeg"
                srcset="~/assets/img/mockup_smartphone_IV-1.jpg"
              />
              <img
                class="rounded-lg"
                alt="Portrait of a laughing family"
                src="~/assets/img/mockup_smartphone_IV-1.jpg"
              />
            </picture>
          </div>
        </section>
      </div>
      <div
        class="mx-auto w-11/12 pt-8 pb-12 text-base sm:w-1/2 sm:pt-0 sm:pb-0"
      >
        <p>
          <span class="text-xl font-bold"
            >Ab sofort der neue Immobilien-Service: <br />
            Wir suchen für Sie kostenlos nach Immobilien!</span
          >

          <br /><br />
          Mit unserer Suche bieten wir Ihnen die größte Marktabdeckung in
          Deutschland mit Immobilien von 48 Zeitungen, Kleinanzeigenbörsen und
          Immobilien-Portalen.
          <span class="rounded bg-red-200 underline">
            Im Schnitt finden Sie mit unseren Suchaufträgen 4x schneller eine
            Immobilie als mit Vergleichslösungen.</span
          >
          Für aktuell über 220.000 online inserierte Wohnungen und Häuser wird
          automatisch der Marktwert nach Bankenstandard von Sprengnetter
          berechnet. Dadurch erhalten Sie mehr Sicherheit bei Ihrer
          Kaufentscheidung und fairere Preise. <br /><br />Darüber hinaus können
          Sie den Standort analysieren und ausschließlich Immobilien anzeigen
          lassen, die optimal an Schulen, Kitas, Supermärkte und ÖPNV angebunden
          sind. Falls Sie Fragen zu unserem neuen Angebot haben, kommen Sie
          gerne auf mich zu. <br /><br />
        </p>
        <span class="rounded font-bold underline">
          Wie kann ich den kostenlosen Immobilienservice nutzen? </span
        ><br />
        <br />
        Sie möchten sich für den neuen Immobilienservice mit unserem Partner
        ImmoThink kostenfrei anmelden? Geben Sie ganz einfach Ihre gewünschten
        Eckdaten zur Suche in das untenstehende Formular ein und lassen Sie sich
        über neue Inserate informieren.
      </div>
    </div>
    <div class="mx-auto w-11/12 py-12 sm:w-1/2">
      <section class="mx-auto text-center">
        <p class="pb-4 text-2xl font-bold leading-snug sm:pb-0">
          Das Formular zur Immobiliensuche
        </p>
        <p class="text-base leading-snug text-gray-700">
          Tragen Sie nachfolgend Ihre gewünschten Daten zur Filtersuche ein und
          Sie erhalten maßgeschneiderte Inserate kostenlos per eMail.
        </p>
      </section>
      <iframe
        scrolling="no"
        frameborder="0"
        src="https://connect.thinkimmo.com/business/widgets/customer_onboarding/welcome?aTokenWidget=ce37b062-756b-11ed-971b-2772daa22ec7"
        style="height: 860px; width: 100%"
      ></iframe>
    </div>
    <!-- Leistungen Loop -->
    <div
      class="border-t mx-auto flex w-11/12 flex-wrap items-center justify-center border-gray-400 pt-16 sm:w-full"
    >
      <div
        class="mx-2 mb-3 w-full items-center rounded-xl bg-red-100 p-2 sm:w-1/4"
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
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Kostenloser Service",
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Personalisierte Suche",
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Marktabdeckung in Deutschland",
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Automatische Benachrichtigung",
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Unverbindliche Angebote",
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          headline: "Maßgeschneiderte Filtersuche",
        },
      ],
    };
  },
};
</script>

<style></style>
