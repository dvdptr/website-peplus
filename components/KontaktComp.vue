<template>
  <div
    class="w-11/12 md:max-w-screen-xl md:w-10/12 mx-auto text-lg border-b border-gray-400 pylg"
  >
    <section class="mx-auto justify-center">
      <div>
        <Headline :title="title" :subtitle="subtitle" />
      </div>
    </section>
    <div class="mx-auto text-center">
      <section class="py-4">
        <p class="font-bold pb-1">Home-Office</p>
        Finanzberatung Plus<br />Peter Ebner<br />Im Bungert 5 <br />54317 Herl
        <br />
      </section>
      <section class="py-4">
        <p class="font-bold pb-1">Kontakt</p>
        Mobil: 0151 12 669 832 <br />e-Mail: peterebner@gmx.de
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
      subtitle: ""
    };
  }
};
</script>

<style></style>
