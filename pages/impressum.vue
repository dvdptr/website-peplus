<template>
  <div class="font-medium">
    <Header />
    <div
      class="pylg border-b mx-auto w-11/12 border-gray-400 md:w-10/12 md:max-w-screen-xl"
    >
      <p class="pb-6 text-xl">Impressum</p>
      <p>Angaben gemäß § 5 TMG.</p>
      <div class="pb-4">
        <p>Peter Ebner Finanzberatung</p>
        <p>Im Bungert 5</p>
        <p>54317 Herl</p>
      </div>
      <div class="pb-4">
        <p>e-Mail: peterebner@gmx.de</p>
        <p>Internet: www.finanzberatung-ebner.de</p>
      </div>
      <div class="pb-4">
        <p>Steuernummer: 65348109221</p>
      </div>
      <div class="pb-4">
        <p>Vertreten durch:</p>
        <p>Peter Ebner</p>
        <p>Im Bungert 5</p>
        <p>54317 Herl</p>
      </div>
      <div>
        <p>
          Weiterführende Datenschutzbestimmungen, die im Zusammenhang mit
          Geschäftsabschlüssen und -Anfragen in Zusammenarbeit mit der Starpool
          GmbH wirksam werden:
        </p>
        <a
          href="/documents/Datenschutz-Hinweise.pdf"
          target="_blank"
          class="mt-6"
          >Download</a
        >
      </div>
      <div v-for="auflistung in auflistungImpressum" v-bind:key="auflistung">
        <p class="pt-6 pb-4 font-bold">{{ auflistung.headline }}</p>
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
    Footer,
  },
  head() {
    return {
      title: "Peter Ebner Finanzberatung Plus: Impressum",
    };
  },
  data() {
    return {
      auflistungImpressum: [
        {
          headline: "Anbieterkennung",
          text: "Erlaubnis nach § 34i Abs. 1 S. 1 GewO als Immobiliendarlehensvermittler, <br> Bundesrepublik Deutschland, erteilt durch Verbandsgemeinde Ruwer, Untere Kirchstr. 1, 54320 Waldrach<br>Erlaubnis nach § 34 c Abs. 1 Nr. 1  GewO als Darlehensvermittler für allgemeine Verbraucherdarlehen durch Verbandsgemeinde Ruwer, Untere Kirchstr. 1, 54320 Waldrach<br>Mitglied der Industrie und Handelskammer Trier, <br> Herzogenbuscher Str. 12,54292 Trier.<br> Registernummer D-W-176-VMLS-71 (für § 34i Abs. 1 S. 1 GewO)<br>Registernummer D-30E8-FDHX2-78 (für § 34d Abs. 6 GewO)<br>Vermittlerregister Deutscher Industrie- und Handelskammertag (DIHK) e.V. Breite Straße 29. 10178 Berlin. Telefon: (0 180) 60 05 85 0 (Festnetzpreis 0,20 €/ Anruf; Mobilfunkpreise maximal 0,60 €/Anruf). Fax: 030 20308-1000. E-Mail vr@dihk.de<br>https://www.vermittlerregister.info/",
        },
        {
          headline: "Berufsrechtliche Regelungen",
          text: "§ 34i GewO<br>ImmVermV<br>§ 34d GewO. § 34c GewO. Makler- und Bauträgerverordnung (MaBV)<br>Die berufsrechtlichen Regelungen können Sie im Internet unter www.gesetze-im-internet.de einsehen und abrufen.",
        },
        {
          headline: "IHK Registrierungsnummer",
          text: "Registrierungsnummer § 34i GewO: D-W-176-VMLS-71",
        },
        {
          headline: "Vermittlerregister",
          text: "Die Eintragungen im Vermittlerregister können bei dem Deutschen Industrie- und Handelskammertag(DIHK) e.V., Breite Straße 29, 10178 Berlin, Telefon: 0180 600 5850 (20 Cents je Anruf aus dem deutschen Festnetz, max. 60 Cents je Anruf aus dem Mobilfunknetz) als auch im Internet unter http://www.vermittlerregister.info abgefragt werden.",
        },
        {
          headline: "Streitschlichtungs- und Beschwerdestelle",
          text: "Zur außergerichtlichen Beilegung von Streitigkeiten oder Beschwerden stehen Ihnen folgende Beschwerdestellen zur Verfügung: <br> Verantwortlicher und Ansprechpartner für Beschwerden: Peter Ebner, Telefon: 0151 12669832, peterebner@gmx.de <br> Schlichtungsstelle für gewerbliche Versicherungs-, Anlage- und Kreditvermittlung Glockengießerwall 2, 20095 Hamburg; www.schlichtung-finanzberatung.de",
        },
        {
          headline: "Externe Ansprechpartner",
          text: "Schlichtungsstelle bei der Deutschen Bundesbank, Postfach 11 12 32, 60047 Frankfurt. Tel.: 069/23 88 1907, Telefax: 069/23 88 1919",
        },
        {
          headline: "Abmahnungshinweis",
          text: "Keine Abmahnung ohne vorherigen Kontakt! Sollte der Inhalt oder die Aufmachung dieser Seiten fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, so bitten wir um eine entsprechende Nachricht ohne Kostennote. Die Beseitigung einer ggf. von diesen Seiten ausgehenden Schutzrecht-Verletzung durch Schutzrecht-InhaberInnen selbst darf nicht ohne unsere Zustimmung stattfinden. Wir garantieren, dass die zu Recht beanstandeten Passagen und/oder Produkte unverzüglich entfernt werden, ohne dass von Ihrer Seite das Einschalten eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten werden wir vollumfänglich zurückweisen und gegebenenfalls Gegenklage wegen Verletzung vorgenannter Bestimmung einreichen.",
        },
        {
          headline: "Haftungshinweis I",
          text: "Für bestimmte Finanzprodukte, zu denen sich Aussagen auf dieser Website befinden könnten, bestehen gesetzliche Beschränkungen bezüglich der Verbreitung von Informationen. Auch der öffentliche Vertrieb dieser Produkte ist in bestimmten Hoheitsgebieten/Staaten gesetzlich beschränkt. Personen, die der Gerichtsbarkeit solcher Hoheitsgebiete unterstellt sind, tragen selbst die Verantwortung, sich über derartige Beschränkungen sowie die einschlägigen Gesetze/Vorschriften zu informieren und diese einzuhalten. Dies betrifft insbesondere Staatsbürger der USA oder in den USA lebende Personen, sowie Staatsbürger Großbritanniens oder in Großbritannien lebende Personen.",
        },
        {
          headline: "Haftungshinweis II",
          text: "Die Inhalte dieser Website werden mit Sorgfalt zusammengestellt und regelmäßig aktualisiert, dienen aber lediglich der unverbindlichen allgemeinen Information und ersetzen nicht eine eingehende individuelle Beratung in Finanzangelegenheiten. In keinem Fall dürfen die auf dieser Website veröffentlichten Informationen als Rechts-, Steuer- oder Finanzberatung sowie sonstige Beratung ausgelegt werden. Der Herausgeber übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der verbreiteten Informationen auf dieser Website oder den jederzeit störungsfreien Zugang. Des Weiteren übernimmt er keinerlei Haftung (Fahrlässigkeit uneingeschränkt eingeschlossen) für Verluste oder Schäden (direkte Schäden, spezielle indirekte Schäden und Folgeschäden), die sich aus dem Vertrauen auf die hier veröffentlichten Informationen ergeben oder im Zusammenhang mit der Benutzung dieser Website bzw. dem Zugriff auf diese Seite oder aus der Verlinkung mit anderen Websites entstehen.",
        },
      ],
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
