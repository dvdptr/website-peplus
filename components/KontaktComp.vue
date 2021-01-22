<template>
  <div class="spacing text-lg border-b border-gray-400 pylg">
    <section>
      <div>
        <Headline :title="title" :subtitle="subtitle" />
      </div>
    </section>
    <div class="m-auto text-center">
      <section class="py-4 mr-12">
        <p class="font-bold pb-1">Home-Office</p>
        Im Bungert 5 <br />54317 Herl
        <br />
      </section>
      <section class="py-4 mr-12">
        <p class="font-bold pb-1">Kontakt</p>
        Mobil: 0151 12 669 832 <br />e-Mail: pe@finanzberatung-ebner.de
      </section>
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
      title: "Ich freue mich von Ihnen zu hören",
      subtitle:
        "Wählen Sie eine der aufgelisteten Möglichkeiten um ganz unverbindlich Kontakt zu mir aufzunehmen. "
    };
  }
};
</script>

<style></style>
