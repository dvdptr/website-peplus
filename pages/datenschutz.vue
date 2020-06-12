<template>
  <div class="font-medium">
    <Header />
    <p class="text-xl py-12">Datenschutzbestimmungen</p>
    <div class="comp-width">
      <p>Angaben gemäß § 5 TMG.</p>
      <div class="pb-4">
        <p>Peter Ebner FinanzberatungPlus</p>
        <p>Im Bungert 5</p>
        <p>54317 Herl</p>
      </div>
      <div class="pb-4">
        <p>e-Mail: peterebner@gmx.de</p>
        <p>Internet: www.finanzberatung-ebner.de</p>
      </div>

      <div class="pb-4">
        <p>Vertreten durch:</p>
        <p>Peter Ebner</p>
        <p>Im Bungert 5</p>
        <p>54317 Herl</p>
      </div>
      <div v-for="auflistung in auflistungImpressum" v-bind:key="auflistung">
        <p class="pb-4 font-bold">{{ auflistung.headline }}</p>
        <p v-html="auflistung.text"></p>
      </div>
    </div>
    <Kontakt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Kontakt from "~/components/Kontakt.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Kontakt,
    Footer
  },
  data() {
    return {
      auflistungImpressum: [
        {
          headline: "Nutzung von Google Analytics",
          text:
            "Wir verwenden Google Analytics, um die Website-Nutzung zu analysieren. Die daraus gewonnenen Daten werden genutzt, um unsere Website sowie Werbemaßnahmen zu optimieren. Google Analytics ist ein Webanalysedienst, der von Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, United States) betrieben und bereitgestellt wird. Google verarbeitet die Daten zur Website-Nutzung in unserem Auftrag und verpflichtet sich vertraglich zu Maßnahmen, um die Vertraulichkeit der verarbeiteten Daten zu gewährleisten. Während Ihres Website-Besuchs werden u.a. folgende Daten aufgezeichnet: Aufgerufene Seiten, Bestellungen inkl. des Umsatzes und der bestellten Produkte, Die Erreichung von Website-Zielen (z.B. Kontaktanfragen und Newsletter-Anmeldungen), Ihr Verhalten auf den Seiten (beispielsweise Klicks, Scroll-Verhalten und Verweildauer), Ihr ungefährer Standort (Land und Stadt), Ihre IP-Adresse (in gekürzter Form, sodass keine eindeutige Zuordnung möglich ist), Technische Informationen wie Browser, Internetanbieter, Endgerät und Bildschirmauflösung, Herkunftsquelle Ihres Besuchs (d.h. über welche Website bzw. über welches Werbemittel Sie zu uns gekommen sind). Diese Daten werden an einen Server von Google in den USA übertragen. Google beachtet dabei die Datenschutzbestimmungen des „EU-US Privacy Shield“-Abkommens. Google Analytics speichert Cookies in Ihrem Webbrowser für die Dauer von zwei Jahren seit Ihrem letzten Besuch. Diese Cookies enthaltene eine zufallsgenerierte User-ID, mit der Sie bei zukünftigen Website-Besuchen wiedererkannt werden können. Die aufgezeichneten Daten werden zusammen mit der zufallsgenerierten User-ID gespeichert, was die Auswertung pseudonymer Nutzerprofile ermöglicht. Diese nutzerbezogenen Daten werden automatisch nach 14 Monaten gelöscht. Sonstige Daten bleiben in aggregierter Form unbefristet gespeichert."
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
