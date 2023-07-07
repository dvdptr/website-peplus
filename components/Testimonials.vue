<template>
  <div
    class="border-b pylg mx-auto w-full border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl"
  >
    <Headline :title="title" :subtitle="subtitle" />

    <!-- Leistungen Loop -->

    <div class="">
      <div
        class="mx-auto px-4 pt-4 md:w-2/3 md:px-0"
        v-for="(leistung, index) in leistungenOverview"
        v-bind:key="index"
      >
        <div class="border-b-2 pb-8">
          <section class="text-4xl text-gray-800">»</section>
          <div class="text-sm leading-snug text-gray-800">
            {{ leistung.text }}
          </div>
          <section class="pb-2 text-4xl text-gray-800">«</section>
          <div class="text-lg leading-snug text-yellow-500">
            {{ leistung.rating }}
          </div>
          <div class="pb-2 text-sm leading-snug text-gray-800">
            {{ leistung.name }}
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
      title: "Kundenbewertungen",
      subtitle:
        "Die Zufriedenheit meiner Kunden steht an oberster Stelle. Ich nehme mir Zeit, ihre individuellen Bedürfnisse und Ziele zu verstehen, um ihnen die bestmögliche Beratung zu bieten. Lesen Sie hier eine Auswahl meiner Bewertungen.",
      leistungenOverview: [
        {
          text: "Zunächst einmal herzlichen Dank an Herrn Ebner und seinen Mitarbeiter Herrn Schuster! Wir kannten Herrn Ebner bereits aus früheren Zeiten als angestellten Berater. Als wir erfuhren, dass er nun mit Finanzberatung PLUS selbstständig ist, war für uns klar, dass wir wieder zu ihm möchten! Und auch dieses Mal fühlten und fühlen uns immernoch in den besten Händen. Herr Ebner nimmt sich Zeit für die Beratung und steht bei allen Anliegen und Fragen mit Rat und Tat zur Seite. Man wird allumfassend beraten und unterstützt. Die Kommunikation mit Banken, die Beantragung etc. übernimmt Herr Ebner und wenn es notwendig ist, auch mit dem nötigen Nachdruck. :-) Selbst nach Auszahlung des Kredites steht Herr Ebner jederzeit zur Verfügung, kümmert sich um weitere Auszahlungen etc. Hier steht der Kunde absolut im Mittelpunkt! Wir hoffen, dass Herr Ebner uns noch lange als Berater zur Seite steht und können die Finanzberatung PLUS nur jedem ans Herz legen, der sich bei Finanz- und Kreditfragen gut aufgehoben und ernst genommen fühlen möchte! Vielen lieben Dank",
          name: "Andre & Jasmin, 15.06.2023",
          rating: "★★★★★",
        },
        {
          text: "Wir haben Herrn Ebner selbst von einem Freund empfohlen bekommen. TOP!! Ein sehr sympathischer Mensch! Wir sind mehr als zufrieden. Wir können Ihn auch nur weiterempfehlen. Finanzierungsablauf schnell und problemos. Man kann Ihn jederzeit erreichen und auch mehrmals nachfragen wenn man etwas nicht verstanden hat. Vielen Dank für Ihre Zeit, Geduld und Mühe",
          name: "Frau Und Herr Chalil, 15.05.2023",
          rating: "★★★★★",
        },
        {
          text: "Beratung mit Herrn Ebner war 1A. Dies schon zum wiederholten Male. Finanzierungsabwicklung schnell und problemlos, jederzeit erreichbar. So wünscht man sich eine Finanzberatung. Abschluss absolut zu meiner Zufriedenheit. Kann ich nur empfehlen und würde dies wieder in Anspruch nehmen. Für mich gäb es keine Alternantive.",
          name: "Herr Glaubitz, 14.10.2022",
          rating: "★★★★★",
        },
      ],
    };
  },
};
</script>

<style></style>
