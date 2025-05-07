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
          text: "Einfach nur Spitze! Es wird alles gemacht was nötig ist um die Vorgänge schnellstmöglich und perfekt auf die persönlichen Bedürfnisse abgestimmt zu erledigen. Man kann jeder Zeit bei Fragen schreiben oder anrufen und es wird alles zu 100% beantwortet oder direkt erledigt. Wir sind mehr als zufrieden und ich würde Herr Ebner jeder Zeit und ohne Bedenken weiterempfehlen. 💯 von 💯 Punkten👍👌",
          name: "05.05.2025, Herr Ritter",
          rating: "★★★★★",
        },
        {
          text: "Herr Ebner hat mich hervorragend bei der Finanzierung meines Mehrfamilienhauses unterstützt. Er hat von Anfang an gefragt, worauf es mir bei der Finanzierung ankommt, und hat genau darauf Rücksicht genommen. Die Kommunikation mit dem Makler hat er direkt übernommen und mir so viele Aufgaben wie möglich abgenommen – ich musste lediglich die nötigen Dokumente einreichen und unterschreiben. Besonders schätze ich, dass er den gesamten Kaufprozess begleitet und dabei stets schnell, zuverlässig und gut erreichbar ist. Man bekommt hier nicht nur eine Finanzierung, sondern echte Dienstleistung. Absolute Empfehlung!",
          name: "02.04.2025, Anonym",
          rating: "★★★★★",
        },
        {
          text: "Herr Ebner hat uns innerhalb 14 Tagen von der Besichtigung Zur Anfrage bis zur Kreditzusage perfekt unterstützt. Auf unseren Finanzierungswunsch ist er direkt eingegangen und hat nach unserer Vorstellung den passenden Kredit/Bank ausgesucht. Er hat sich sehr viel Zeit für uns genommen und war jeder Zeit ansprechbar und hat uns bestmöglich beraten. Vielen Dank",
          name: "20.03.2025, Frau Eberlein",
          rating: "★★★★★",
        },
        {
          text: "Herr Ebner hat uns vom ersten Moment der Kaufinteresse durch alle Phasen hinweg begleitet und stand zu jeder Zeit beratend und unterstützend zur Seite. Er sorgte stets dafür , dass alle Prozesse reibungslos abliefen. Leider kam es letzten Endes nicht zum Kauf und dennoch bekamen wir weitere Unterstützung um unsere Traumimmobilie zu finden. Wir sind rundum zufrieden und können Herr Ebner wärmstens empfehlen. Wir hoffen sehr darauf dass unsere Zusammenarbeit bald fortgesetzt wird. Vielen Dank!",
          name: "04.03.2025, Frau Flörchinger",
          rating: "★★★★★",
        },
        {
          text: "Die Beratung und Mitarbeit mit Herr Ebner ist perfekt. Auf alle Fragen bekam ich sofort eine professionelle Antwort. Ich habe Herr Ebner schon zu zwei Personen weiterempfohlen.",
          name: "22.02.2025, Herr Ascic",
          rating: "★★★★★",
        },

        {
          text: "Meine Frau und ich haben mit Herrn Ebner zusammengearbeitet, der immer da war, um alle unsere Fragen zu beantworten. Wir konnten ihn jederzeit anrufen. Er war immer für uns verfügbar. Er hat sichergestellt, dass wir ihn verstanden haben. Er sprach alle Wörter so aus, dass wir, die Deutsch nicht als Muttersprache haben, ihn verstehen konnten. Er hat sehr hart gearbeitet, damit wir von der Bank die Mittel erhalten, um unser Haus zu kaufen. Er nahm sich die Zeit, uns den gesamten Prozess zu erklären. Wir fühlten uns wohl, mit ihm zusammenzuarbeiten, und er ist ein so wunderbarer Mann, dass wir ihn allen empfehlen, die ein Haus kaufen möchten, insbesondere denen wie uns, die keine Erfahrung im Hauskauf haben.",
          name: "24.04.2024, Herr Tchakounte Und Frau Sonfack",
          rating: "★★★★★",
        },
      ],
      leistungenRight: [
        {
          text: "Peter Ebner und sein Team von Finanzberatung Plus haben einen bemerkenswerten Beitrag geleistet, indem sie einem unserer Kunden den Weg in sein Eigenheim geebnet haben. Ihre professionelle Beratung und ihr tiefgreifendes Verständnis des Marktes haben es dem Kunden ermöglicht, kluge finanzielle Entscheidungen zu treffen und seinen Traum vom Eigenheim zu verwirklichen. Ihre engagierte Unterstützung und ihr Fachwissen verdienen höchste Anerkennung. Ich kann Peter Ebner uneingeschränkt empfehlen für alle, die eine vertrauenswürdige und kompetente Finanzberatung suchen!",
          name: "19.03.2024, Christian Enders / Enders & Partner Immobilien",
          rating: "★★★★★",
        },
        {
          text: "Zunächst einmal herzlichen Dank an Herrn Ebner und seinen Mitarbeiter Herrn Schuster! Wir kannten Herrn Ebner bereits aus früheren Zeiten als angestellten Berater. Als wir erfuhren, dass er nun mit Finanzberatung PLUS selbstständig ist, war für uns klar, dass wir wieder zu ihm möchten! Und auch dieses Mal fühlten und fühlen uns immernoch in den besten Händen. Herr Ebner nimmt sich Zeit für die Beratung und steht bei allen Anliegen und Fragen mit Rat und Tat zur Seite. Man wird allumfassend beraten und unterstützt. Die Kommunikation mit Banken, die Beantragung etc. übernimmt Herr Ebner und wenn es notwendig ist, auch mit dem nötigen Nachdruck. :-) Selbst nach Auszahlung des Kredites steht Herr Ebner jederzeit zur Verfügung, kümmert sich um weitere Auszahlungen etc. Hier steht der Kunde absolut im Mittelpunkt! Wir hoffen, dass Herr Ebner uns noch lange als Berater zur Seite steht und können die Finanzberatung PLUS nur jedem ans Herz legen, der sich bei Finanz- und Kreditfragen gut aufgehoben und ernst genommen fühlen möchte! Vielen lieben Dank",
          name: "15.06.2023, Andre & Jasmin",
          rating: "★★★★★",
        },
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
