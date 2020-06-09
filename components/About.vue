<template>
  <div>
    <section class="border-b border-gray-400">
      <Headline :title="title" :subtitle="subtitle" />
    </section>
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
        "Seit mehr als 30 Jahren übe ich den Beruf des Finanzberaters mit Freude und Enthusiasmus aus."
    };
  }
};
</script>

<style>
</style>