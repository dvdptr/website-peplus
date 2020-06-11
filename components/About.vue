<template>
  <div class="border-b border-gray-400 pb-12">
    <Headline :title="title" :subtitle="subtitle" />
    <div class="flex pt-12 items-center justify-evenly">
      <div class>
        <img src="@/assets/img/peterEbner.jpg" alt class="rounded-md mx-auto" />
      </div>
      <div class>
        <section class="pb-6">
          <p>Peter Ebner</p>
          <p>Bankkaufmann & Finanzierungsspezialist</p>
        </section>
        <section class v-for="check in checkList" v-bind:key="check">
          <div class="flex items-center">
            <img :src="check.iconUrl" alt class="w-8 ml-2" />
            <p>{{check.item}}</p>
          </div>
        </section>
        <section class="pt-6">
          <button
            class="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow"
          >Kontakt</button>
        </section>
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
      title: "Über meine Person",
      subtitle:
        "Seit mehr als 30 Jahren übe ich den Beruf des Finanzberaters mit Freude und Enthusiasmus aus.",
      checkList: [
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          item: "Freundliche Atmosphäre"
        },
        {
          iconUrl: require("@/assets/svg/ok.svg"),
          item: "Flexible Lösungsvorschläge"
        }
      ]
    };
  }
};
</script>

<style>
</style>