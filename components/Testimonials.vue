<template>
  <div
    class="border-b pylg mx-auto w-full border-gray-400 text-lg md:w-10/12 md:max-w-screen-xl"
  >
    <Headline :title="title" :subtitle="subtitle" />

    <!-- Bewertungen -->
    <div class="flex flex-wrap justify-between">
      <!-- BewertungenLeft -->
      <section class="px-4 pt-4 md:w-1/2 md:px-0 md:pr-8">
        <div v-for="(leistung, index) in leistungenLeft" v-bind:key="index">
          <div class="border-b-2 pb-6 pt-6">
            <section class="text-xl font-bold text-gray-800">»</section>
            <div class="text-sm leading-snug text-gray-800">
              {{ leistung.text }}
            </div>
            <section class="pb-2 text-xl font-bold text-gray-800">«</section>
            <div class="text-lg leading-snug text-yellow-500">
              {{ leistung.rating }}
            </div>
            <div class="pb-2 text-sm leading-snug text-gray-800">
              {{ leistung.name }}
            </div>
          </div>
        </div>
      </section>
      <!-- BewertungenRight -->
      <section class="float-right px-4 pt-4 md:w-1/2 md:px-0 md:pl-8">
        <div v-for="(leistung, index) in leistungenRight" v-bind:key="index">
          <div class="border-b-2 pb-6 pt-6">
            <section class="text-xl font-bold text-gray-800">»</section>
            <div class="text-sm leading-snug text-gray-800">
              {{ leistung.text }}
            </div>
            <section class="pb-2 text-xl font-bold text-gray-800">«</section>
            <div class="text-lg leading-snug text-yellow-500">
              {{ leistung.rating }}
            </div>
            <div class="pb-2 text-sm leading-snug text-gray-800">
              {{ leistung.name }}
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="flex">
      <div class="mx-auto">
        <button
          class="border rounded shadow ml-3 mt-10 border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 hover:bg-red-100"
        >
          <a
            href="https://www.provenexpert.com/finanzberatung-plus/"
            target="_blank"
            >Alle Bewertungen ansehen</a
          >
        </button>
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
      leistungenLeft: [
        {
          text: "Ich möchte meine aufrichtige Dankbarkeit für die hervorragende Finanzberatung zum Ausdruck bringen, die ich erhalten habe. Die professionelle Herangehensweise, kombiniert mit tiefgreifendem Fachwissen und einem echten Interesse an meinen finanziellen Zielen, hat mich beeindruckt. Durch klare Erklärungen und individuelle Empfehlungen fühle ich mich sicherer in meinen finanziellen Entscheidungen. Ich kann diese Finanzberatung jedem empfehlen, der nach einer vertrauenswürdigen Beratung sucht.",
          name: "13.02.2024, Eiad Almohammad",
          rating: "★★★★★",
        },
        {
          text: "Durch den Makler bin ich auf Herrn Ebner aufmerksam geworden. Von dem ersten Gespräch an, war mir Herr Ebner sehr sympathisch. Er ist jederzeit erreichbar und es besteht sogar die Möglichkeit nach Absprache Termine nach 20 Uhr zu vereinbaren, dies ist nicht selbstverständlich. Ich fühle mich bei Herrn Ebner sehr gut aufgehoben, er kümmert sich um alles und steht einem immer zur Seite. Herr Ebner kann ich mit zu 100% weiterempfehlen.",
          name: "09.10.2023, M.R.",
          rating: "★★★★★",
        },
        {
          text: "Herr Ebner ist extrem zuverlässig und hat mich in allen Belangen sehr gut unterstützt. Die Beratung war sehr professionell, er hat aber darüber hinaus auch ein offenes Ohr und kann sehr gut auf die Unsicherheiten seiner Kunden eingehen und ihnen diese nehmen. Ich bin rundum zufrieden!",
          name: "28.09.2023, Frau Rogo",
          rating: "★★★★★",
        },
        {
          text: "Zunächst einmal herzlichen Dank an Herrn Ebner und seinen Mitarbeiter Herrn Schuster! Wir kannten Herrn Ebner bereits aus früheren Zeiten als angestellten Berater. Als wir erfuhren, dass er nun mit Finanzberatung PLUS selbstständig ist, war für uns klar, dass wir wieder zu ihm möchten! Und auch dieses Mal fühlten und fühlen uns immernoch in den besten Händen. Herr Ebner nimmt sich Zeit für die Beratung und steht bei allen Anliegen und Fragen mit Rat und Tat zur Seite. Man wird allumfassend beraten und unterstützt. Die Kommunikation mit Banken, die Beantragung etc. übernimmt Herr Ebner und wenn es notwendig ist, auch mit dem nötigen Nachdruck. :-) Selbst nach Auszahlung des Kredites steht Herr Ebner jederzeit zur Verfügung, kümmert sich um weitere Auszahlungen etc. Hier steht der Kunde absolut im Mittelpunkt! Wir hoffen, dass Herr Ebner uns noch lange als Berater zur Seite steht und können die Finanzberatung PLUS nur jedem ans Herz legen, der sich bei Finanz- und Kreditfragen gut aufgehoben und ernst genommen fühlen möchte! Vielen lieben Dank",
          name: "15.06.2023, Andre & Jasmin",
          rating: "★★★★★",
        },
      ],
      leistungenRight: [
        {
          text: "Beratung mit Herrn Ebner war 1A. Dies schon zum wiederholten Male. Finanzierungsabwicklung schnell und problemlos, jederzeit erreichbar. So wünscht man sich eine Finanzberatung. Abschluss absolut zu meiner Zufriedenheit. Kann ich nur empfehlen und würde dies wieder in Anspruch nehmen. Für mich gäb es keine Alternantive.",
          name: "14.10.2022, Herr Glaubitz",
          rating: "★★★★★",
        },
        {
          text: "Absolut empfehlenswert. Super schnell, unglaublich kompetent, sehr engagiert. Der Kunde steht immer im Fokus. Danke!",
          name: "17.08.2022, Frau Bemsz-Jakubowska & Herr Jakubowski",
          rating: "★★★★★",
        },
        {
          text: "Herr Ebner hat uns ein ganzes Jahr auf unserer Suche nach unserem Traumhaus und der anschließenden Finanzierung begleitet. Wir konnten ihn jederzeit anrufen und er hat sich auch am Wochenende um alle anfallenden Fragen gekümmert. Gerade in der aktuell schwierigen Immobiliensituation, gepaart mit immer steigenderen Zinsen, hat Herr Ebner das absolut beste Finanzierungsangebot für uns gefunden und einen unkomplizierten und immer zuverlässigen Kontakt mit allen Beteiligten für uns ermöglicht. Wir haben ihn schon einigen Freunden empfohlen und würden das auch immer wieder tun. An dieser Stelle auch nochmal ein ganz großes Dankeschön für die tolle Arbeit!",
          name: "15.04.2022, Frau Schmitt",
          rating: "★★★★★",
        },
        {
          text: "Ich habe in Herrn Ebner einen sehr freundlichen und vor allem einen überaus kompetenten Berater, den man so bei vielen Banken nicht findet, gefunden. Er kennt sich auch sehr gut in den KfW Programmen aus und findet für den Kunden, dass für ihn, passende Konzept. Da er nicht an eine bestimmte Bank gebunden ist hat man so die Möglichkeit an die günstigsten Konditionen und Förderprogamme zu kommen. Die Beratung bei Herrn Ebner ist kostenlos. Ich kann Ihnen Herrn Ebner sehr empfehlen.",
          name: "20.10.2021, Frau Bauer",
          rating: "★★★★★",
        },
      ],
    };
  },
};
</script>

<style></style>
